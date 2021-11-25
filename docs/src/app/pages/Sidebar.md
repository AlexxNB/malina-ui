Panel which slides from edge of the page.

```htm
<script>
    import {Sidebar} from 'malina-ui';
</script>
```
### Show sidebar

You should bind to `open` property and set it `true` when need to show sidebar. 

> Be sure you use binding instead just setting a property, because `open` property may be changed internally.

```htm example
<script>
    import {Sidebar,Button} from 'malina-ui';
    let open = false;
</script>

<Sidebar :open>Hello!</Sidebar>
<Button @click={open=true}>Show sidebar</Button>
```

#### Position

By default sidebar will be shown along a left edge. You can set other sides with `right`,`top` and `bottom` properties.

```htm example
<script>
    import {Sidebar,Button} from 'malina-ui';
    let open = false;
    let openRight = false;
    let openTop = false;
    let openBottom = false;
</script>

<Sidebar :open={open}>Left</Sidebar>
<Sidebar :open={openRight} right>Right</Sidebar>
<Sidebar :open={openTop} top>Top</Sidebar>
<Sidebar :open={openBottom} bottom>Bottom</Sidebar>

<p>Toggle sidebars:</p>
<Button @click={open=true}>Left</Button>
<Button @click={openRight=true}>Right</Button>
<Button @click={openTop=true}>Top</Button>
<Button @click={openBottom=true}>Bottom</Button>
```

#### Size

To change default width(or height for `top` and `bottom`) of sidebar use the `size` property. It must be a *digit*, default value is `20`(~200px).

```htm example
<script>
    import {Sidebar,Button} from 'malina-ui';
    let open = false;
    let open2 = false;
    let open3 = false;
</script>

<Sidebar :open={open} size="10">Small</Sidebar>
<Sidebar :open={open2} size="30">Bigger...</Sidebar>
<Sidebar :open={open3}  size="50">The biggest!</Sidebar>

<p>Toggle sidebars:</p>
<Button @click={open=true} success>Small</Button>
<Button @click={open2=true} warning>Bigger</Button>
<Button @click={open3=true} error>The biggest</Button>
```
### Autoclose

You can close sidebar when do click on overlay or sidebar itself. To prevent this set property `closable` to `false` value:

```htm example
<script>
    import {Sidebar,Button} from 'malina-ui';
    let open = false;
</script>

<Sidebar {open} closable={false}>
    <Button @click={open=false}>Close sidebar</Button>
</Sidebar>

<Button @click={open=true}>Open sidebar</Button>
```