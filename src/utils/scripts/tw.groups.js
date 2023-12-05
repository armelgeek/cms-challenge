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
        label: 'basic', components: [
            { name: 'BasicOptions', attr: 'basic', title: 'basic' }
        ]
    },
    {
        label: 'Advanced', components: [
            { name: 'Css', attr: 'css', title: 'CSS' }
        ]
    },
    {
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
        label: 'layout', components: [
            { name: 'Options', attr: 'aspectratio', title: 'Aspect Ratio' },
            { name: 'Options', attr: 'container', title: 'Container' },
            { name: 'Options', attr: 'columns', title: 'Columns' },
            { name: 'Options', attr: 'breakafter', title: 'Break After' },
            { name: 'Options', attr: 'breakbefore', title: 'Break Before' },
            { name: 'Options', attr: 'breakinside', title: 'Break Inside' },
            { name: 'Options', attr: 'boxdecoration', title: 'Box Decoration' },
            { name: 'Options', attr: 'boxsizing', title: 'Box Sizing' },
            { name: 'Options', attr: 'display', title: 'Display' },
            { name: 'Options', attr: 'float', title: 'Float' },
            { name: 'Options', attr: 'clear', title: 'Clear' },
            { name: 'Options', attr: 'isolation', title: 'Isolation' },
            { name: 'Options', attr: 'objectfit', title: 'Object Fit' },
            { name: 'Options', attr: 'objectposition', title: 'Object Position' },
            { name: 'Options', attr: 'overflow', title: 'Overflow' },
            { name: 'Options', attr: 'overscroll', title: 'Overscroll' },
            { name: 'Options', attr: 'visibility', title: 'Visibility' },

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
        label: 'Flexbox & Grid', filter: ['grid', 'flex', 'menu', 'document', 'li', 'ul', 'ol'], components: [
            { name: 'Options', attr: 'alignitems', title: 'Align items' },
            { name: 'Options', attr: 'aligncontent', title: 'Align content' },
            { name: 'Options', attr: 'alignself', title: 'Align self' },
            { name: 'Options', attr: 'justifycontent', title: 'Justify content' },
            { name: 'Options', attr: 'justifyitems', title: 'Justify items' },
            { name: 'Options', attr: 'justifyself', title: 'justify self' },
        ]
    }, {
        label: 'Tables', components: [
            {name:'Options', attr: 'bordercollapse', title: 'border collapse'},
            {name:'Options', attr: 'borderspacing', title: 'border spacing'},
            {name:'Options', attr: 'tablelayout', title: 'table layout'},
            {name: 'Options', attr: 'captionside', title: 'caption side'}
        ]
    },
    {
        label: 'position', components: [
            { name: 'Options', attr: 'positionelement', title: 'position' },

            { name: 'Options', attr: 'positionTop', title: 'top', css: 'float-left' },
            { name: 'Options', attr: 'positionLeft', title: 'left', css: 'float-left' },
            { name: 'Options', attr: 'positionBottom', title: 'bottom', css: 'float-left' },
            { name: 'Options', attr: 'positionRight', title: 'right', css: 'float-none' },
            { name: 'Options', attr: 'positionInset', title: 'Inset' },
            { name: 'Options', attr: 'positionInsetStart', title: 'Inset Start' },
            { name: 'Options', attr: 'positionInsetEnd', title: 'Inset End' },
            { name: 'Options', attr: 'positionInsetPx', title: 'Inset X' },
            { name: 'Options', attr: 'positionInsetPy', title: 'Inset Y' },
            { name: 'Options', attr: 'zindex', title: 'z index' },
        ]
    },
    {
        label: 'dimension', components: [
            { name: 'Options', attr: 'gap', title: 'gap' },
            { name: 'Options', attr: 'width', title: 'width' },
            { name: 'Options', attr: 'minWidth', title: 'Min Width' },
            { name: 'Options', attr: 'maxWidth', title: 'Max Width' },
            { name: 'Options', attr: 'height', title: 'height' },
            { name: 'Options', attr: 'minHeight', title: 'Min Height' },
            { name: 'Options', attr: 'maxHeight', title: 'Max Height' }
        ]
    },
    {
        label: 'typography', components: [
            { name: 'Button', group: 'text-decoration', attr: 'italic', title: 'italic', icon: 'format_italic', css: 'float-left' },
            { name: 'Button', group: 'text-decoration', attr: 'underline', title: 'underline', icon: 'format_underline', css: 'float-left' },
            { name: 'Button', group: 'text-decoration', attr: 'uppercase', title: 'uppercase', icon: 'arrow_upward', css: 'float-left' },
            { name: 'Button', group: 'text-decoration', attr: 'lowercase', title: 'lowercase', icon: 'arrow_downward', css: 'float-left' },
            { name: 'Button', group: 'text-decoration', attr: 'capitalize', title: 'capitalize', icon: 'text_fields', css: 'float-none' },
            { name: 'Button', group: 'text-decoration', attr: 'line-through', title: 'strikethrough', icon: 'format_strikethrough', css: 'float-left' },
            { name: 'Color', attr: 'textcolor' },
            { name: 'DecorationColor', attr: 'textdecorationcolor', title: 'Text decoration color' },
            { name: 'Options', attr: 'textdecorationstyle', title: 'Deco. style' },
            { name: 'Options', attr: 'textdecorationythickness', title: 'Deco. Thickness' },
            { name: 'Options', attr: 'textunderlineoffset', title: 'Under.. Offset' },
            { name: 'Options', attr: 'textoverflow', title: 'Text overflow' },
            { name: 'Options', attr: 'textindent', title: 'Text Indent' },
            { name: 'Options', attr: 'verticalalign', title: 'Vertical Align' },
            { name: 'Options', attr: 'whitespace', title: 'WhiteSpace' },
            { name: 'Options', attr: 'textSize', title: 'size' },
            { name: 'Options', attr: 'textAlign', title: 'Align' },
            { name: 'Options', attr: 'fontWeight', title: 'weight' },
            { name: 'Range', attr: 'textOpacity', title: 'opacity' },
            { name: 'Options', attr: 'fontsmoothing', title: 'Font Smoothing' },
            { name: 'Options', attr: 'textSpacing', title: 'letter spacing' },
            { name: 'FontText', attr: 'textsize', title: 'Font' },
            { name: 'Options', attr: 'textlineheight', title: 'line height' }
        ]
    },
    {
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
            {name: 'Options', attr: 'contrast', title: 'contrast' },
            {name: 'Options', attr: 'dropshadow', title: 'drop shadow' },
            { name: 'Checkbox', attr: 'grayscale', title: 'grayscale' },
            { name: 'Checkbox', attr: 'invert', title: 'invert' },
            {name: 'Options', attr: 'huerotate', title: 'hue rotate' },
            {name: 'Options', attr: 'saturation', title: 'saturation' },
            { name: 'Checkbox', attr: 'sepia', title: 'sepia' },
            {name:'Checkbox', attr:'backdropgrayscale',title:'backdrop grayscale'},
            {name: 'Options', attr: 'backdropblur', title: 'backdrop blur' },
            {name:'Options',attr:'backdropbrightness',title: 'backdrop brightness'},
            {name:'Options', attr:'backdropcontrast',title: 'backdrop contrast'},
            {name:'Options', attr:'backdrophuerotate',title: 'backdrop hue rotate'},
            {name: 'Checkbox',attr:'backdropinvert',title: 'backdrop invert'},
            {name:'Options',attr:'backdropopacity',title: 'backdrop opacity'},
            {name: 'Options',attr:'backdropsaturate',title: 'backdrop saturate'},
           
        ]
    },
    {
        label: 'background', components: [
            { name: 'Color', attr: 'bgcolor' },
            { name: 'Range', attr: 'bgOpacity', title: 'opacity' },
            { name: 'Options', attr: 'bgattachments', title: 'Bg Attachement' },
            { name: 'Options', attr: 'bgclips', title: 'Bg Clips' },
            { name: 'Options', attr: 'bgorigin', title: 'Bg Origin' },
            { name: 'Options', attr: 'bgpositions', title: 'Bg Position' },
            { name: 'Options', attr: 'bgrepeats', title: 'Bg Repeat' },
            { name: 'Options', attr: 'bgsizes', title: 'Bg Size' },
            { name: 'Options', attr: 'blur', title: 'filter blur' }
        ]
    },
    {
        label: 'gradient', components: [
            { name: 'BgGradient', attr: 'from', title: 'gradient from', css: 'float-left', group: true },
            { name: 'BgGradient', attr: 'via', title: 'gradient via', css: 'float-left', group: true },
            { name: 'BgGradient', attr: 'to', title: 'gradient to', css: 'float-left', group: true },
            { name: 'Options', attr: 'gradient', title: 'direction', css: 'flex w-full', group: true },
            { name: 'BgGradientPresets', attr: 'gradientPreset', title: 'Presets', css: 'flex w-full', group: true },
        ]
    },
    {
        label: 'border', components: [
            { name: 'Range', attr: 'border', title: 'all' },
            { name: 'Range', attr: 'borderTop', title: 'top' },
            { name: 'Range', attr: 'borderRight', title: 'right' },
            { name: 'Range', attr: 'borderBottom', title: 'bottom' },
            { name: 'Range', attr: 'borderLeft', title: 'left' },
            { name: 'BorderColor', attr: 'bordercolor' },
            { name: 'Options', attr: 'borderType' },
            { name: 'Range', attr: 'borderOpacity', title: 'opacity' },
            { name: 'DivideColor', attr: 'dividecolor' },
            { name: 'Range', attr: 'dividewidth', title: 'divide width' },
            { name: 'Range', attr: 'dividerStyle', title: 'divider style' },
            { name: 'Range', attr: 'outline', title: 'Outline' },
            { name: 'OutlineColor', attr: 'outlinecolor' },
            { name: 'Options', attr: 'outlinestyle', title: 'outline style' },
            { name: 'Options', attr: 'outlineoffset', title: 'outline offset' }


        ]
    },
    {
        label: 'rounded / shadow / +', components: [
            { name: 'Options', attr: 'rounded' },
            { name: 'Options', attr: 'shadow' },
            { name: 'Range', attr: 'opacity', title: 'opacity' },
            { name: 'ShadowColor', attr: 'shadowcolor' },
            { name: 'Options', attr: 'mixblendmode',title:'Mix Blend M.' },
            { name: 'Options', attr: 'bgblendmode',title:'Bg Blend M.' }
        ]
    },
    {
        label: 'Interact && Animation', components: [

            {name: 'Checkbox',attr: 'apparence', title: 'apparence'},
            { name: 'Options', attr: 'animation', title: 'animation' },
            {name: 'Options', attr: 'willchange', title: 'will change' },
            {name: 'Options', attr: 'userselect',title: 'user select' },
            {name: 'Options',attr: 'touchaction', title: 'touch action'},
            {name: 'Options',attr: 'scrollsnaptype', title: 'scroll snap type'},
            {name: 'Options',attr: 'scrollsnapstop', title: 'scroll snap stop'},
            {name: 'Options',attr: 'scrollsnapalign', title: 'scroll snap align'},
            {name: 'Options',attr: 'scrollsnappaddingTop', title: 'scroll snap pt'},
            {name: 'Options',attr: 'scrollsnappaddingBottom', title: 'scroll snap pb'},
            {name: 'Options',attr: 'scrollsnappaddingLeft', title: 'scroll snap pl'},
            {name: 'Options',attr: 'scrollsnappaddingRight', title: 'scroll snap pr'},
            {name: 'Options',attr: 'scrollsnapmarginTop', title: 'scroll snap mt'},
            {name: 'Options',attr: 'scrollsnapmarginBottom', title: 'scroll snap mb'},
            {name: 'Options',attr: 'scrollsnapmarginLeft', title: 'scroll snap ml'},
            {name: 'Options',attr: 'scrollsnapmarginRight', title: 'scroll snap mr'},
            {name: 'Options',attr: 'scrollbehavior', title: 'scroll behavior'},
            {name: 'Options',attr: 'resize', title: 'resize'},
            {name: 'Options',attr: 'pointerevent', title: 'pointer event'},
            {name: 'CaretColor',attr: 'caretcolor'},
            {name: 'AccentColor',attr: 'accent'},
            {name: 'Options',attr: 'cursor', title: 'cursor'},
            
        ]
    },
    {
        label: 'transform && Transit.', components: [
            { name: 'Options', attr: 'transition', title: 'transition type' },
            { name: 'Options', attr: 'transitionDuration', title: 'transition dur.' },
            { name: 'Options', attr: 'transitionTiming', title: 'timing function' },
            { name: 'Options', attr: 'transitionDelay', title: 'transition del.' },
            { name: 'Options', attr: 'skewX', required: 'transform', title: 'Skew X' },
            { name: 'Options', attr: 'skewY', required: 'transform', title: 'Skew Y' },
            { name: 'Options', attr: 'rotate', required: 'transform' },
            { name: 'Options', attr: 'clipPath', required: 'transform', title: 'clip path' },
            { name: 'Options', attr: 'rotate3D', title: 'Perspective' },
            {name: 'Options', attr: 'scalex', title: 'scale x'},
            {name: 'Options', attr: 'scaley', title: 'scale y'},
            {name: 'Options', attr: 'translatex', title: 'translate x'},
            {name: 'Options', attr: 'translatey', title: 'translate y'},
            {name: 'Options', attr: 'transformorigin', title: 'transform origin'}
        ]
    },
   
    {
        label: 'spacing', components: [
            { name: 'Options', attr: 'spacing', title: 'space' },
            { name: 'Range', attr: 'paddingTop', title: 'P top' },
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
        ]
    },

]

export default twgroups