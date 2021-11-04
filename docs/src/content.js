import api from './api';

import Typography from '@pages/Typography.xht';
import Icon from '@pages/Icon.xht';

export default {

    typography:{
        title: 'Typography',
        component: Typography
    },

    icon:{
        title: 'Icon',
        component: Icon,
        api: api.icon
    },

}