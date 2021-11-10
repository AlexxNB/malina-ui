Component for centering content on page (or block).

```htm
<script>
    import {Container} from 'malina-ui';
</script>
```
#### Usage

```htm example
<script>
    import {Container} from 'malina-ui';
</script>
<div class="bd-neutral">
    <Container>
        <div class="bd-warning">I'm at center of parent!</div>
    </Container>
</div>
<style>
    .bd-warning{
        padding: 10px;
    }
</style>
```code
<div>
    <Container>
            I'm at center of parent!
    </Container>
</div>
```

#### Sizes

By default container have 96% width. But there are some other predefined sizes - `s`,`m`,`l`, `xl` and also `half`,`third` and `quarter`. If parent is smaller than required size - container width will be also 96% of parent.

```htm example
<script>
    import {Container} from 'malina-ui';
</script>
<Container><div class="bd-warning">Common</div></Container>
<Container s><div class="bd-warning">S - 40rem - 400px</div></Container>
<Container m><div class="bd-warning">M - 50rem - 500px</div></Container>
<Container l><div class="bd-warning">L - 80rem - 800px</div></Container>
<Container xl><div class="bd-warning">XL - 100rem - 1000px</div></Container>
<Container half><div class="bd-warning">Half - 50%</div></Container>
<Container third><div class="bd-warning">Third - 33%</div></Container>
<Container quarter><div class="bd-warning">Quarter - 25%</div></Container>
<style>
    .bd-warning{
        padding: 5px;
    }
</style>
```code
<Container>Common</Container>
<Container s>S - 40rem - 400px</Container>
<Container m>M - 60rem - 600px</Container>
<Container l>L - 80rem - 800px</Container>
<Container xl>XL - 100rem - 1000px</Container>
```