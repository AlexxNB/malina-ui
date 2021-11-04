export default {

    //Icon.xht
    icon:{

        props: [
            ['src',"Icon SVG-path string, sprite's symbol or filename"],
            ['color',"Color (for path and sprite only)",'currentColor'],
            ['size',"Icon size. Digit or css-units",1],
            ['rotate',"Icon rotation in degrees",false],
            ['flipH',"Flip icon horizontally",false],
            ['flipV',"Flip icon vertically",false],
            ['spin',"Animate icon spinning. Time in seconds for full turn.",false],
            ['viewbox',"viewBox attribute for svg element",'0 0 24 24'],
        ],

        anchors:[
            ['^','Icon element (<svg> or <span> wrapper around <img>)'],
            ['^img','<img> element, only when `src` is image'],
        ]

    },

}