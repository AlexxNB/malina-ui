Tab compnonet, which must be placed inside [`Tablist`](#tablist) component.

```htm
<script>
    import {Tab} from 'malina-ui';
</script>
```

### Basic usage

By default each tab will return its `id` when selected.

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

### Named tabs

You can specify `name` property for tabs, to return it instead `id`.

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