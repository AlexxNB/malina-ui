A dropdown or multiple select component.

```htm
<script>
    import {Select} from 'malina-ui';
</script>
```

#### Options

You may set options with `<option>` tag, as usual.

```htm example
<script>
    import {Select} from 'malina-ui';
    let selected;
</script>

<Select :value={selected}>
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="grapes">Grapes</option>
</Select>
Selected: {selected}
```

Instead you can pass array of strings or objects (`label,value`) into the `options` property.


```htm example
<script>
    import {Select} from 'malina-ui';
    const options = [
        {label:"Apple",value:"apple"},
        {label:"Orange",value:"orange"},
        {label:"Grapes",value:"grapes"},
    ];
    let selected = 'orange';
</script>

<Select {options} :value={selected}/>
Selected: {selected}
```

#### Placeholder

If `placeholder` property have a text, it will be shown when `value` is undefined.

```htm example
<script>
    import {Select} from 'malina-ui';
    const options = ["Apple","Orange","Grapes"];
    let selected;
</script>

<Select placeholder="Choose a fruit" {options} :value={selected}/>
Selected: {selected}
```
#### Size

Add `small` property to get thiner select.

```htm example
<script>
    import {Select} from 'malina-ui';
</script>

<Select placeholder="Regular"/>
<Select small placeholder="Smaller"/>
```
#### Icon

You may add an icon at the left side of select. Pass any valid Icon's source in `icon` property.

```htm example
<script>
    import {Select} from 'malina-ui';
    const options = ["Apple","Orange","Grapes"];
</script>

<Select icon="./malinajs.svg" placeholder="Choose a fruit" {options} />
```

#### States

Select may have different sates.

```htm example
<script>
    import {Select} from 'malina-ui';
    import {gearIcon} from '@icons';
</script>

<p><Select placeholder="Error" error/></p>
<p><Select placeholder="Warning" warning/></p>
<p><Select placeholder="Success" success/></p>
<p><Select placeholder="Loading" loading/></p>
<p><Select placeholder="Loading with custom icon" loading={gearIcon}/></p>
<p><Select placeholder="Disabled" disabled/></p>
```code
<Select placeholder="Error" error/>
<Select placeholder="Warning" warning/>
<Select placeholder="Success" success/>
<Select placeholder="Loading" loading/>
<Select placeholder="Loading with custom icon" loading={gearIcon}/>
<Select placeholder="Disabled" disabled/>
```

