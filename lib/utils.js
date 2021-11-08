export function choose(names,values,default_value){
    return names[values.map(i=>!!i).indexOf(true)] || default_value;
}