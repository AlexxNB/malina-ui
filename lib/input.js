export function handleValue(value,type){
    if(['number','range'].includes(type)) return Number(value);
    return value;
}