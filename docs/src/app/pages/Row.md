Container for columns in the [grid system](#grid).

```htm
<script>
    import {Row} from 'malina-ui';
</script>
```

Place [columns](#col) inside this `Row` component only.

```htm example
<script>
    import {Row,Col} from 'malina-ui';
</script>

<Row>
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
</Row>
<Row>
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
</Row>
<style>div{background-color: var(--color-warning);text-align: center}</style>
```code
<Row>
    <Col>col</Col>
    <Col>col</Col>
</Row>
<Row>
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
</Row>
```

#### Gutter

You can set gutter value - space between cols. It may be digit or any CSS unit.

```htm example
<script>
    import {Row,Col} from 'malina-ui';
</script>

<Row gutter="0">
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
</Row>
<Row gutter="2">
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
</Row>
<Row gutter="1px">
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
    <Col><div>col</div></Col>
</Row>
<style>div{background-color: var(--color-warning);text-align: center}</style>
```code
<Row gutter="0">
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
</Row>
<Row gutter="2">
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
</Row>
<Row gutter="1px">
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
</Row>
```


#### Reversed row

Use `reverse` property to reorder columns in back direction.

```htm example
<script>
    import {Row,Col} from 'malina-ui';
</script>

<Row reverse>
    <Col><div>1</div></Col>
    <Col><div>2</div></Col>
    <Col><div>3</div></Col>
    <Col><div>4</div></Col>
</Row>

<style>div{background-color: var(--color-warning);text-align: center}</style>
```code
<Row reverse>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
    <Col>4</Col>
</Row>
```