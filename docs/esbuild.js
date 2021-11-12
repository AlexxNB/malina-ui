const { build } = require('esbuild');
const { derver } = require('derver');
const {malinaPlugin} = require('./scripts/malina');
const {malinaMarkdown} = require('./scripts/markdown');
const {resolveExamples,clearExamples} = require('./scripts/example');


const DEV = process.argv.includes('--dev');


if(DEV){
    esbuild({
        minify: false,
        incremental: true
    }).then( bundle =>{
        derver({
            dir: 'docs/public',
            watch: ['docs/public','docs/src','components','lib','icons'],
            preserveScroll: 200,
            onwatch: async (lr,item)=>{
                if(item != 'docs/public'){
                    lr.prevent();
                    try{
                        clearExamples();
                        await bundle.rebuild();
                    }catch(err){
                        console.log(err.message);
                        lr.error(err.toString(),'Build error');
                    }
                }
            }
        })
    })
}else{
    esbuild();
}

async function esbuild(options={}){

    options = {
        entryPoints: ['docs/src/main.js'],
        outfile: 'docs/public/bundle.js',
        minify: true,
        bundle: true,
        plugins: [
            resolveExamples(),
            malinaPlugin({
                css: false,
                compact: false,
                plugins: [malinaMarkdown()]
            })
        ],
        ...options
    };

    return build(options);
}
