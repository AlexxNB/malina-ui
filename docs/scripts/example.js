const malina = require('malinajs');
const highlight = require('./highlight');

let examples=[];

/** Replaces all examples block with placeholders */
module.exports.parseExamples = function(source){
    return source.replace(/```htm\s+example\s*\n([\s\S]+?)(?:\n```code\s*\n([\s\S]+?))?\n\s*```/g,function(_,showcase,code){
        const exID = examples.length;
        examples.push({code,showcase});

        return `<!--Example<${exID}>-->`;
        
    });
}

/** Replaces placeholders with component instances */
module.exports.parsePlaceholders = function(source){
    return source.replace(/<!--Example<(\d+)>-->/g,function(_,exID){
        const {code,showcase} = examples[exID];
        return `<Example code={\`${highlight( code || showcase )}\`}><MalinaExample${exID}/></Example>`;
    });
}

/** Return examples showcases compiled components. ESbuild plugin, */
module.exports.resolveExamples = function(){
    return {
        name: 'examples-components',
        setup(build) {        
            build.onResolve({ filter: /@MalinaExample\d+\.xht$/ }, (args) => {
                return { path: args.path, pluginData: {dir: args.resolveDir}, namespace: 'examplecomponents' }
            }),
            build.onLoad({ filter: /@MalinaExample\d+\.xht$/ }, async (args) => {
                let exID = args.path.match(/@MalinaExample(\d+)\.xht/)[1];
                let ctx = await malina.compile(
                    examples[exID].showcase,
                    {name: 'Example'+exID}
                );
                
               return {
                   contents: ctx.result,
                   loader: 'js',
                   resolveDir: args.pluginData.dir
               }
            });
        }
    }
}

module.exports.makeImports = function(source){
    return`<script>
        import Example from '@app/Example.xht';
        ${examples.map(
            (_,exID)=>`import MalinaExample${exID} from '@MalinaExample${exID}.xht';`)
        .join('')}
    </script>` + source;
}

module.exports.hasExamples = function(){
    return !!examples.length;
}

module.exports.clearExamples = function(){
    examples = [];
}