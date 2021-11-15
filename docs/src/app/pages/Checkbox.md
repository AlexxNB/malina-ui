Simple checkbox component

```htm
<script>
    import {Checkbox} from 'malina-ui';
</script>
```
#### Usage

When you use single checkbox, bind to `checked` property. Put label inside Checkbox's slot, then its state will be changed when click on label also.

```htm example
<script>
    import {Checkbox} from 'malina-ui';
    let is = true;
</script>

<p><Checkbox :checked={is}/> - {is}</p>
<p><Checkbox> - With label</Checkbox></p>
```
#### Group binding

Bind to `group` property of several Checkboxes to store their state in object. You must provide a `value` property for each Checkbox.

```htm example
<script>
    import {Checkbox,Button} from 'malina-ui';
    let list = [];
</script>

<p>
    <Checkbox :group={list} value="apple">Apple</Checkbox><br/>
    <Checkbox :group={list} value="orange">Orange</Checkbox><br/> 
    <Checkbox :group={list} value="grapes">Grapes</Checkbox>
</p>
<p><Button small @click={list=[]}>Clear</Button></p>
<p>Selected: {list}</p>
```

#### States

Use `error`,`warning`,`success`,`disabled` and `loading` properties to set corresponding view of the Checkbox.

```htm example
<script>
    import {Checkbox} from 'malina-ui';
</script>

<Checkbox error>Error</Checkbox> <br/>
<Checkbox warning>Warning</Checkbox> <br/>
<Checkbox success>Success</Checkbox> <br/>
<Checkbox loading>Loading</Checkbox> <br/>
<Checkbox disabled checked>Disabled</Checkbox>
```