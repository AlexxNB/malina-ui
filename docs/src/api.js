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
            ['iconOnly',"Must be used with 'icon' property if no label needed",'boolean',false],
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
            ['select',"Make input of type select",'boolean',false],
            ['multiple',"Make input of type select with multiple choice",'boolean',false],
            ['small',"Make smaller input (not work with textarea and multiple types)",'boolean',false],
            ['error',"Error state for input",'boolean',false],
            ['warning',"Warning state for input",'boolean',false],
            ['success',"Success state for input",'boolean',false],
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

}