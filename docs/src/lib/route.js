import {store} from 'storxy';

export default store('',st => {

    const onChange = ()=>{
        st.$ = location.hash.replace(/^#/,'') || 'main';
    }

    onChange();
    window.addEventListener('hashchange',onChange);
    
    return () => window.removeEventListener('hashchange',onChange);
});