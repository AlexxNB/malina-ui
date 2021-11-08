const { marked } = require('marked');
const {parseExamples,parsePlaceholders,makeImports,hasExamples} = require('./example');
const highlight = require('./highlight');

marked.setOptions({
    highlight: function(code, lang, callback) {
      return `{@html \`${highlight(code)}\`}`;
    }
});


module.exports.malinaMarkdown = function(){
    return {
        name: 'Malina-Markdown-Plugin',
        "dom:before": async ctx => {
            if(!ctx.config.path.endsWith('.md')) return;

            ctx.source = parseExamples(ctx.source);
            ctx.source = marked.parse(ctx.source);

            if(hasExamples()){
                ctx.source = parsePlaceholders(ctx.source);
                ctx.source = makeImports(ctx.source);
            }
        }
    }
}