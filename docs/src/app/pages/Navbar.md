Component to add common navigation bar with three sections (or less) - left,right and center.

```htm
<script>
    import {Navbar} from 'malina-ui';
</script>
```
Default slot content will go to the left side.

```htm example
<script>
    import {Navbar} from 'malina-ui';
</script>

<Navbar>
    <h2>Logo</h2>
</Navbar>
```code
<Navbar>
    <h2>Logo</h2>
</Navbar>
```

Use named slots `center` and `right` to add content into coresponding areas.

```htm example
<script>
    import {Navbar,Icon,Button} from 'malina-ui';
    import {menuIcon} from '@icons';
</script>

<Navbar>
    <Button icon={menuIcon} clear hard/>

    {#slot:center}
        <Icon src="./malinajs.svg" size="2"/>
    {/slot}

    {#slot:right}
        <div>
            <a href="#navbar">Home</a>
            <a href="#navbar">About</a>
        </div>
    {/slot}
</Navbar>
```code
<Navbar>
    <Button icon={menuIcon} clear hard/>

    {#slot:center}
        <Icon src="./malinajs.svg" size="2"/>
    {/slot}

    {#slot:right}
        <div>
            <a href="#navbar">Home</a>
            <a href="#navbar">About</a>
        </div>
    {/slot}
</Navbar>
```

#### Fixed navigation bar

Use property `fixed` to fix navigation bar at the top of the page. It will not be scrolled up.

```htm example
<script>
    import {Navbar} from 'malina-ui';
</script>

<div class="bd-success" style="height: 150px; overflow-y:auto">
    <Navbar fixed>
        <h2>Logo</h2>
    </Navbar>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
```code
<div style="height: 150px; overflow-y:auto">
    <Navbar fixed>
        <h2>Logo</h2>
    </Navbar>

    <p>
        Lorem ipsum dolor sit amet...
    </p>
</div>
```