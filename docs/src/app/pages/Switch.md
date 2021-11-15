Switch is componnet for toggle value.

```htm
<script>
    import {Switch} from 'malina-ui';
</script>
```
#### Usage

When you use single switch, bind to `checked` property. Put label inside Switch's slot, then its state will be changed when click on label also.

```htm example
<script>
    import {Switch} from 'malina-ui';
    let is = true;
</script>

<p><Switch :checked={is}/> - {is}</p>
<p><Switch> - With label</Switch></p>
```
#### Group binding

Bind to `group` property of several Switches to store their state in array. You must provide a `value` property for each Switch.

```htm example
<script>
    import {Switch,Button} from 'malina-ui';
    let list = [];
</script>

<p>
    <Switch :group={list} value="apple">Apple</Switch><br/>
    <Switch :group={list} value="orange">Orange</Switch><br/> 
    <Switch :group={list} value="grapes">Grapes</Switch>
</p>
<p><Button small @click={list=[]}>Clear</Button></p>
<p>Selected: {list}</p>
```

#### States

Use `error`,`warning`,`success`,`disabled` and `loading` properties to set corresponding view of the Switch.

```htm example
<script>
    import {Switch} from 'malina-ui';
</script>

<Switch error>Error</Switch> <br/>
<Switch warning>Warning</Switch> <br/>
<Switch success>Success</Switch> <br/>
<Switch loading>Loading</Switch> <br/>
<Switch disabled checked>Disabled</Switch>
```