export function handleValue(value){
    if(value === '') return '';
    if(value === 'undefined') return undefined;
    if(value === 'false') return false;
    if(value === 'true') return true;
    if(value === 'NaN') return NaN;

    const num = Number(value);
    return isNaN(num) ? value : num;
}

export function getValue(option){
    if(!option === undefined) return '';
    return option && option.value !== undefined ? option.value : option;
}

export function getLabel(option){
    if(!option === undefined) return '';
    return option && option.label !== undefined ? option.label 
        : option && option.value !== undefined ? option.value
        : option;
}