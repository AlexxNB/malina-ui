import api from './api';

import Main from '@pages/Main.xht';
import Typography from '@pages/Typography.xht';
import Button from '@pages/Button.xht';
import Input from '@pages/Input.xht';
import Icon from '@pages/Icon.xht';

export default {

    main:{
        title: 'Getting started',
        component: Main
    },

    typography:{
        title: 'Typography',
        component: Typography
    },

    button:{
        title: 'Button',
        component: Button,
        api: api.button
    },

    input:{
        title: 'Input',
        component: Input,
        api: api.input
    },

    icon:{
        title: 'Icon',
        component: Icon,
        api: api.icon
    },

}