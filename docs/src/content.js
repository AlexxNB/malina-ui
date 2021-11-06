import api from './api';

import Typography from '@pages/Typography.xht';
import Button from '@pages/Button.xht';
import Icon from '@pages/Icon.xht';

export default {

    typography:{
        title: 'Typography',
        component: Typography
    },

    button:{
        title: 'Button',
        component: Button
    },

    icon:{
        title: 'Icon',
        component: Icon,
        api: api.icon
    },

}