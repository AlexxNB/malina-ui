export default {

    //Icon.xht
    icon:{

        props: [
            ['src',"Icon SVG-path string, sprite's symbol or filename",'string'],
            ['color',"Color (for path and sprite only)",'string','currentColor'],
            ['size',"Icon size. Digit or css-units",'number|string',1],
            ['rotate',"Icon rotation in degrees",'number',false],
            ['flipH',"Flip icon horizontally",'boolean',false],
            ['flipV',"Flip icon vertically",'boolean', false],
            ['spin',"Animate icon spinning. Time in seconds for full turn.",'boolean|number',false],
            ['viewbox',"viewBox attribute for svg element",'string','0 0 24 24'],
        ],

        anchors:[
            ['^','Icon element (<svg> or <span> wrapper around <img>)'],
            ['^img','<img> element, only when `src` is image'],
        ]

    },

    //Button.xht
    button:{

        props: [
            ['primary',"Make button with primary color",'boolean',false],
            ['secondary',"Make button with secondary color",'boolean',false],
            ['error',"Make button with error color",'boolean',false],
            ['warning',"Make button with warning color",'boolean',false],
            ['success',"Make button with success color",'boolean',false],
            ['dark',"Make button with dark color",'boolean',false],
            ['outline',"Make outline button",'boolean',false],
            ['clear',"Make outline button without borders",'boolean',false],
            ['small',"Make smaller button",'boolean',false],
            ['icon',"Add icon before label",'string',false],
            ['iconRight',"Add icon after label",'string',false],
            ['loading',"Show loading state of the button. You may pass valid icon source instead default spinner.",'boolean|string',false],
        ],

        anchors:[
            ['^','<button> element'],
            ['^iconLeft','<span> element for left icon'],
            ['^iconRight','<span> element for right icon'],
            ['^iconLoading','<span> element for loading icon'],
        ]

    },

    //Input.xht
    input:{

        props: [
            ['value',"Value of the input",'string|number|any',''],
            ['password',"Make input of type password",'boolean',false],
            ['textarea',"Make input of type textarea",'boolean',false],
            ['number',"Make input of type number",'boolean',false],
            ['small',"Make smaller input (not work with textarea)",'boolean',false],
            ['error',"Error state for input",'boolean',false],
            ['warning',"Warning state for input",'boolean',false],
            ['success',"Success state for input",'boolean',false],
            ['disabled',"Disabled state for input",'boolean',false],
            ['loading',"Loading state for input. You may pass valid icon source instead default spinner.",'boolean|string',false],
            ['icon',"Source for icon on the left side",'string',false],
            ['iconRight',"Source for icon on the right side",'string',false],
        ],

        anchors:[
            ['^','<input>,<textarea> or <select> element'],
            ['^iconWrapper','<div> element which is wraped around input and icons.'],
            ['^iconLeft','<div> element for left icon'],
            ['^iconRight','<div> element for right icon (includes also a spinner for loading state)'],
        ]

    },

    //Select.xht
    select:{

        props: [
            ['value',"Value of the selected option",'any',''],
            ['small',"Make smaller select",'boolean',false],
            ['error',"Error state for select",'boolean',false],
            ['warning',"Warning state for select",'boolean',false],
            ['success',"Success state for select",'boolean',false],
            ['disabled',"Disabled state for select",'boolean',false],
            ['loading',"Loading state for select. You may pass valid icon source instead default spinner.",'boolean|string',false],
            ['icon',"Source for icon on the left side",'string',false],
        ],

        anchors:[
            ['^','<select> element']
        ]

    },

    //Field.xht
    field:{

        props: [
            ['label',"Label for inputs",'string',false],
            ['compact',"Show field in one row",'boolean',false],
            ['error',"Error state for inputs",'boolean|string',false],
            ['warning',"Warning state for inputs",'boolean|string',false],
            ['success',"Success state for inputs",'boolean|string',false],
            ['disabled',"Disabled state for inputs",'boolean|string',false],
            ['loading',"Loading state for inputs.",'boolean|string',false],
            ['gapless',"Remove gap between grouped inputs",'boolean',false],
        ],

        anchors:[
            ['^','<div> element'],
            ['^label','<label> element.'],
            ['^message','<span> element for mesage'],
        ]

    },

    //Checkbox.xht
    checkbox:{

        props: [
            ['checked',"Bind to this prop to get current state",'boolean',false],
            ['group',"Bind multiple checkboxes to this prop to get result as array",'Array',[]],
            ['value',"Value attrubute. Requred when binding to group prop",'any',false],
            ['error',"Error state for checkbox",'boolean',false],
            ['warning',"Warning state for checkbox",'boolean',false],
            ['success',"Success state for checkbox",'boolean',false],
            ['disabled',"Disabled state for checkbox",'boolean',false],
            ['loading',"Loading state for checkbox.",'boolean',false],
        ],

        anchors:[
            ['^','<input> element of checkbox(hidden)'],
            ['^checkbox','<div> element, custom styled checkbox'],
            ['^label','<label> wrapper for checkbox'],
        ]

    },

    //Switch.xht
    switch:{

        props: [
            ['checked',"Bind to this prop to get current state",'boolean',false],
            ['group',"Bind multiple switches to this prop to get result as array",'Array',[]],
            ['value',"Value attrubute. Requred when binding to group prop",'any',false],
            ['error',"Error state for switch",'boolean',false],
            ['warning',"Warning state for switch",'boolean',false],
            ['success',"Success state for switch",'boolean',false],
            ['disabled',"Disabled state for switch",'boolean',false],
            ['loading',"Loading state for switch.",'boolean',false],
        ],

        anchors:[
            ['^','<input> element of switch(hidden)'],
            ['^switch','<div> element, custom styled switch'],
            ['^label','<label> wrapper for switch'],
        ]

    },

    //Radio.xht
    radio:{

        props: [
            ['checked',"Bind to this prop to get current state",'boolean',false],
            ['group',"Bind multiple radio to this prop to get result oneof them",'any',null],
            ['value',"Value attrubute. Requred when binding to group prop",'any',false],
            ['error',"Error state for checkbox",'boolean',false],
            ['warning',"Warning state for checkbox",'boolean',false],
            ['success',"Success state for checkbox",'boolean',false],
            ['disabled',"Disabled state for checkbox",'boolean',false],
            ['loading',"Loading state for checkbox.",'boolean',false],
        ],

        anchors:[
            ['^','<input> element of radio button(hidden)'],
            ['^radio','<div> element, custom styled radio button'],
            ['^label','<label> wrapper for radio button'],
        ]

    },


    //Container.xht
    container:{
        props: [
            ['xs',"Make container with width 20rem/200px",'boolean',false],
            ['s',"Make container with width 40rem/400px",'boolean',false],
            ['m',"Make container with width 60rem/600px",'boolean',false],
            ['l',"Make container with width 80rem/800px",'boolean',false],
            ['xl',"Make container with width 100rem/1000px",'boolean',false],
        ],

        anchors:[
            ['^','<div> element']
        ]

    },

    //Row.xht
    row:{
        props: [
            ['gutter',"Space between columns",'number|string',1],
            ['reverse',"Make columns in back order",'boolean',false],
        ],

        anchors:[
            ['^','<div> element']
        ]

    },

    //Col.xht
    col:{
        props: [
            ['size',"Set size for all screens",'number 0-12',false],
            ['s',"Set size for small screens",'number 0-12',false],
            ['m',"Set size for medium screens",'number 0-12',false],
            ['l',"Set size for large screens",'number 0-12',false],
            ['xl',"Set size for extra-large screens",'number 0-12',false],
        ],

        anchors:[
            ['^','<div> element']
        ]

    },

    //Navbar.xht
    navbar:{
        props: [
            ['fixed',"Navigation bar will not scroll with a page",'boolean',false],
        ],

        anchors:[
            ['^','<div> element'],
            ['^left','<div> element'],
            ['^center','<div> element'],
            ['^right','<div> element'],
        ],

        slots:[
            ['default','Left area'],
            ['center','Center area'],
            ['right','Right area'],
        ],

    },

    //Sidebar.xht
    sidebar:{
        props: [
            ['size',"Width (or height for top and bottom) of sidebar",'number',20],
            ['top',"Show sidebar at the top",'boolean',false],
            ['bottom',"Show sidebar at the bottom",'boolean',false],
            ['right',"Show sidebar at the right",'boolean',false],
            ['autoclose',"Close sidebar when click on it or overlay",'boolean',true],
        ],

        anchors:[
            ['^','<div> element of sidebar'],
            ['^overlay','<div> element of overlay'],
        ],

        slots:[
            ['default','Sidebar content']
        ],

    },

}