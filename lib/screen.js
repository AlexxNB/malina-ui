import {store} from 'storxy';




export const screen = store({
    xl: false, // >1200
    l: false,  // 900-1200
    m: false,  // 600-900
    s: false   // <600
}, st => {

    const un = [
        createMatchMedia(null, 599, is => st.$.s = is),
        createMatchMedia(600, 899, is => st.$.m = is),
        createMatchMedia(900, 1199, is => st.$.l = is),
        createMatchMedia(1200, null, is => st.$.xl = is),
    ]

    return ()=>{
        un.forEach( u=>u() );
    }
    
});


function createMatchMedia(from,till,callback){

    let media = 'only screen';
    if(from) media += ` and (min-width: ${from}px)`;
    if(till) media += ` and (max-width: ${till}px)`;

    const handler = e => callback(e.matches);

    const m = window.matchMedia(media);
    m.addEventListener('change',handler);
    handler(m);

    return ()=>{
        mS.removeEventListener('change',handler);
    }
}