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
        focusables = [...el.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]'
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