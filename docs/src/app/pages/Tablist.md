Container for [`Tab`](#tab) components.

```htm
<script>
    import {Tablist} from 'malina-ui';
</script>
```

#### Value

Bind to the `value` property to get current selected tab.

```htm example
<script>
    import {Tablist,Tab} from 'malina-ui';
    let value = 'orange';
</script>

<Tablist bind:value>
    <Tab name="apple">Apple</Tab>
    <Tab name="orange">Orange</Tab>
    <Tab name="grapes">Grapes</Tab>
</Tablist>
Selected tab: {value}
```

#### Full width

By default tabs are stacked from left to right, but you can made full-width tabs fith `full` property.

```htm example
<script>
    import {Tablist,Tab} from 'malina-ui';
</script>

<Tablist full>
    <Tab>Apple</Tab>
    <Tab>Orange</Tab>
    <Tab>Grapes</Tab>
</Tablist>
```