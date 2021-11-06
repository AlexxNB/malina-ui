const styles = ['primary','secondary','error','warning','success']

export function getClasses(ol,cl,ar){
    const classes = [];
    const style = styles[ar.map(i=>!!i).indexOf(true)] || 'light';
    
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