A component for wrapping input elements with label and state messages.

```htm
<script>
    import {Field} from 'malina-ui';
</script>
```

#### Label

Set label for input with `label` property or with `label` named slot. 

```htm example
<script>
    import {Field,Input,Icon} from 'malina-ui';
    import {keyIcon} from '@icons';
</script>

<Field label="Your name">
    <Input placeholder="J.Smith"/>
</Field>

<Field>
    {#slot:label}<Icon src={keyIcon}/> Your password{/slot}
    <Input password />
</Field>
```
With `compact` property you will get one-row field where label is on the left.

```htm example
<script>
    import {Field,Input} from 'malina-ui';
    import {keyIcon} from '@icons';
</script>

<Field label="Login" compact>
    <Input/>
</Field>

<Field label="Password" compact>
    <Input password />
</Field>
```

#### States

You can set state for inputs inside Field using properties `error`,`success`,`warning`,`loading` and `disabled`. Each can accept a message which will be shown under inputs.

```htm example
<script>
    import {Field,Input,Select} from 'malina-ui';
</script>

<Field label="Error" error>
    <Input/>
</Field>

<Field label="Error with msg" error="Something wrong!">
    <Input/>
</Field>

<Field label="Warning" warning="Be careful!">
    <Select/>
</Field>

<Field label="Success" success="Ready!">
    <Input/>
</Field>

<Field label="Loading" loading="Wait a second...">
    <Input/>
</Field>

<Field label="Disabled" disabled="Not this time">
    <Input/>
</Field>
```


#### Grouping

Place multiple inputs and buttons in one row. Also you can remove gap with `gapless` property.

```htm example
<script>
    import {Field,Input,Select,Button} from 'malina-ui';
    import {searchIcon} from '@icons';
</script>

<Field>
    <Input icon={searchIcon}/>
    <Button primary>Search</Button>
</Field>

<Field gapless>
    <Input icon={searchIcon}/>
    <Button primary>Search</Button>
</Field>

<Field gapless>
    <Button hard><b>B</b></Button>
    <Button hard><i>I</i></Button>
    <Button hard><u>U</u></Button>
    <Select options={['Times New Roman','Arial']}/>
    <Input/>
</Field>
```
