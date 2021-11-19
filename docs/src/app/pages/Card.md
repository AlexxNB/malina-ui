A Card component

```htm
<script>
    import {Card} from 'malina-ui';
</script>
```

#### Usage

```htm example 
<script>
    import {Card} from 'malina-ui';
</script>
<Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque cumque velit id.</Card>
```code
<Card>Lorem ipsum dolor sit...</Card>
```

#### Heading

You can set header with `header` property or inside named slot.

```htm example 
<script>
    import {Card,Row,Col} from 'malina-ui';
</script>

<Row>
    <Col>
        <Card header="Card header">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. 
            Doloremque cumque velit id.
        </Card>
    </Col>
    <Col>
        <Card>
            {#slot:header}<h5>Card header</h5>{/slot}
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit.
            Doloremque cumque velit id.
        </Card>
    </Col>
</Row>
```

#### Footer

Also you can add some footer content in `slot:footer`. 

```htm example 
<script>
    import {Card,Container,Button} from 'malina-ui';
</script>

<Container s>
        <Card header="Card header">
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit.
            Quae, cupiditate? 
            {#slot:footer}
                <Button clear>Cancel</Button>
                <Button primary>OK</Button>
            {/slot}
        </Card>
</Container>
```