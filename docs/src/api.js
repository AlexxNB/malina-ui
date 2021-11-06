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

}