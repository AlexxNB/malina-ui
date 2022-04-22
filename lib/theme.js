import {store,computed} from 'storxy';

export const theme = store('auto', st => {
    if(localStorage.malinauitheme) st.$ = localStorage.malinauitheme;
});

export const currentTheme = computed(theme, mode => {
    if(mode == 'auto')
        return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    else
        return mode;
});

theme.subscribe( mode => {
    if(mode == 'auto') {
        delete document.documentElement.dataset.theme;
        delete localStorage.malinauitheme;
    }else{
        document.documentElement.dataset.theme = localStorage.malinauitheme = mode;
    }      
});


theme.set = function(value){
    if(['light','dark','auto'].includes(value)) theme.$ = value;
}

theme.light = ()=>theme.set('light');
theme.dark = ()=>theme.set('dark');
theme.auto = ()=>theme.set('auto');
theme.toggle = ()=>theme.set(currentTheme.$ == 'dark' ? 'light' : 'dark');