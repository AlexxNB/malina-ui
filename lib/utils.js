export function choose(names,values,default_value){
    return names[values.map(i=>!!i).indexOf(true)] || default_value;
}

export function isSlot($option,name){
    name = name || 'default';
    return $option.slots && !!$option.slots[name];
}

/** Trap focus within an element (action) */
export function focusTrap(el){
    let focusables;
    const focus = (noclose)=>{
        if(focusables && focusables.length){
            let first = focusables[0];
            if(noclose){
                const f = focusables.find(el => {
                    if(el.getAttribute('aria-label') == 'Close') return false;
                    if(el.getAttribute('arialabel') == 'Close') return false;
                    return true;
                });
                if(f) first=f;
            }
            
            first.focus();
        }
    }
    const handler = ()=>(!el.contains(document.activeElement) && focus());

    setTimeout(()=>{
        focusables = [...el.querySelectorAll(`
            a[href], 
            button, 
            input, 
            textarea, 
            select, 
            details, 
            [tabindex]`
        )].filter(el => {
            if(el.hasAttribute('disabled')) return false;
            if(el.getAttribute('tabindex') == '-1') return false;
            return true;
        });
        focus(true);
        document.addEventListener('focusin', handler);
    },0);

    return {
        destroy(){document.removeEventListener('focusin', handler);}
    }
}

/** Run callback on escape action */
export function onEscape(el,cb){
    const handler = (e)=>{
        if(e.key === "Escape") cb();
    }

    document.addEventListener('keydown',handler);
    return {
        destroy(){document.removeEventListener('keydown', handler);}
    }
}

/** Makes CSS value from input */
export function cssUnit(value,unit){
    unit = unit || 'rem';
    return isNaN(value) ? value : value+unit;
}

/** Get coords of mouse or touchevent */
export function pointerCoords(e){
    if(e.touches){
        return {x:e.touches[0].clientX,y:e.touches[0].clientY}
    } else if(e.clientX){
        return {x:e.clientX,y:e.clientY}
    } else return null;
}