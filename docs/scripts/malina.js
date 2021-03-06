const malina = require('malinajs');
const fsp = require('fs/promises');

module.exports.malinaPlugin = function(options={}){

    const cssModules = new Map();
    
    return {
        name: 'malina-plugin',
        setup(build) {        
            build.onLoad(
                { filter: /\.(xht|md)$/ }, 
                async (args) => {

                    let source = await fsp.readFile(args.path, 'utf8');

                    let ctx = await malina.compile(source,{
                        path: args.path,
                        name: args.path.match(/([^/\\]+)\.\w+$/)[1],
                        ...options
                    });

                    let code = ctx.result;
                    
                    if(!options.css && ctx.css.result){
                        const cssPath = args.path.replace(/\.\w+$/, ".malina.css").replace(/\\/g, "/");
                        cssModules.set(cssPath,ctx.css.result);
                        code += `\nimport "${cssPath}";`
                    }
                    
                    return { contents: code }
                }
            );

            build.onResolve({ filter: /\.malina\.css$/ }, ({ path }) => {
                return { path, namespace: 'malinacss' }
            })

            build.onLoad({ filter: /\.malina\.css$/, namespace: 'malinacss' }, ({ path }) => {
                const css = cssModules.get(path);
                return css ? { contents: css, loader: "css" } : null;
            })
        }
    }
}