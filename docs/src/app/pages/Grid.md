12 columns responsive Bootstrap-like grid system.

```htm
<script>
    import {Row,Col} from 'malina-ui';
</script>
```

You can make any responsive layout with [`Rows`](#row) and [`Columns`](#col). 

```htm example
<script>
    import {Row,Col} from 'malina-ui';
</script>

<Row>
    <Col><div>1</div></Col>
    <Col><div>2</div></Col>
    <Col><div>3</div></Col>
    <Col><div>4</div></Col>
    <Col><div>5</div></Col>
    <Col><div>6</div></Col>
    <Col><div>7</div></Col>
    <Col><div>8</div></Col>
    <Col><div>9</div></Col>
    <Col><div>10</div></Col>
    <Col><div>11</div></Col>
    <Col><div>12</div></Col>
</Row>
<Row>
    <Col size="3"><div>3 of 12</div></Col>
    <Col size="4"><div>4 of 12</div></Col>
    <Col size="5"><div>5 of 12</div></Col>
</Row>
<style>div{background-color: var(--color-warning);text-align: center}</style>
```code
<Row>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
    <Col>4</Col>
    <Col>5</Col>
    <Col>6</Col>
    <Col>7</Col>
    <Col>8</Col>
    <Col>9</Col>
    <Col>10</Col>
    <Col>11</Col>
    <Col>12</Col>
</Row>
<Row>
    <Col size="3">3 of 12</Col>
    <Col size="4">4 of 12</Col>
    <Col size="5">5 of 12</Col>
</Row>
```