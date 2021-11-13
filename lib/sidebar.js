import {choose} from './utils';

export function getStyle(left,right,top,bottom,size,kSize){
    let style = left || right ? `width:${size}rem` : `height:${size}rem`;
    if(kSize !== size){
        const margin = choose(
            ['margin-right', 'margin-top', 'margin-bottom'],
            [ right, top, bottom],
        'margin-left');
        style += `; ${margin}: -${size-kSize}rem`;
    }
    return style;
}