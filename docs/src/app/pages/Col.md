Column in the [grid system](#grid).

```htm
<script>
    import {Col} from 'malina-ui';
</script>
```

Place `Col` components inside [rows](#row) components only.

#### Size

You can specify the size of columns. The size property can be from 1 to 12.

Each column's size is specified by how many columns you want out of 12. So if you want 4 columns out of 12, use `size="4"`.

```htm example
<script>
    import {Row,Col} from 'malina-ui';
</script>

<Row>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
    <Col size="1"><div>1</div></Col>
</Row>
<Row>
    <Col size="4"><div>4</div></Col>
    <Col size="4"><div>4</div></Col>
    <Col size="4"><div>4</div></Col>
</Row>
<Row>
    <Col size="2"><div>2</div></Col>
    <Col size="2"><div>2</div></Col>
    <Col size="8"><div>8</div></Col>
</Row>
<style>div{background-color: var(--color-warning);text-align: center}</style>
```code
<Row>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
    <Col size="1">1</Col>
</Row>
<Row>
    <Col size="4">4</Col>
    <Col size="4">4</Col>
    <Col size="4">4</Col>
</Row>
<Row>
    <Col size="2">2</Col>
    <Col size="2">2</Col>
    <Col size="8">8</Col>
</Row>
```

#### Responsive grid

You can set column sizes for different screens - `small`, `medium`,`large` and `extralarge`. 


* The`size` property set column size for all screens.
* The`s` property set size for screens under 600px (phones)
* The`m` property set size for screens 600-900px (phones landscape, tablets)
* The`l` property set size for screens 900-1200px (tablets landscape, some laptops and desktops)
* The`xl` property set size for screens above 1200px (most laptops and desktops)

> `s`,`m`,`l`,`xl` are overwrite `size` property when screen width is match one of them

When you set `0` to these properties, column won't be shown in corresponding size. For example `xl="0"` will hide column on large screens, but column will be shown on other sizes. 


```htm example
<script>
    import {Row,Col} from 'malina-ui';
</script>

<Row>
    <Col size="3" m="6" s="12"><div>col</div></Col>
    <Col size="3" m="6" s="0"><div>col</div></Col>
    <Col size="3" m="6" s="0"><div>col</div></Col>
    <Col size="3" m="6" s="12"><div>col</div></Col>
</Row>

<style>div{background-color: var(--color-warning);text-align: center}</style>
```code
<Row>
    <Col size="3" m="6" s="12">col</Col>
    <Col size="3" m="6" s="0">col</Col>
    <Col size="3" m="6" s="0">col</Col>
    <Col size="3" m="6" s="12">col</Col>
</Row>
```


### Auto width columns

You can use a combination of flexible and sized columns.

When using a combination, the sized column takes the space specified and the remaining space is filled by the flexible column.

```htm example
<script>
    import {Row,Col} from 'malina-ui';
</script>

<Row>
    <Col size="3"><div>3</div></Col>
    <Col><div>auto</div></Col>
    <Col size="2" m="6" s="0"><div>2</div></Col>
</Row>

<style>div{background-color: var(--color-warning);text-align: center}</style>
```code
<Row>
    <Col size="3">3</Col>
    <Col>auto</Col>
    <Col size="2" m="6" s="0">2</Col>
</Row>
```