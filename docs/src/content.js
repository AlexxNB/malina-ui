import api from './api';

import Main from '@pages/Main.md';
import Typography from '@pages/Typography.xht';
import Button from '@pages/Button.md';
import Input from '@pages/Input.md';
import Select from '@pages/Select.md';
import Field from '@pages/Field.md';
import Checkbox from '@pages/Checkbox.md';
import Switch from '@pages/Switch.md';
import Radio from '@pages/Radio.md';
import Icon from '@pages/Icon.md';
import Theming from '@pages/Theming.md';
import Container from '@pages/Container.md';
import Grid from '@pages/Grid.md';
import Row from '@pages/Row.md';
import Col from '@pages/Col.md';
import Pane from '@pages/Pane.md';
import Navbar from '@pages/Navbar.md';
import Sidebar from '@pages/Sidebar.md';
import Card from '@pages/Card.md';
import Tabs from '@pages/Tabs.md';
import Tablist from '@pages/Tablist.md';
import Tab from '@pages/Tab.md';
import Modal from '@pages/Modal.md';

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
            panes:{
                title: 'Panes',
                component: Pane
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
            card:{
                title: 'Card',
                component: Card,
                api: api.card
            },
            tabs:{
                title: 'Tabs',
                component: Tabs,
                sub:{
                    tablist:{
                        title: 'Tablist',
                        component: Tablist,
                        api: api.tablist
                    },
                    tab:{
                        title: 'Tab',
                        component: Tab,
                        api: api.tab
                    }
                }
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

            select:{
                title: 'Select',
                component: Select,
                api: api.select
            },

            field:{
                title: 'Field',
                component: Field,
                api: api.field
            },

            checkbox:{
                title: 'Checkbox',
                component: Checkbox,
                api: api.checkbox
            },

            switch:{
                title: 'Switch',
                component: Switch,
                api: api.switch
            },

            radio:{
                title: 'Radio',
                component: Radio,
                api: api.radio
            },
        }
    },

    other: {
        title: 'Other',
        sub:{
            modal:{
                title: 'Modal',
                component: Modal,
                api: api.modal
            },
            icon:{
                title: 'Icon',
                component: Icon,
                api: api.icon
            },
        }
    },

}