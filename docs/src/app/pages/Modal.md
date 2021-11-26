Modal window component

```htm
<script>
    import {Modal} from 'malina-ui';
</script>
```

#### Usage

Bind to `open` property to show or hide modal.

```htm example
<script>
    import {Modal,Button} from 'malina-ui';
    let open = false;
</script>

<Modal :open>Hello!</Modal>
<Button @click={open=true}>Show modal</Button>
```

### Heading

You can set Modal's header as `header` property or pass template into the `header` slot.

```htm example
<script>
    import {Modal,Button} from 'malina-ui';
    let open1 = false;
    let open2 = false;
</script>

<Modal :open={open1} header="Hello!">Header in property</Modal>
<Modal :open={open2}>
    {#slot:header}<h3>Hello!</h3>{/slot}
    Header in slot
</Modal>
<Button @click={open1=true}>Show modal 1</Button>
<Button @click={open2=true}>Show modal 2</Button>
```

### Footer

Also you can add content in `footer` slot.

```htm example
<script>
    import {Modal,Button} from 'malina-ui';
    let open = false;
</script>

<Modal :open header="Modal header">

    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. 
    Doloremque cumque velit id.

    {#slot:footer}
        <div class="text-center">
            <Button @click={open=false}>OK</Button>
        </div>
    {/slot}
</Modal>

<Button @click={open=true}>Show modal</Button>
```

### Closable

By default, modal can be closed by clicking on `close` button or on surrounded overlay. Set `false` in `closable` property to prevent closing modal.

```htm example
<script>
    import {Modal,Button} from 'malina-ui';
    let open = false;
</script>

<Modal closable={false} :open header="Modal header">

    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. 
    Doloremque cumque velit id.

    {#slot:footer}
        <div class="text-center">
            <Button primary @click={open=false}>Close</Button>
        </div>
    {/slot}
</Modal>

<Button @click={open=true}>Show modal</Button>
```


#### Focus trap

The `focus trap` mean that when modal window is active - first focusable element inside the window will be focused and `Tab` key will jump between elments which are inside the modal.

```htm example
<script>
    import {Modal,Button,Input} from 'malina-ui';
    let open = false;
</script>

<Modal :open header="Modal header">
    <Input placeholder="Your name"/>
    <Input placeholder="Your lastname"/>
    * Jump between elements with Tab key.
    {#slot:footer}
        <div class="text-center">
            <Button clear @click={open=false}>Cancel</Button>
            <Button primary @click={open=false}>Send</Button>
        </div>
    {/slot}
</Modal>

<Button @click={open=true}>Show modal</Button>
```