#### What is Malina-UI

Malina-UI is an experemental UI kit for [malina.js](https://malinajs.github.io) framework. There will be many useful components for rapid UI development. 

>  Malina-UI is under development yet. Some component's API may be changed in futute!

#### Installation

1. Just install `malina-ui` package in your project's directory as a development dependency.

```
npm install -D malina-ui
```

2. Import and place in your root file(`App.xht`) a component, which contains styles and other staff for UI kit.

```htm
<!-- App.xht -->
<script>
  import {MalinaUI} from 'malina-ui';
</script>

<MalinaUI/>
```

#### Config

The `<MalinaUI/>` component have a list of properies, which allow to configure default behaviour of UI kit.

<div style="overflowX:auto">

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
|`theme`|`light`,`dark`,`auto`|`null`|Set color theme for whole app

</div>