Stackable panes to create layouts.

```htm
<script>
    import {Pane} from 'malina-ui';
</script>
```
It is easy to make common layouts with `Pane` components.

```htm example
<script>
    import {Pane} from 'malina-ui';
</script>

<div>
<Pane col>
    <Pane class="h" size="50px">Header</Pane>
    <Pane row>
        <Pane class="s" size="25%">Side</Pane>
        <Pane class="c">Content</Pane>
    </Pane>
    <Pane class="f" size={5}>Footer</Pane>
</Pane>
</div>

<style>
    div{
        display:flex;
        height: 300px;
    }
    .f,.s,.c,.h{
        text-align: center;
        color: white;
    }

    .f,.h{
        background-color: #5E69F7;
    }
    .s{
        background-color: #5EB5F7;
    }
    .c{
        background-color: #8FCCF9;
    }
</style>
```code
<Pane col>
    <Pane size="50px">Header</Pane>
    <Pane row>
        <Pane size="25%">Side</Pane>
        <Pane>Content</Pane>
    </Pane>
    <Pane size={5}>Footer</Pane>
</Pane>
```

>To make `Pane` stretched inside any HTML-container add `display:flex` style to this element. 

### Columns and rows

When you add the `col` or `row` property to parent `Pane` component, nested `Pane` components will be stacked in corresponding direction.  The root `Pane` component always must have `col` or `row` property.

```htm example
<script>
    import {Pane} from 'malina-ui';
</script>

<Pane row>
    <Pane class="o">1</Pane>
    <Pane class="e">2</Pane>
    <Pane class="o">3</Pane>
    <Pane class="e">4</Pane>
    <Pane class="o">5</Pane>
</Pane>
&nbsp;
<Pane col>
    <Pane class="o">1</Pane>
    <Pane class="e">2</Pane>
    <Pane class="o">3</Pane>
    <Pane class="e">4</Pane>
    <Pane class="o">5</Pane>
</Pane>

<style>
    .e,.o{text-align: center; color: white}
    .e{background-color: #5EB5F7;}
    .o{background-color: #8FCCF9;}
</style>
```code
<Pane row>
    <Pane>1</Pane>
    <Pane>2</Pane>
    <Pane>3</Pane>
    <Pane>4</Pane>
    <Pane>5</Pane>
</Pane> 

<Pane col>
    <Pane>1</Pane>
    <Pane>2</Pane>
    <Pane>3</Pane>
    <Pane>4</Pane>
    <Pane>5</Pane>
</Pane>
```

### Size

By default any `Pane` component stretched in horizontal and vertical dimensions to fill all possible area of the parent. All siblings in a stack will be equal. 

You can fix width or height(according stack type) of the `Pane` using `size` property. You are free to use any CSS units here or a number(where 1 is about 10px). 

```htm example
<script>
    import {Pane} from 'malina-ui';
</script>

<Pane row>
    <Pane class="o" size="5">5</Pane>
    <Pane class="e" size="20%">20%</Pane>
    <Pane class="o" size={3*2}>3*2</Pane>
    <Pane class="e">stretched</Pane>
    <Pane class="o">stretched</Pane>
</Pane>
&nbsp;
<div>
<Pane col>
    <Pane class="o" size="5">5</Pane>
    <Pane class="e" size="20%">20%</Pane>
    <Pane class="o" size={3*2}>3*2</Pane>
    <Pane class="e">stretched</Pane>
    <Pane class="o">stretched</Pane>
</Pane>
</div>
<style>
    div{
        display:flex;
        height: 400px;
    }
    .e,.o{text-align: center; color: white}
    .e{background-color: #5EB5F7;}
    .o{background-color: #8FCCF9;}
</style>
```code
<Pane row>
    <Pane size="5">5</Pane>
    <Pane size="20%">20%</Pane>
    <Pane size={3*2}>3*2</Pane>
    <Pane>stretched</Pane>
    <Pane>stretched</Pane>
</Pane>

<Pane col>
    <Pane size="5">5</Pane>
    <Pane size="20%">20%</Pane>
    <Pane size={3*2}>3*2</Pane>
    <Pane>stretched</Pane>
    <Pane>stretched</Pane>
</Pane>
```

### Resizable

Add the `resizable` property and you will be able to change size of the `Pane` by dragging its right or bottom(according of a stack type) border.

```htm example
<script>
    import {Pane} from 'malina-ui';
    let size = 30;
</script>

<div>
<Pane col>
    <Pane class="h" resizable bind>Top</Pane>
    <Pane row>
        <Pane class="o" resizable :size>Left size {size}rem</Pane>
        <Pane class="e">Right size auto</Pane>
    </Pane>
</Pane>
</div>
<style>
    div{
        display:flex;
        height: 300px;
    }
    .e,.o,.h{text-align: center; color: white}
    .e{background-color: #5EB5F7;}
    .o{background-color: #8FCCF9;}
    .h{background-color: #5E69F7;}
</style>
```code
<script>
    import {Pane} from 'malina-ui';
    let size = 30;
</script>

<Pane col>
    <Pane resizable>Top</Pane>
    <Pane row>
        <Pane resizable :size>Left size {size}rem</Pane>
        <Pane>Right</Pane>
    </Pane>
</Pane>
```