Input component

```htm
<script>
    import {Input} from 'malina-ui';
</script>
```

#### Types

There several builtin input types `text`(default), `password`, `number` and `textarea`. 

```htm example
<script>
    import {Input} from 'malina-ui';
</script>

<p><Input placeholder="Text"/></p>
<p><Input password placeholder="Password"/></p>
<p><Input number /></p>
<p><Input textarea placeholder="Textarea"/></p>
```code
<Input placeholder="Text"/>
<Input password placeholder="Password"/>
<Input number/>
<Input textarea placeholder="Textarea"/>  
```

Also you can specify any valid input type using `type` attribute.

```htm example
<script>
    import {Input} from 'malina-ui';
</script>

<p><Input type="date"/></p>
<p><Input type="color"/></p>
<p><Input type="range"/></p>
<p><Input type="file"/></p>
```code
<Input type="date"/>
<Input type="color"/>
<Input type="range"/>
<Input type="file"/>
```

#### Binding value

Every input has a <code>value</code> property, which can be binded to variable to reactive getting and setting field's value.

```htm example
<script>
    import {Input} from 'malina-ui';
    let name = '';
</script>

<p>Enter name: <Input :value={name}/></p>
<p>Hello, my name is {name}!</p>
```

#### Size

Every input (except textarea and multiple select) may be displayed in smaller variant using property  <code>small</code>.

```htm example
<script>
    import {Input} from 'malina-ui';
</script>

<p><Input small placeholder="Text"/></p>
<p><Input small password placeholder="Password"/></p>
```code
<Input small placeholder="Text"/>
<Input small password placeholder="Password"/>
```

#### States

Each input may have different sates.

```htm example
<script>
    import {Input} from 'malina-ui';
    import {gearIcon} from '@icons';
</script>

<p><Input value="Common"/></p>
<p><Input loading value="Wait for a time..."/></p>
<p><Input loading={gearIcon} value="Loading with custom icon"/></p>
<p><Input disabled value="Disabled"/></p>
<p><Input error value="Error"/></p>
<p><Input success={true} value="Success"/></p>
<p><Input warning value="Warning"/></p>
```code
<Input value="Common"/>
<Input loading value="Wait for a time..."/>
<Input loading={gearIcon} value="Loading with custom icon"/>
<Input disabled value="Disabled"/>
<Input error value="Error"/>
<Input success={true} value="Success"/>
<Input warning value="Warning"/>
```

#### Icons

Each field may have icon on the right or on the left side.

```htm example
<script>
    import {Input} from 'malina-ui';
    import {gearIcon,accountIcon,keyIcon,checkIcon,searchIcon,rightIcon} from '@icons';
</script>

<p><Input icon={accountIcon} placeholder="Your name"/></p>
<p><Input icon={keyIcon} iconRight={checkIcon} success password value="Password"/></p>
<p><Input icon={searchIcon} iconRight={rightIcon} small placeholder="Search..."/></p>
```code
<Input icon={accountIcon} placeholder="Your name"/>
<Input icon={keyIcon} iconRight={checkIcon} success password value="Password"/>
<Input icon={searchIcon} iconRight={rightIcon} small placeholder="Search..."/>
```