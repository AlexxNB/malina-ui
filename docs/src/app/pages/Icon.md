Icon component

```htm
<script>
    import {Icon} from 'malina-ui';
</script>
```

#### Source

You can place icon by three ways. The `src` attribute can accept:

* SVG-path. Many icon libs are provide this. Prefered.
* [IconifyIcon object](https://docs.iconify.design/sources/npm/). Find any from [thousands icons](https://icon-sets.iconify.design).
* URL of image file.
* URL of svg-sprites file with symbol name.

```htm example
<script>
    import {Icon} from 'malina-ui';
    import {jsIcon,crossIcon,triangleIcon,homeIcon} from '@icons';
</script>

<Icon src={crossIcon} />
<Icon src="./malinajs.svg" />
<Icon src="./sprite.svg#javascript" />
<Icon src={triangleIcon}/>
<Icon src={homeIcon}/>
```code
<script>
  import {Icon} from 'malina-ui'; 
  import {mdiClose} from '@mdi/js'; 
  import homeIcon from '@iconify-icons/flat-color-icons/home'; 
  const triangleIcon = "M12,2L1,21H23M12,6L19.53,19H4.47";
</script>

<Icon src={mdiClose} />
<Icon src="./malinajs.svg" />
<Icon src="./sprite.svg#javascript" />
<Icon src={triangleIcon} />
<Icon src={homeIcon} />
```

#### Size

Size of the icon. You can set this as digit or as CSS unit. By default size is 1.

```htm example
<script>
    import {Icon} from 'malina-ui';
</script>

<Icon src="./malinajs.svg" size={0.5}/>    
<Icon src="./malinajs.svg"/>    
<Icon src="./malinajs.svg" size="2"/>    
<Icon src="./malinajs.svg" size={3}/>    
<Icon src="./malinajs.svg" size="96px"/>
```code
<Icon src="./malinajs.svg" size={0.5}/>    
<Icon src="./malinajs.svg"/>    
<Icon src="./malinajs.svg" size="2"/>    
<Icon src="./malinajs.svg" size={3}/>    
<Icon src="./malinajs.svg" size="96px"/>
```

#### Color

Color of SVG icon can be set as valid CSS color. By default color is inhirited from sorounded text.

```htm example
<script>
    import {Icon} from 'malina-ui';
    import {crossIcon,circleIcon,squareIcon,triangleIcon} from '@icons';
</script>

<Icon src={triangleIcon} color="green"/>     
<Icon src={circleIcon} color="var(--color-error)"/>     
<Icon src={crossIcon} color="#0000FF"/>     
<Icon src={squareIcon} color="rgb(227, 111, 182)"/>
```code
<Icon src={triangleIcon} color="green"/>     
<Icon src={circleIcon} color="var(--color-error)"/>     
<Icon src={crossIcon} color="#0000FF"/>     
<Icon src={squareIcon} color="rgb(227, 111, 182)"/>
```

#### Flip

You can flip icon horrizontally or vertically using `flipH` and  `flipV` accordingly.

```htm example
<script>
    import {Icon} from 'malina-ui';
    import {jsIcon} from '@icons';
</script>

<Icon src={jsIcon} color="#FC0" size="3"/>       
<Icon src={jsIcon} color="#FC0" size="3" flipV/>       
<Icon src={jsIcon} color="#FC0" size="3" flipH/>       
<Icon src={jsIcon} color="#FC0" size="3" flipH flipV/>  
```code
<Icon src={jsIcon} color="#FC0" size="3"/>       
<Icon src={jsIcon} color="#FC0" size="3" flipV/>       
<Icon src={jsIcon} color="#FC0" size="3" flipH/>       
<Icon src={jsIcon} color="#FC0" size="3" flipH flipV/>    
```

#### Rotation

Also you can rotate icon using <code>rotate</code> property and value in degrees. Positive values will rotate icon in CW and negative in CCW direction.

```htm example
<script>
    import {Icon} from 'malina-ui';
</script>

<Icon src="./malinajs.svg" size="3" rotate="-35"/>       
<Icon src="./malinajs.svg" size="3"/>       
<Icon src="./malinajs.svg" size="3" rotate="35"/>  
```code
<Icon src="./malinajs.svg" size="3" rotate="-35"/>       
<Icon src="./malinajs.svg" size="3"/>       
<Icon src="./malinajs.svg" size="3" rotate="35"/>    
```

#### Spin

Animation of icon spinning. The <code>spin</code> property is the duration of the full turn in seconds. If no value provided for attribute, default will be 2 seconds.

```htm example
<script>
    import {Icon} from 'malina-ui';
</script>

<Icon src="./malinajs.svg" size="2" spin="-5"/>
<Icon src="./malinajs.svg" size="2" spin="-1"/>
<Icon src="./malinajs.svg" size="2" spin="0.5"/>
<Icon src="./malinajs.svg" size="2" spin/>
<Icon src="./malinajs.svg" size="2" spin="7"/> 
```code
<Icon src="./malinajs.svg" size="2" spin="-5"/>
<Icon src="./malinajs.svg" size="2" spin="-1"/>
<Icon src="./malinajs.svg" size="2" spin="0.5"/>
<Icon src="./malinajs.svg" size="2" spin/>
<Icon src="./malinajs.svg" size="2" spin="7"/>  
```