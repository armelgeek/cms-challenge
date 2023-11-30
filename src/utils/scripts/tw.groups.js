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
            { name: 'Options', attr: 'gap', title: 'gap' }
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
            { name: 'Position', attr: 'position' },
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
            { name: 'Options', attr: 'textlineheight', title: 'line height' },
            { name: 'Options', attr: 'fontvariantnumeric', title: 'Font Variant Numeric' },
            { name: 'TextFont', attr: 'textfont', title:'Font' },
            { name: 'Options', attr: 'lineclamp', title:'line clamp' },
        ]
    },
    {label: 'List', components: [
        { name: 'Options', attr: 'liststyleposition', title:'list style position' },
        { name: 'Options', attr: 'liststyletype', title:'list style position' },
    ]},
    {
        label: 'background', components: [
            { name: 'Color', attr: 'bgcolor' },
            { name: 'Range', attr: 'bgOpacity', title: 'opacity' },
            { name: 'BgPosition', attr: 'bgposition' },
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
        label: 'padding', components: [
            { name: 'Range', attr: 'padding', title: 'all' },
            { name: 'Range', attr: 'paddingTop', title: 'top' },
            { name: 'Range', attr: 'paddingBottom', title: 'bottom' },
            { name: 'Range', attr: 'paddingLeft', title: 'left' },
            { name: 'Range', attr: 'paddingRight', title: 'right' },
            { name: 'Range', attr: 'paddingInlineStart', title: 'inline start' },
            { name: 'Range', attr: 'paddingInlineEnd', title: 'inline end' },
            
        ]
    },

    {
        label: 'margin', components: [
            { name: 'Range', attr: 'margin', title: 'all', negative: true },
            { name: 'Range', attr: 'marginTop', title: 'top', negative: true },
            { name: 'Range', attr: 'marginBottom', title: 'bottom', negative: true },
            { name: 'Range', attr: 'marginLeft', title: 'left', negative: true },
            { name: 'Range', attr: 'marginRight', title: 'right', negative: true },
            { name: 'Range', attr: 'marginInlineStart', title: 'inline start', negative: true  },
            { name: 'Range', attr: 'marginInlineEnd', title: 'inline end', negative: true  },
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
            { name: 'Range', attr: 'borderOpacity', title: 'opacity' }
        ]
    },
    {
        label: 'rounded / shadow / +', components: [
            { name: 'Options', attr: 'rounded' },
            { name: 'Options', attr: 'shadow' },
            { name: 'Checkbox', attr: 'grayscale', title: 'grayscale' },
            { name: 'Range', attr: 'opacity', title: 'opacity' }
        ]
    },
    {
        label: 'CSS Animation', components: [
            { name: 'Options', attr: 'animation', title: 'animation' }
        ]
    },
    {
        label: 'Transition', components: [
            { name: 'Options', attr: 'transition', title: 'transition type' },
            { name: 'Options', attr: 'transitionDuration', title: 'transition duration' },
            { name: 'Options', attr: 'transitionTiming', title: 'timing function' },
            { name: 'Options', attr: 'transitionDelay', title: 'transition delay' }
        ]
    },
    {
        label: 'transform', components: [
            { name: 'Options', attr: 'skewX', required: 'transform', title: 'Skew X' },
            { name: 'Options', attr: 'skewY', required: 'transform', title: 'Skew Y' },
            { name: 'Options', attr: 'rotate', required: 'transform' },
            { name: 'Options', attr: 'clipPath', required: 'transform', title: 'clip path' },
            { name: 'Options', attr: 'rotate3D', title: 'Perspective' }
        ]
    },
    {
        label: 'spacing', components: [
            { name: 'Options', attr: 'spacing', title: 'all' },
            { name: 'Options', attr: 'spacingTop', title: 'top' },
            { name: 'Options', attr: 'spacingBottom', title: 'bottom' },
            { name: 'Options', attr: 'spacingLeft', title: 'left' },
            { name: 'Options', attr: 'spacingRight', title: 'right' },
        ]
    },

]

export default twgroups