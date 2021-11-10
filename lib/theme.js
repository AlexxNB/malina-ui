import {store} from 'storxy';

export const theme = store('auto', st => {
    if(localStorage.malinauitheme) st.$ = localStorage.malinauitheme;
});

theme.subscribe( mode => {
    if(mode == 'auto') {
        delete document.documentElement.dataset.theme;
        delete localStorage.malinauitheme;
    }else{
        document.documentElement.dataset.theme = localStorage.malinauitheme = mode;
    }      
})

theme.light = function(){ 
    theme.$ ='light' 
}
theme.dark = function(){ 
    theme.$ ='dark' 
}
theme.auto = function(){
    theme.$ = 'auto';
}
