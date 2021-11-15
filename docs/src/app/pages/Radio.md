Simple radio button component

```htm
<script>
    import {Radio} from 'malina-ui';
</script>
```
#### Usage

When you use single radio button, bind to `checked` property. Put label inside Radio's slot, then its state will be changed when click on label also.

```htm example
<script>
    import {Radio} from 'malina-ui';
    let is = true;
</script>

<p><Radio :checked={is}/> - {is}</p>
<p><Radio> - With label</Radio></p>
```
#### Group binding

Bind to `group` property of several Radio to get value one of them. You must provide a `value` property for each Radio.

```htm example
<script>
    import {Radio} from 'malina-ui';
    let selected = 'apple';
</script>

<p>
    <Radio :group={selected} value="apple">Apple</Radio><br/>
    <Radio :group={selected} value="orange">Orange</Radio><br/> 
    <Radio :group={selected} value="grapes">Grapes</Radio>
</p>
<p>Selected: {selected}</p>
```

#### States

Use `error`,`warning`,`success`,`disabled` and `loading` properties to set corresponding view of the Checkbox.

```htm example
<script>
    import {Radio} from 'malina-ui';
</script>

<Radio error>Error</Radio> <br/>
<Radio warning>Warning</Radio> <br/>
<Radio success>Success</Radio> <br/>
<Radio loading>Loading</Radio> <br/>
<Radio disabled checked>Disabled</Radio>
```