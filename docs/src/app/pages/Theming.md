The *malina-ui* kit supports dark theme and customization by CSS variables.

#### CSS variables

There are a lot of variables which can be edited to change theme looking.

```css
/* Light mode */
--color-text: var(--color-hard);
--color-bg: #FFFFFF;

--color-primary: #5EB5F7;
--color-secondary: #F7A05E;

--color-neutral: #BDBDBD;
--color-hard: #454545;
--color-soft: #F8F8F8;

--color-error: #FF0000;
--color-success: #008000;
--color-warning: #FFB833;

--color-box-shadow: rgba(0,0,0,.15);


/* Dark mode */
--dm-color-bg: #2D2D2D;
--dm-color-text: var(--dm-color-hard);
--dm-color-primary: #5EB5F7;
--dm-color-secondary: #F7A05E;

--dm-color-neutral: #8D8D8D;
--dm-color-hard: #EDEDED;
--dm-color-soft: #3D3D3D;

--dm-color-error: #FF0000;
--dm-color-success: #008000;
--dm-color-warning: #FFB833;

--dm-color-box-shadow: rgba(0,0,0,.85);

/* Appearance */
--radius: .4rem;
--font: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
--font-mono: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
```

The easyest way to redefine these variables is to set them in `<style global>` block inside your root component(`App.xht`):

```htm
<style global>
    :root{
        --color-primary: #FFA733;
        --dm-color-primary: #FFA733;
    }
</style>
```

> Be sure you are set values for light and dark themes separately. Don't use light variables as values for dark variables(like `--dm-color-error: var(--color-error)).

#### Light and dark theme

The malina-ui framework developing for both (light and dark) themes. All components looks good in any case.

By default will be choosen theme same as system theme in user's browser. But you can set needed theme manually with `theme` store:

```htm example
<script>
    import {Button,theme} from 'malina-ui';
</script>

<p>Current theme: {theme.$}</p>

<Button primary @click={theme.light()}>Light</Button>
<Button secondary @click={theme.dark()}>Dark</Button>
<Button hard @click={theme.auto()}>Auto</Button>
```