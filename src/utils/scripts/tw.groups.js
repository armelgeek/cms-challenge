/**
 * Customizer panel options
 * @label   => Option label
 * @filter  => Apply only to elements with type === filter
 * @components => Array of components for each group
 *
 * @components =>
 *  @name   *String => component name
 *  @attr   *String => variable from the twclasses
 *  @title  *String => option title
 *  @css    String  => extra class to assign to the option
 *  @icon   String  => material icon name if control uses an icon
 *  @negative Boolean => true = slider has negative values
 */
const twgroups = [
    {
       
        label: 'layout', components: [
            { name: 'Display', attr: 'display', title: 'Display' },

            /**{ name: 'Options', attr: 'aspectratio', title: 'Aspect Ratio' },
            { name: 'Options', attr: 'container', title: 'Container' },
            { name: 'Options', attr: 'columns', title: 'Columns' },
            { name: 'Options', attr: 'breakafter', title: 'Break After' },
            { name: 'Options', attr: 'breakbefore', title: 'Break Before' },
            { name: 'Options', attr: 'breakinside', title: 'Break Inside' },
            { name: 'Options', attr: 'boxdecoration', title: 'Box Decoration' },
            { name: 'Options', attr: 'boxsizing', title: 'Box Sizing' },
           
            { name: 'Options', attr: 'float', title: 'Float' },
            { name: 'Options', attr: 'clear', title: 'Clear' },
            { name: 'Options', attr: 'isolation', title: 'Isolation' },
            { name: 'Options', attr: 'objectposition', title: 'Object Position' },
            { name: 'Options', attr: 'overflow', title: 'Overflow' },
            { name: 'Options', attr: 'overscroll', title: 'Overscroll' },
            **/

        ]
    },
    /**{
        label: 'grid', filter: ['grid'], components: [
            { name: 'Options', attr: 'gridtemplaterows', title: 'Grid T. rows' },
            { name: 'Options', attr: 'gridtemplaterowstart', title: 'Grid T. Rows Start' },
            { name: 'Options', attr: 'gridtemplaterowspan', title: 'Grid T. Rows Span' },
            { name: 'Options', attr: 'gridtemplaterowend', title: 'Grid Templates. Rows End' },
            { name: 'Options', attr: 'gridtemplatecolumn', title: 'Grid Templates Column' },
            { name: 'Options', attr: 'gridtemplatecolstart', title: 'Grid T. Column Start' },
            { name: 'Options', attr: 'gridtemplatecolspan', title: 'Grid T. Column Span' },
            { name: 'Options', attr: 'gridtemplatecolend', title: 'Grid T. Col End' },
            { name: 'Options', attr: 'gridautoflow', title: 'Grid Auto Flow' },
            { name: 'Options', attr: 'gridautorows', title: 'Grid Auto Rows' },
            { name: 'Options', attr: 'gridautocolumns', title: 'Grid Auto Col' },
        ]
    },
    
    {
        label: 'flex', components: [
            { name: 'Options', attr: 'flexval', title: 'Flex' },
            { name: 'Options', attr: 'colspan', title: 'grid column' },
            { name: 'Options', attr: 'flexbasis', title: 'Basis' },
            { name: 'Options', attr: 'flexdirection', title: 'direction' },

            { name: 'Options', attr: 'flexwrap', title: 'wrap' },
            { name: 'Options', attr: 'flexgrow', title: 'grow' },
            { name: 'Options', attr: 'flexshrink', title: 'shrink' },
            { name: 'Options', attr: 'flexorder', title: 'order' },
            { name: 'Options', attr: 'placecontent', title: 'place content' },
            { name: 'Options', attr: 'placeitems', title: 'place items' },
            { name: 'Options', attr: 'placeself', title: 'place self' },
        ]
    },
    {
        label: 'Flexbox & Grid', filter: ['grid', 'flex'], components: [
            { name: 'Options', attr: 'alignitems', title: 'Align items' },
            { name: 'Options', attr: 'aligncontent', title: 'Align content' },
            { name: 'Options', attr: 'alignself', title: 'Align self' },
            { name: 'Options', attr: 'justifycontent', title: 'Justify content' },
            { name: 'Options', attr: 'justifyitems', title: 'Justify items' },
            { name: 'Options', attr: 'justifyself', title: 'justify self' },
        ]
    },**/

    {
        label: 'Sizing', components: [
            { name: 'Width', attr: 'width', title: 'width' },
            { name: 'Height', attr: 'height', title: 'height' },
            { name: 'SingleOptions', attr: 'overflow', title: 'Overflow' },
            { name: 'SingleOptions', attr: 'objectfit', title: 'Object' }

        ]
    },
    {
        label: 'spacing', components: [
            { name: 'Spacing', attr: 'spacing', title: 'space' },
            /** { name: 'Range', attr: 'paddingTop', title: 'P top' },
             { name: 'Range', attr: 'paddingBottom', title: 'bottom' },
             { name: 'Range', attr: 'paddingLeft', title: 'P left' },
             { name: 'Range', attr: 'paddingRight', title: 'P right' },
             { name: 'Range', attr: 'paddingInlineStart', title: 'P inline start' },
             { name: 'Range', attr: 'paddingInlineEnd', title: 'P inline end' },
             { name: 'Range', attr: 'marginTop', title: 'M top', negative: true },
             { name: 'Range', attr: 'marginBottom', title: 'M bottom', negative: true },
             { name: 'Range', attr: 'marginLeft', title: 'M left', negative: true },
             { name: 'Range', attr: 'marginRight', title: 'M right', negative: true },
             { name: 'Range', attr: 'marginInlineStart', title: 'M inline start', negative: true },
             { name: 'Range', attr: 'marginInlineEnd', title: 'M inline end', negative: true },
              */
        ]
    },
    /**
     *  {
        label: 'dimension', components: [
           { name: 'Options', attr: 'gap', title: 'gap' },
            { name: 'Width', attr: 'width', title: 'width' },
           {/** { name: 'Options', attr: 'minWidth', title: 'Min Width' },
            { name: 'Options', attr: 'maxWidth', title: 'Max Width' },
            { name: 'Options', attr: 'height', title: 'height' },
        ]
    },
     */
    {
        label: 'typography', components: [

            // { name: 'Color', attr: 'textcolor' },
            // { name: 'DecorationColor', attr: 'textdecorationcolor', title: 'Text decoration color' },
            { name: 'TextFont', attr: 'textfont' },

            //{ name: 'Options', attr: 'textdecorationythickness', title: 'Deco. Thickness' },
            //{ name: 'Options', attr: 'textunderlineoffset', title: 'Under.. Offset' },
            //{ name: 'Options', attr: 'textoverflow', title: 'Text overflow' },

            // { name: 'Options', attr: 'verticalalign', title: 'Vertical Align' },

            // ,
            { name: 'SingleOptions', attr: 'fontWeight', title: 'weight' },
            { name: 'SingleOptions', attr: 'textSize', title: 'size' },
            { name: 'Color', attr: 'textcolor', title: 'Color' },
            { name: 'TextSpacing', attr: 'textspacing', title: 'Spacing' },
            { name: 'SingleOptions', attr: 'textAlign', title: 'Alignement' },
            { name: 'TextStyle', attr: 'textStyle', title: 'Style' },
            { name: 'SingleOptions', attr: 'textOpacity', title: 'opacity' },
            { name: 'SingleOptions', attr: 'whitespace', title: 'WhiteSpace' },
            { name: 'SingleOptions', attr: 'textindent', title: 'Text Indent' },

            //{ name: 'Options', attr: 'fontsmoothing', title: 'Font Smoothing' },
            //  { name: 'Options', attr: 'textSpacing', title: 'letter spacing' },
            // { name: 'FontText', attr: 'textsize', title: 'Size' },
            // { name: 'Options', attr: 'textlineheight', title: 'line height' }
        ]
    },
    /** {
         label: 'Others', components: [
             { name: 'Options', attr: 'liststyleposition', title: 'list style position' },
             { name: 'Options', attr: 'liststyletype', title: 'list style position' },
             { name: 'Options', attr: 'lineclamp', title: 'line clamp' },
             { name: 'Options', attr: 'breakword', title: 'Break Word' },
             { name: 'Options', attr: 'fontvariantnumeric', title: 'Font Variant Numeric' },
             { name: 'Options', attr: 'ringwidth', title: 'ring width' },
             { name: 'RingColor', attr: 'ringcolor', title: 'ring color' },
             { name: 'Options', attr: 'ringoffset', title: 'ring offset' },
             { name: 'RingOffsetColor', attr: 'ringoffsetcolor' }
         ]
     },
     {
         label: 'Filters', components: [
             { name: 'Options', attr: 'blur', title: 'blur' },
             { name: 'Options', attr: 'brightness', title: 'brightness' },
             { name: 'Options', attr: 'contrast', title: 'contrast' },
             { name: 'Options', attr: 'dropshadow', title: 'drop shadow' },
             { name: 'Checkbox', attr: 'grayscale', title: 'grayscale' },
             { name: 'Checkbox', attr: 'invert', title: 'invert' },
             { name: 'Options', attr: 'huerotate', title: 'hue rotate' },
             { name: 'Options', attr: 'saturation', title: 'saturation' },
             { name: 'Checkbox', attr: 'sepia', title: 'sepia' },
             { name: 'Checkbox', attr: 'backdropgrayscale', title: 'backdrop grayscale' },
             { name: 'Options', attr: 'backdropblur', title: 'backdrop blur' },
             { name: 'Options', attr: 'backdropbrightness', title: 'backdrop brightness' },
             { name: 'Options', attr: 'backdropcontrast', title: 'backdrop contrast' },
             { name: 'Options', attr: 'backdrophuerotate', title: 'backdrop hue rotate' },
             { name: 'Checkbox', attr: 'backdropinvert', title: 'backdrop invert' },
             { name: 'Options', attr: 'backdropopacity', title: 'backdrop opacity' },
             { name: 'Options', attr: 'backdropsaturate', title: 'backdrop saturate' },
 
         ]
     },**/
    {
        label: 'background', components: [
            { name: 'Color', attr: 'bgcolor', title: 'Color' },
            /** { name: 'Range', attr: 'bgOpacity', title: 'opacity' },
             { name: 'Options', attr: 'bgattachments', title: 'Bg Attachement' },
             { name: 'Options', attr: 'bgclips', title: 'Bg Clips' },
             { name: 'Options', attr: 'bgorigin', title: 'Bg Origin' },
             { name: 'Options', attr: 'bgpositions', title: 'Bg Position' },
             { name: 'Options', attr: 'bgrepeats', title: 'Bg Repeat' },
             { name: 'Options', attr: 'bgsizes', title: 'Bg Size' },
             { name: 'Options', attr: 'blur', title: 'filter blur' } */
        ]
    },
    /** {
         label: 'gradient', components: [
             { name: 'BgGradient', attr: 'from', title: 'gradient from', css: 'float-left', group: true },
             { name: 'BgGradient', attr: 'via', title: 'gradient via', css: 'float-left', group: true },
             { name: 'BgGradient', attr: 'to', title: 'gradient to', css: 'float-left', group: true },
             { name: 'Options', attr: 'gradient', title: 'direction', css: 'flex w-full', group: true },
             { name: 'BgGradientPresets', attr: 'gradientPreset', title: 'Presets', css: 'flex w-full', group: true },
         ]
     },**/
    {
        label: 'borders/divider', components: [
            { name: 'Partial', title: 'Border' },
            { name: 'Borders' },
            { name: 'BordersWidth' },
            { name: 'SingleOptions', attr: 'borderType', title: 'Style' },
            { name: 'BorderColor', attr: 'bordercolor' },
            { name: 'Partial', title: 'Divider' },
            { name: 'DividerWidth' },
            { name: 'SingleOptions', attr: 'dividerStyle', title: 'Style' },
            { name: 'DivideColor', attr: 'dividecolor' },
            /**  { name: 'Range', attr: 'border', title: 'all' },
              { name: 'Range', attr: 'borderTop', title: 'top' },
              { name: 'Range', attr: 'borderRight', title: 'right' },
              { name: 'Range', attr: 'borderBottom', title: 'bottom' },
              { name: 'Range', attr: 'borderLeft', title: 'left' },
             
              
              { name: 'Range', attr: 'borderOpacity', title: 'opacity' },
              { name: 'DivideColor', attr: 'dividecolor' },
              { name: 'Range', attr: 'dividewidth', title: 'divide width' },
              { name: 'Range', attr: 'dividerStyle', title: 'divider style' },
              { name: 'Range', attr: 'outline', title: 'Outline' },
              { name: 'OutlineColor', attr: 'outlinecolor' },
              { name: 'Options', attr: 'outlinestyle', title: 'outline style' },
              { name: 'Options', attr: 'outlineoffset', title: 'outline offset' }**/


        ]
    },
    {
        label: 'position', components: [
            { name: 'SingleOptions', attr: 'positionelement', title: 'position' },
            { name: 'Placement' },
            { name: 'SingleOptions', attr: 'visibility', title: 'Visibility' },
            { name: 'SingleOptions', attr: 'zindex', title: 'Stack Order' },
            /** { name: 'Options', attr: 'positionTop', title: 'top', css: 'float-left' },
             { name: 'Options', attr: 'positionLeft', title: 'left', css: 'float-left' },
             { name: 'Options', attr: 'positionBottom', title: 'bottom', css: 'float-left' },
             { name: 'Options', attr: 'positionRight', title: 'right', css: 'float-none' },
             { name: 'Options', attr: 'positionInset', title: 'Inset' },
             { name: 'Options', attr: 'positionInsetStart', title: 'Inset Start' },
             { name: 'Options', attr: 'positionInsetEnd', title: 'Inset End' },
             { name: 'Options', attr: 'positionInsetPx', title: 'Inset X' },
             { name: 'Options', attr: 'positionInsetPy', title: 'Inset Y' },
             { name: 'Options', attr: 'zindex', title: 'z index' },**/
        ]
    },
    {
        label: 'Effects', components: [
            { name: 'SingleOptions', attr: 'opacity', title: 'Opacity' },
            { name: 'SingleOptions', attr: 'shadow', title: 'Shadow' },
            { name: 'SingleOptions', attr: 'mixblendmode', title: 'Blend Mode' },
        ]
    },
    {
        label: 'Filters', components: [
            {
                name: 'SingleOptions', attr: 'blur', title: 'Blur',
            }, {
                name: 'SingleOptions', attr: 'brightness', title: 'Brightness'
            }, {
                name: 'SingleOptions', attr: 'contrast', title: 'Contrast'
            },
            {
                name: 'SingleOptions', attr: 'saturation', title: 'saturate'
            },
            {
                // deg
                name: 'SingleOptions', attr: 'huerotate', title: 'hue rotate', prefix: 'deg'
            }, {
                name: 'SingleOptions', attr: 'grayscale', title: 'Grayscale'

            }, {
                name: 'SingleOptions', attr: 'invert', title: 'Invert'

            }
            , {
                name: 'SingleOptions', attr: 'sepia', title: 'Sepia'

            }
        ]
    },
    {
        label: 'Backdrop', components: [
            {
                name: 'SingleOptions', attr: 'backdropblur', title: 'Blur',
            },
            {
                name: 'SingleOptions', attr: 'backdropopacity', title: 'Opacity',
            }, {
                name: 'SingleOptions', attr: 'backdropbrightness', title: 'Brightness'
            }, {
                name: 'SingleOptions', attr: 'backdropcontrast', title: 'Contrast'
            },
            {
                name: 'SingleOptions', attr: 'backdropsaturate', title: 'saturate'
            },
            {
                // deg
                name: 'SingleOptions', attr: 'backdrophuerotate', title: 'hue rotate', prefix: 'deg'
            }, {
                name: 'SingleOptions', attr: 'backdropgrayscale', title: 'Grayscale'

            }, {
                name: 'SingleOptions', attr: 'backdropinvert', title: 'Invert'

            }, {
                name: 'SingleOptions', attr: 'backdropsepia', title: 'Sepia'

            }
        ]
    },
    {
        label: 'Interactivity', components: [
            {
                name: 'SingleOptions', attr: 'cursor', title: 'Cursor'
            },
            { name: 'SingleOptions', attr: 'userselect', title: 'Selecting' },
            { name: 'SingleOptions', attr: 'pointerevent', title: 'Pointer Event' },
        ]
    },
    /**
    {
        label: 'rounded / shadow / +', components: [
            { name: 'Options', attr: 'rounded' },
            { name: 'Options', attr: 'shadow' },
            { name: 'Range', attr: 'opacity', title: 'opacity' },
            { name: 'ShadowColor', attr: 'shadowcolor' },
            { name: 'Options', attr: 'mixblendmode', title: 'Mix Blend M.' },
            { name: 'Options', attr: 'bgblendmode', title: 'Bg Blend M.' }
        ]
    },
    {
        label: 'Interact && Animation', components: [
 
            { name: 'Checkbox', attr: 'apparence', title: 'apparence' },
            { name: 'Options', attr: 'animation', title: 'animation' },
            { name: 'Options', attr: 'willchange', title: 'will change' },
            { name: 'Options', attr: 'userselect', title: 'user select' },
            { name: 'Options', attr: 'touchaction', title: 'touch action' },
            { name: 'Options', attr: 'scrollsnaptype', title: 'scroll snap type' },
            { name: 'Options', attr: 'scrollsnapstop', title: 'scroll snap stop' },
            { name: 'Options', attr: 'scrollsnapalign', title: 'scroll snap align' },
            { name: 'Options', attr: 'scrollsnappaddingTop', title: 'scroll snap pt' },
            { name: 'Options', attr: 'scrollsnappaddingBottom', title: 'scroll snap pb' },
            { name: 'Options', attr: 'scrollsnappaddingLeft', title: 'scroll snap pl' },
            { name: 'Options', attr: 'scrollsnappaddingRight', title: 'scroll snap pr' },
            { name: 'Options', attr: 'scrollsnapmarginTop', title: 'scroll snap mt' },
            { name: 'Options', attr: 'scrollsnapmarginBottom', title: 'scroll snap mb' },
            { name: 'Options', attr: 'scrollsnapmarginLeft', title: 'scroll snap ml' },
            { name: 'Options', attr: 'scrollsnapmarginRight', title: 'scroll snap mr' },
            { name: 'Options', attr: 'scrollbehavior', title: 'scroll behavior' },
            { name: 'Options', attr: 'resize', title: 'resize' },
            { name: 'Options', attr: 'pointerevent', title: 'pointer event' },
            { name: 'CaretColor', attr: 'caretcolor' },
            { name: 'AccentColor', attr: 'accent' },
            { name: 'Options', attr: 'cursor', title: 'cursor' },
 
        ]
    },**/
    {
        label: 'transform', components: [
            { name: 'Scale' },
            { name: 'SingleOptions', attr: 'rotate',title: 'Rotate', required: 'transform' },
            { name: 'Move'},
            { name: 'Skew'},
            { name: 'Partial', title: 'Transform origin' },
            {name: 'Position', attr: 'transformorigin', title: 'transform', selector: 'origin'}
            /**{ name: 'Options', attr: 'transition', title: 'transition type' },
            { name: 'Options', attr: 'transitionDuration', title: 'transition dur.' },
            { name: 'Options', attr: 'transitionTiming', title: 'timing function' },
            { name: 'Options', attr: 'transitionDelay', title: 'transition del.' },
            { name: 'Options', attr: 'skewX', required: 'transform', title: 'Skew X' },
            { name: 'Options', attr: 'skewY', required: 'transform', title: 'Skew Y' },
            { name: 'Options', attr: 'rotate', required: 'transform' },
            { name: 'Options', attr: 'clipPath', required: 'transform', title: 'clip path' },
            { name: 'Options', attr: 'rotate3D', title: 'Perspective' },
           
            { name: 'Options', attr: 'translatex', title: 'translate x' },
            { name: 'Options', attr: 'translatey', title: 'translate y' },
            { name: 'Options', attr: 'transformorigin', title: 'transform origin' }**/
        ]
    },


    {
        label: 'Advanced', components: [
            { name: 'icon', attr: 'icon', title: 'icon' },
            { name: 'Css', attr: 'css', title: 'CSS' }
        ]
    }

]

export default twgroups