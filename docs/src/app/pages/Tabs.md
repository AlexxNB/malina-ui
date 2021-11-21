
Insert [`Tab`](#tab) components into the [`Tablist`](#tablist) component to get tabs panel

```htm example
<script>
    import {Tablist,Tab} from 'malina-ui';
    let value = 0;
</script>

<Tablist bind:value>
    <Tab>Apple</Tab>
    <Tab>Orange</Tab>
    <Tab>Grapes</Tab>
</Tablist>
Selected tab: {value}
```