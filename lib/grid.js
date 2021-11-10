export function getColClass(screen,size,xl,l,m,s){
    if(screen.xl && xl !== false) return 'c'+xl;
    if(screen.l && l !== false) return 'c'+l;
    if(screen.m && m !== false) return 'c'+m;
    if(screen.s && s !== false) return 'c'+s;
    if(size !== false) return 'c'+size;
}