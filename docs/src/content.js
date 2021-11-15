import api from './api';

import Main from '@pages/Main.md';
import Typography from '@pages/Typography.xht';
import Button from '@pages/Button.md';
import Input from '@pages/Input.md';
import Field from '@pages/Field.md';
import Checkbox from '@pages/Checkbox.md';
import Icon from '@pages/Icon.md';
import Theming from '@pages/Theming.md';
import Container from '@pages/Container.md';
import Grid from '@pages/Grid.md';
import Row from '@pages/Row.md';
import Col from '@pages/Col.md';
import Navbar from '@pages/Navbar.md';
import Sidebar from '@pages/Sidebar.md';

export default {

    main:{
        title: 'Getting started',
        component: Main
    },

    theming:{
        title: 'Theming',
        component: Theming
    },

    typography:{
        title: 'Typography',
        component: Typography
    },

    layout: {
        title: 'Layout',
        sub:{
            container:{
                title: 'Container',
                component: Container,
                api: api.container
            },
        
            grid:{
                title: 'Grid',
                component: Grid,
                sub:{
                    row:{
                        title: 'Rows',
                        component: Row,
                        api: api.row
                    },
                    col:{
                        title: 'Columns',
                        component: Col,
                        api: api.col
                    }
                }
            },
            navbar:{
                title: 'Navigation bar',
                component: Navbar,
                api: api.navbar
            },
            sidebar:{
                title: 'Sidebar',
                component: Sidebar,
                api: api.sidebar
            },
        }
    },
    form: {
        title: 'Form',
        sub:{
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

            field:{
                title: 'Field',
                component: Field,
                api: api.field
            },

            checkbox:{
                title: 'Checkbox',
                component: Checkbox,
                //api: api.checkbox
            },
        }
    },

    other: {
        title: 'Other',
        sub:{
            icon:{
                title: 'Icon',
                component: Icon,
                api: api.icon
            },
        }
    },

}