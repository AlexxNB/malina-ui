Button component

```htm
<script>
    import {Button} from 'malina-ui';
</script>
```

#### Variants

You can use one of predefined variats <code>primary</code>, <code>secondary</code>, <code>error</code>, <code>warning</code>, <code>success</code> or default.

```htm example
<script>
    import {Button} from 'malina-ui';
</script>

<div style="line-height: 4.5rem">
    <Button>Default</Button>    
    <Button primary>Primary</Button>    
    <Button secondary>Secondary</Button>    
    <Button error>Error</Button>    
    <Button warning>Warning</Button>    
    <Button success>Success</Button>   
    <Button hard>Hard</Button>   
</div> 
```code
<Button>Default</Button>    
<Button primary>Primary</Button>    
<Button secondary>Secondary</Button>    
<Button error>Error</Button>    
<Button warning>Warning</Button>    
<Button success>Success</Button>   
<Button hard>Hard</Button> 
```
The `outline` property make button with transparent background.

```htm example
<script>
    import {Button} from 'malina-ui';
</script>

<div style="line-height: 4.5rem">
    <Button outline>Default</Button>    
    <Button outline primary>Primary</Button>    
    <Button outline secondary>Secondary</Button>    
    <Button outline error>Error</Button>    
    <Button outline warning>Warning</Button>    
    <Button outline success>Success</Button>   
    <Button outline hard>Hard</Button> 
</div> 
```code
<Button outline>Default</Button>    
<Button outline primary>Primary</Button>    
<Button outline secondary>Secondary</Button>    
<Button outline error>Error</Button>    
<Button outline warning>Warning</Button>    
<Button outline success>Success</Button>   
<Button outline hard>Hard</Button>   
```

And the `clear` will also remove a border.

```htm example
<script>
    import {Button} from 'malina-ui';
</script>

<div style="line-height: 4.5rem">
    <Button clear>Default</Button>    
<Button clear primary>Primary</Button>    
<Button clear secondary>Secondary</Button>    
<Button clear error>Error</Button>    
<Button clear warning>Warning</Button>    
<Button clear success>Success</Button> 
</div> 
```code
<Button clear>Default</Button>    
<Button clear primary>Primary</Button>    
<Button clear secondary>Secondary</Button>    
<Button clear error>Error</Button>    
<Button clear warning>Warning</Button>    
<Button clear success>Success</Button>   
```

#### Size

With `small` property you will make a smaller buttons

```htm example
<script>
    import {Button} from 'malina-ui';
</script>

<div style="line-height: 4.5rem">
    <Button small>Default</Button>      
    <Button primary small>Primary</Button>      
    <Button secondary small>Secondary</Button>      
    <Button error small>Error</Button>      
    <Button warning small>Warning</Button>      
    <Button success small>Success</Button>      
    <Button outline small>Outline default</Button>  
    <Button outline primary small>Outline primary</Button>  
    <Button clear error small>Clear error</Button>  
    <Button clear success small>Clear success</Button> 
</div> 
```code
<Button small>Default</Button>      
<Button primary small>Primary</Button>      
<Button secondary small>Secondary</Button>      
<Button error small>Error</Button>      
<Button warning small>Warning</Button>      
<Button success small>Success</Button>      
<Button outline small>Outline default</Button>  
<Button outline primary small>Outline primary</Button>  
<Button clear error small>Clear error</Button>  
<Button clear success small>Clear success</Button>   
```

#### States

You can make disabled and temporary unavialable buttons this way. If you set value of property <code>loading</code> with valid Icon source - this icon will be spinned instead default spinner.

```htm example
<script>
    import {Button} from 'malina-ui';
    import {gearIcon} from '@icons';
</script>

<div style="line-height: 4.5rem">
    <Button primary disabled>Disabled</Button>          
    <Button secondary loading>Loading</Button>  
    <Button small error disabled>Disabled</Button>          
    <Button small success loading>Loading</Button>  
    <br/>        
    <Button outline primary disabled="disabled">Disabled</Button>          
    <Button outline secondary loading={gearIcon}>Loading</Button>          
    <Button small outline error disabled>Disabled</Button>          
    <Button small outline success loading>Loading</Button>          
    <br/>        
    <Button clear primary disabled>Disabled</Button>          
    <Button clear secondary loading>Loading</Button>          
    <Button small clear error disabled>Disabled</Button>          
    <Button small clear success loading>Loading</Button> 
</div> 
```code
<script>
    import {mdiGear} from "@mdi/js";
</script>

<Button primary disabled>Disabled</Button>          
<Button secondary loading>Loading</Button>  
<Button small error disabled>Disabled</Button>          
<Button small success loading>Loading</Button>  
    
<Button outline primary disabled="disabled">Disabled</Button>          
<Button outline secondary loading={mdiGear}>Loading</Button>          
<Button small outline error disabled>Disabled</Button>          
<Button small outline success loading>Loading</Button>          

<Button clear primary disabled>Disabled</Button>          
<Button clear secondary loading>Loading</Button>          
<Button small clear error disabled>Disabled</Button>          
<Button small clear success loading>Loading</Button> 
```

#### Icons

You can add icons at the left and at the right side of button.

```htm example
<script>
    import {Button} from 'malina-ui';
    import {gearIcon,rightIcon,downIcon,accountIcon,menuIcon,deleteIcon} from '@icons';
</script>

<div style="line-height: 4.5rem">
    <Button primary icon={gearIcon}>Settings</Button>          
    <Button secondary small iconRight={rightIcon}>Next</Button>          
    <Button primary clear icon={accountIcon} iconRight={downIcon}>Account</Button>          
    <Button outline icon={menuIcon}/>          
    <Button small error clear icon={deleteIcon}/> 
</div> 
```code
<Button primary icon={gearIcon}>Settings</Button>          
<Button secondary small iconRight={rightIcon}>Next</Button>          
<Button primary clear icon={accountIcon} iconRight={downIcon}>Account</Button>          
<Button outline icon={menuIcon}/>          
<Button small error clear icon={deleteIcon}/>    
```