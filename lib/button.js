import {choose} from '../lib/utils';



export function getClasses(ol,cl,style){
    const classes = [];
    
    if(!ol && !cl){
        classes.push(`bg-${style}`);
        classes.push(`bd-${style}`);
        classes.push(`txt-bg`);
    }else if(ol || cl){
        classes.push(`txt-${style}`);
        classes.push(`bd-${style}`);
        classes.push(`bg-transparent`);
        if(cl) classes.push(`bd-transparent`);
    }

    return classes.join(' ');
}