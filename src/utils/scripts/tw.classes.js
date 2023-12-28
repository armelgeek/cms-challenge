/**
 * Functions and constants used by the customizer
 *
 *
 */
const fonts = "Alfa+Slab+One|Asap+Condensed|Abel|Alice|Alegreya|Amethysta|Archivo+Black|Barlow|Barlow+Condensed|Bungee+Inline|Expletus+Sans|Lora|Montserrat|Nunito+Sans|Oi|Open+Sans|PT+Sans|Roboto|Roboto+Condensed|Quattrocento|Raleway|Ultra|Yatra+One".replaceAll('+', ' ').split('|')
const values = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]
const pixels = [1, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256]

const percs = ['full', '1/2',
    '1/3',
    '2/3',
    '1/4',
    '2/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6',
    '2/6',
    '4/6',
    '5/6',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12'
]

const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'purple', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
const pp = [...values, 'auto', ...percs];
function setPercs(prefix) {
    let arr = []
    percs.forEach(perc => {
        arr.push(prefix + '-' + perc)
    })
    return arr
}
function setValue(prefix, negative = true) {
    let arr = []
    if (negative) {
        let neg = values
        neg.slice().reverse().forEach(v => {
            arr.push('-' + prefix + '-' + v)
        })
    }
    arr.push(' ')
    values.forEach(v => {
        arr.push(prefix + '-' + v)
    })
    return arr
}
function setPp(prefix) {
    let arr = []
    pp.forEach(v => {
        arr.push(prefix + '-' + v)
    })
    return arr
}
function setClass(prefix, negative) {
    let arr = []
    if (negative) {
        let neg = pixels
        neg.slice().reverse().forEach(v => {
            arr.push('-' + prefix + '-' + parseInt(v / 4))
        })
        arr.push(' ')
    }
    pixels.forEach(v => {
        arr.push(prefix + '-' + parseInt(v / 4))
    })

    return arr
}

function setOpacity(prefix) {
    let arr = []
    for (var n = 0; n < 5; n++) {
        arr.push(prefix + '-' + (n * 25))
    }
    return arr
}

function setColors(prefix) {
    let arr = ['inherit', 'current', 'transparent', 'white', 'black']
    colors.forEach(color => {
        arr.push(prefix + '-' + color)
        arr.push('hover:' + prefix + '-' + color)
    })
    return arr
}
function getGridCols(prefix) {
    let arr = [prefix + '-none'];
    for (var n = 1; n < 13; n++) {
        arr.push(prefix + '-' + n)
    }
    arr.push(prefix + '-auto');
    return arr
}

function getGridRows(prefix) {
    let arr = [prefix + '-none'];
    for (var n = 1; n < 7; n++) {
        arr.push(prefix + '-' + n)
    }
    return arr
}

var classes = {
    gridtemplaterows: getGridRows('grid-rows'),
    gridtemplaterowstart: getGridRows('rows-start'),
    gridtemplaterowspan: getGridRows('rows-span'),
    gridtemplaterowend: getGridRows('rows-end'),
    gridtemplatecolumn: getGridCols('grid-cols'),
    gridtemplatecolstart: getGridCols('col-start'),
    gridtemplatecolspan: getGridCols('col-span'),
    gridtemplatecolend: getGridCols('col-end'),
    gridautoflow: ['grid-flow-row', 'grid-flow-col', 'grid-flow-dense', 'grid-flow-row-dense', 'grid-flow-col-dense'],
    gridautocolumns: ['auto-cols-auto', 'auto-cols-min', 'auto-cols-max', 'auto-cols-fr'],
    gridautorows: ['auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr'],

    aspectratio: [
        { label: 'auto', value: 'aspect-auto' },
        { label: 'square', value: 'aspect-square' },
        { label: 'video', value: 'aspect-video' }
    ],
    container: [
        { label: 'none', value: 'container-none' },
        { label: 'normal', value: 'container' },
        { label: 'sm', value: 'container-sm' },
        { label: 'md', value: 'container-md' },
        { label: 'lg', value: 'container-lg' },
        { label: 'xl', value: 'container-xl' },
        { label: '2xl', value: 'container-2xl' },
        'container-sm',
        'container-md',
        'container-lg',
        'container-xl',
        'container-2xl'

    ],
    columns: [
        'columns-1',
        'columns-2',
        'columns-3',
        'columns-4',
        'columns-5',
        'columns-6',
        'columns-7',
        'columns-8',
        'columns-9',
        'columns-10',
        'columns-11',
        'columns-12',
        'columns-auto',
        'columns-3xs',
        'columns-2xs',
        'columns-xs',
        'columns-sm',
        'columns-md',
        'columns-lg',
        'columns-xl',
        'columns-2xl',
        'columns-3xl',
        'columns-4xl',
        'columns-5xl',
        'columns-6xl',
        'columns-7xl'
    ],
    breakafter: [
        { label: 'auto', value: 'break-after-auto' },
        { label: 'avoid', value: 'break-after-avoid' },
        { label: 'all', value: 'break-after-all' },
        { label: 'avoid page', value: 'break-after-avoid-page' },
        { label: 'page', value: 'break-after-page' },
        { label: 'left', value: 'break-after-left' },
        { label: 'right', value: 'break-after-right' },
        { label: 'column', value: 'break-after-column' }
    ],
    breakbefore: [
        { label: 'auto', value: 'break-before-auto' },
        { label: 'avoid', value: 'break-before-avoid' },
        { label: 'all', value: 'break-before-all' },
        { label: 'avoid page', value: 'break-before-avoid-page' },
        { label: 'page', value: 'break-before-page' },
        { label: 'left', value: 'break-before-left' },
        { label: 'right', value: 'break-before-right' },
        { label: 'column', value: 'break-before-column' }
    ],
    breakinside: [
        { label: 'auto', value: 'break-before-auto' },
        { label: 'avoid', value: 'break-before-avoid' },
        { label: 'avoid page', value: 'break-before-avoid-page' },
        { label: 'column', value: 'break-before-column' }
    ],
    boxdecoration: [
        { label: 'clone', value: 'box-decoration-clone' },
        { label: 'slice', value: 'box-decoration-slice' },
    ],
    boxsizing: [
        { label: 'border', value: 'box-border' },
        { label: 'content', value: 'box-content' },
    ],
    display: [
        { label: 'flex', value: 'flex' },
        { label: 'grid', value: 'grid' },
        { label: 'block', value: 'block' },
        { label: 'inline block', value: 'inline-block' },
        { label: 'inline', value: 'inline' },
        { label: 'inline flex', value: 'inline-flex' },
        { label: 'table', value: 'table' },
        { label: 'inline table', value: 'inline-table' },
        { label: 'table caption', value: 'table-caption' },
        { label: 'table cell', value: 'table-cell' },
        { label: 'table column', value: 'table-column' },
        { label: 'table column group', value: 'table-column-group' },
        { label: 'table footer group', value: 'table-footer-group' },
        { label: 'table header group', value: 'table-header-group' },
        { label: 'table row group', value: 'table-row-group' },
        { label: 'table row', value: 'table-row' },
        { label: 'flow root', value: 'flow-root' }
    ],

    float: [
        'float-none',
        'float-right',
        'float-left',
    ],
    clear: [
        'clear-none',
        'clear-right',
        'clear-left',
        'clear-both'
    ],
    isolation: [
        { label: 'isolation', value: 'isolation' },
        { label: 'isolation auto', value: 'isolation-auto' }
    ],
    width: [...setPp('w'), 'w-min', 'w-max', 'w-fit'],
    height: [...setPp('h'), 'h-min', 'h-max', 'h-fit'],
    maxWidth: ['max-w-0', 'max-w-none', 'max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'max-w-7xl', 'max-w-full', 'max-w-min', 'max-w-max', 'max-w-max', 'max-w-fit'],
    minWidth: [
        'min-w-0', 'min-w-max', 'min-w-fit', 'min-w-screen', 'min-w-full'
    ],
    minHeight: [
        'min-h-0', 'min-h-max', 'min-h-fit', 'min-h-screen', 'min-h-full'
    ],
    maxHeight: ['max-h-none', ...setValue('max-h', false), 'max-h-min', 'max-h-max', 'max-h-fit', 'max-h-screen', 'max-h-full', 'max-h-px'],
    semantics: ['article', 'aside', 'details', 'div', 'figcaption', 'figure', 'footer', 'form', 'header', 'label', 'main', 'mark', 'nav', 'section', 'span', 'summary', 'time'],
    textSize: [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
    ],
    textAlign: [
        'text-left',
        'text-center',
        'text-right',
        'text-justify',
        'text-start',
        'text-end'
    ],
    textlineheight: [
        'leading-none',
        'leading-3',
        'leading-4',
        'leading-5',
        'leading-6',
        'leading-7',
        'leading-8',
        'leading-9',
        'leading-10',
        'leading-tight',
        'leading-snug',
        'leading-normal',
        'leading-relaxed',
        'leading-loose'
    ],
    fontsmoothing: [
        {
            label: 'antialiased', value: 'antialiased',
        }, {
            label: 'subpixel antialiased', value: 'subpixel-antialiased'
        }
    ],
    fontvariantnumeric: [
        {
            label: "normal nums", value: 'normal-nums',
        }, {
            label: 'ordinal', value: 'ordinal'
        }, {
            label: 'slashed zero', value: 'slashed-zero'
        }, {
            label: 'lining nums', value: 'lining-nums'
        }, {
            label: 'lodstyle nums', value: 'lodstyle-nums'
        }, {
            label: 'proportional nums', value: 'proportional-nums'
        }, {
            label: 'tabular nums', value: 'tabular-nums'
        }, {
            label: 'diagonal fractions', value: 'diagonal-fractions'
        }
        // "stacked-fractions"

    ],
    lineclamp: [
        'line-clamp-none',
        'line-clamp-1',
        'line-clamp-2',
        'line-clamp-3',
        'line-clamp-4',
        'line-clamp-5',
        'line-clamp-6'
    ],
    textSpacing: [
        'tracking-tighter',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
    ],
    liststyleposition: [
        'list-inside',
        'list-outside'
    ],
    liststyletype: [
        'list-none',
        'list-disc',
        'list-decimal'
    ],
    textOpacity: setOpacity('text-opacity'),
    textcolor: setColors('text'),
    textdecorationcolor: setColors('decoration'),
    textdecorationstyle: ['decoration-solid', 'decoration-double', 'decoration-dotted', 'decoration-dashed', 'decoration-wavy'],
    textdecorationythickness: [
        'decoration-auto',
        'decoration-from-font',
        'decoration-0',
        'decoration-1',
        'decoration-2',
        'decoration-4',
        'decoration-8'
    ],
    textunderlineoffset: [
        'underline-offset-auto',
        'underline-offset-0',
        'underline-offset-1',
        'underline-offset-2',
        'underline-offset-4',
        'underline-offset-8'
    ],
    fontfamily: fonts
    /*[
        'Barlow Condensed',
        'Abel',
        'Alice',
        'Alegreya',
        'Amethysta',
        'Lora',
        'Nunito Sans',
        'PT Sans',
        'Raleway',
        'Roboto',
        'Quattrocento',
    ]*/
    ,
    fontWeight: [
        'font-thin',
        'font-extralight',
        'font-light',
        'font-normal',
        'font-medium',
        'font-semibold',
        'font-bold',
        'font-extrabold',
        'font-black'
    ],
    textoverflow: [
        {
            label: 'truncate', value: 'trucate',
        }, {
            label: 'text-ellipsis', value: 'text-ellipsis'
        }, {
            label: 'text-clip', value: 'text-clip'
        }
    ],
    textindent: [...setValue('indent', false), 'indent-px'],
    verticalalign: ['align-baseline', 'align-top', 'align-middle', 'align-bottom', 'align-text-top', 'align-text-bottom', 'align-sub', 'align-super'],
    whitespace: ['whitespace-normal', 'whitespace-nowrap', 'whitespace-pre', 'whitespace-per-line', 'whitespace-pre-wrap', 'whitespace-per-line-wrap', 'whitespace-break-spaces'],
    bgOpacity: setOpacity('bg-opacity'),
    opacity: setOpacity('opacity'),
    colors: colors,
    bgcolor: setColors('bg'),
    from: setColors('from'),
    to: setColors('to'),
    via: setColors('via'),
    gradient: [
        { label: 'Top', value: 'bg-gradient-to-t' },
        { label: 'Top Right', value: 'bg-gradient-to-tr' },
        { label: 'Right', value: 'bg-gradient-to-r' },
        { label: 'Bottom Right', value: 'bg-gradient-to-br' },
        { label: 'Bottom', value: 'bg-gradient-to-b' },
        { label: 'Bottom Left', value: 'bg-gradient-to-bl' },
        { label: 'Left', value: 'bg-gradient-to-l' },
        { label: 'Top Left', value: 'bg-gradient-to-tl' }
    ],
    bgsizes: [
        'bg-auto',
        'bg-cover',
        'bg-contain'
    ],
    bgpositions: [
        'bg-center',
        'bg-top',
        'bg-bottom',
        'bg-left',
        'bg-left-top',
        'bg-left-bottom',
        'bg-right',
        'bg-right-top',
        'bg-right-bottom'
    ],
    bgrepeats: [
        'bg-no-repeat',
        'bg-repeat',
        'bg-repeat-x',
        'bg-repeat-y',
        'bg-repeat-round',
        'bg-repeat-space'
    ],
    bgattachments: [
        'bg-fixed',
        'bg-local',
        'bg-scroll'
    ],
    bgclips: [
        'bg-clip-border',
        'bg-clip-padding',
        'bg-clip-content',
        'bg-clip-text'
    ],
    bgorigin: [
        'bg-origin-border',
        'bg-origin-padding',
        'bg-origin-content'
    ],
    blur: ['blur-1', 'blur-2', 'blur-3', 'blur-4', 'blur-5', 'blur-sm', 'blur-md', 'blur-lg', 'blur-xl', 'blur-2xl', 'blur-3xl'],
    flexval: [
        { label: 'flex none', value: 'none' },
        { label: 'flex 1', value: 'flex-1' },
        { label: 'flex auto', value: 'flex-auto' },
        { label: 'flex initial', value: 'flex-initial' }
    ],
    flexdirection: ['flex-col', 'flex-row', 'flex-col-reverse', 'flex-row-reverse'],
    flexorder: [
        'order-first',
        'order-last',
        'order-none'
    ],
    flexbasis: setPp('basis'),
    flexwrap: [
        'flex-wrap',
        'flex-nowrap',
        'flex-wrap-reverse'
    ],
    flexgrow: [
        'flex-grow',
        'flex-grow-0',
    ],
    flexshrink: [
        'flex-shrink',
        'flex-shrink-0'
    ],
    zindex: [
        'z-auto',
        'z-0',
        'z-1',
        'z-2',
        'z-3',
        'z-4',
        'z-5',
        'z-6',
        'z-7',
        'z-8',
        'z-9',
        'z-10',
        'z-20',
        'z-30',
        'z-40',
        'z-50',
        'z-max',
        'z-top',
        'z-2xtop'
    ],
    dividex: [
        { label: 'none', value: 'divide-x-0' },
        { label: 'normal', value: 'divide-x' },
        { label: 'sm', value: 'divide-x-2' },
        { label: 'lg', value: 'divide-x-4' },
        { label: 'xl', value: 'divide-x-8' },
        { label: 'reverse', value: 'divide-x-reverse' }
    ],
    dividey: [
        { label: 'none', value: 'divide-y-0' },
        { label: 'normal', value: 'divide-y' },
        { label: 'sm', value: 'divide-y-2' },
        { label: 'lg', value: 'divide-y-4' },
        { label: 'xl', value: 'divide-y-8' },
        { label: 'reverse', value: 'divide-y-reverse' }
    ],
    dividecolor: setColors('divide'),
    dividerStyle: [
        'divider-solid',
        'divider-dashed',
        'divider-dotted',
        'divider-double',
        'divider-none'
    ],
    outline: [
        'outline-0',
        'outline-1',
        'outline-2',
        'outline-4',
        'outline-8'
    ],
    outlinestyle: [
        {
            label: 'none', value: 'outline-none',
        },
        {
            label: 'outline', value: 'outline'
        },
        {
            label: 'dashed', value: 'outline-dashed'
        },
        {
            label: 'dotted', value: 'outline-dotted'
        },
        {
            label: 'double', value: 'outline-double',
        }
    ],
    outlineoffset: [
        'outline-offset-0',
        'outline-offset-1',
        'outline-offset-2',
        'outline-offset-4',
        'outline-offset-8'
    ],
    ringwidth: [
        {
            label: 'ring 0', value: 'ring-0',
        },
        {
            label: 'ring 1', value: 'ring-1'
        },
        {
            label: 'ring 2', value: 'ring-2'
        },
        {
            label: 'ring', value: 'ring'
        },
        {
            label: 'ring 4', value: 'ring-4',
        },
        {
            label: 'ring 8', value: 'ring-8',
        },
        {
            label: 'ring inset', value: 'ring-inset',
        }
    ],
    ringcolor: setColors('ring'),
    ringoffset: [
        'ring-offset-0',
        'ring-offset-1',
        'ring-offset-2',
        'ring-offset-4',
        'ring-offset-8'
    ],
    ringoffsetcolor: setColors('ring-offset'),
    gridcols: [
        'md:grid-cols-1',
        'md:grid-cols-2',
        'md:grid-cols-3',
        'md:grid-cols-4',
        'md:grid-cols-5',
        'md:grid-cols-6',
        'md:grid-cols-7',
        'md:grid-cols-8',
        'md:grid-cols-9',
        'md:grid-cols-10',
        'md:grid-cols-11',
        'md:grid-cols-12',
        'md:grid-cols-none',
    ],
    colspan: [
        'md:col-span-auto',
        'md:col-span-1',
        'md:col-span-2',
        'md:col-span-3',
        'md:col-span-4',
        'md:col-span-5',
        'md:col-span-6',
        'md:col-span-7',
        'md:col-span-8',
        'md:col-span-9',
        'md:col-span-10',
        'md:col-span-11',
        'md:col-span-12',
        'md:col-span-full',
    ],
    gapx: [  ...setValue('gap-x',false), 'gap-x-px'],
    gapy:[ ...setValue('gap-y',false), 'gap-y-px'],
    alignitems: [
        'items-start',
        'items-center',
        'items-end',
        'items-baseline',
        'items-stretch'
    ],
    aligncontent: [
        'content-normal',
        'content-start',
        'content-center',
        'content-end',
        'content-between',
        'content-around',
        'content-evenly',
        'content-baseline',
        'content-stretch'
    ],
    alignself: [
        'self-auto',
        'self-start',
        'self-center',
        'self-end',
        'self-stretch',
        'self-baseline'
    ],
    justifycontent: [
        'justify-normal',
        'justify-start',
        'justify-center',
        'justify-end',
        'justify-between',
        'justify-around',
        'justify-evenly',
        'justify-stretch'
    ],
    placecontent: [
        'place-content-start',
        'place-content-center',
        'place-content-end',
        'place-content-between',
        'place-content-around',
        'place-content-evenly',
        'place-content-stretch',
        'place-content-baseline'
    ],
    placeitems: [
        'place-items-start',
        'place-items-center',
        'place-items-end',
        'place-items-stretch',
        'place-items-baseline'
    ],
    placeself: [
        'place-self-auto',
        'place-self-start',
        'place-self-center',
        'place-self-end',
        'place-self-stretch',
        'place-self-baseline'
    ],
    justifyitems: [
        'justify-items-start',
        'justify-items-center',
        'justify-items-end',
        'justify-items-stretch',
    ],
    justifyself: [
        'justify-self-auto',
        'justify-self-start',
        'justify-self-center',
        'justify-self-end',
        'justify-self-stretch',
    ],
    breakword: [
        'break-normal',
        'break-words',
        'break-all',
        'break-keep'
    ],
    bordercolor: setColors('border'),

    borderTop: [
        'border-t',
        'border-t-2',
        'border-t-4',
        'border-t-8'
    ],
    borderLeft: [
        'border-l',
        'border-l-2',
        'border-l-4',
        'border-l-8'
    ],
    borderRight: [
        'border-r',
        'border-r-2',
        'border-r-4',
        'border-r-8'
    ],
    borderBottom: [
        'border-b',
        'border-b-2',
        'border-b-4',
        'border-b-8'
    ],
    borderOpacity: setOpacity('border-opacity'),
    paddingTop: [...setValue('pt', false), 'pt-px'],
    paddingBottom: [...setValue('pb', false), 'pb-px'],
    paddingLeft: [...setValue('pl', false), 'pl-px'],
    paddingRight: [...setValue('pr', false), 'pr-px'],
    paddingInlineStart: [...setValue('ps', false), 'ps-px'],
    paddingInlineEnd: [...setValue('pe', false), 'pe-px'],
    spacingx: [...setValue('space-x', false), 'space-x-px', 'space-x-reverse'],
    spacingy: [...setValue('space-y', false), 'space-y-py', 'space-y-reverse'],
    marginTop: [...setValue('mt', true), 'mt-auto'],
    marginBottom: [...setValue('mb', true), 'mb-auto'],
    marginLeft: [...setValue('ml', true), 'ml-auto'],
    marginRight: [...setValue('mr', true), 'mr-auto'],
    marginInlineStart: [...setValue('ms', true), 'ms-auto'],
    marginInlineEnd: [...setValue('me', true), 'me-auto'],
    mauto: ['m-auto'],
    borderType: [
        'border-solid',
        'border-dashed',
        'border-dotted',
        'border-double',
        'border-hidden',
        'border-none'
    ],
    positionelement: [
        { label: 'static', value: 'static' },
        { label: 'fixed', value: 'fixed' },
        { label: 'absolute', value: 'absolute' },
        { label: 'relative', value: 'relative' },
        { label: 'sticky', value: 'sticky' },
        { label: 'modal', value: 'modal' },
    ],
    positionTop: [...setValue('top'), 'top-px'],
    positionLeft: [...setValue('left'), 'left-px'],
    positionBottom: [...setValue('bottom'), 'bottom-px'],
    positionRight: [...setValue('right'), 'right-px'],

    positionInset: [
        'inset-px',
        ...setValue('inset'),
    ],

    positionInsetStart: [
        'start-px',
        ...setValue('start'),
    ],

    positionInsetEnd: [
        'end-px',
        ...setValue('end'),
    ],
    positionInsetPx: [
        'inset-x-px',
        ...setValue('inset-x'),
    ],
    positionInsetPy: [
        'inset-y-px',
        ...setValue('inset-y'),
    ],
    objectfit: [
        'object-contain',
        'object-cover',
        'object-fill',
        'object-none',
        'object-scale'
    ],
    objectposition: [
        "object-bottom",
        "object-center",
        "object-left",
        "object-left-bottom",
        "object-left-top",
        "object-right",
        "object-right-bottom",
        "object-right-top",
        "object-top"
    ],
    overflow: [
        'overflow-auto',
        'overflow-hidden',
        'overflow-clip',
        'overflow-visible',
        'overflow-scroll',
        'overflow-x-auto',
        'overflow-y-auto',
        'overflow-x-hidden',
        'overflow-y-hidden',
        'overflow-x-clip',
        'overflow-y-clip',
        'overflow-x-visible',
        'overflow-y-visible',
        'overflow-x-scroll',
        'overflow-y-scroll'
    ],
    overscroll: [
        "overscroll-auto",
        "overscroll-contain",
        "overscroll-none",
        "overscroll-y-auto",
        "overscroll-y-contain",
        "overscroll-y-none",
        "overscroll-x-auto",
        "overscroll-x-contain",
        "overscroll-x-none"
    ],
    visibility: [
        { label: 'visible', value: 'visible' },
        { label: 'invisible', value: 'invisible' },
        { label: 'collapse', value: 'collapse' },
    ],

    rotate: [
        'rotate-0',
        'rotate-1',
        'rotate-2',
        'rotate-3',
        'rotate-6',
        'rotate-12',
        'rotate-45',
        'rotate-90',
        'rotate-180',
        '-rotate-0',
        '-rotate-1',
        '-rotate-2',
        '-rotate-3',
        '-rotate-6',
        '-rotate-12',
        '-rotate-45',
        '-rotate-90',
        '-rotate-180',
    ],
    skewx: [
        'skew-x-0',
        'skew-x-1',
        'skew-x-2',
        'skew-x-3',
        'skew-x-6',
        'skew-x-12',
        '-skew-x-0',
        '-skew-x-1',
        '-skew-x-2',
        '-skew-x-3',
        '-skew-x-6',
        '-skew-x-12',
    ],
    skewy: [
        'skew-y-0',
        'skew-y-1',
        'skew-y-2',
        'skew-y-3',
        'skew-y-6',
        'skew-y-12',
        '-skew-y-0',
        '-skew-y-1',
        '-skew-y-2',
        '-skew-y-3',
        '-skew-y-6',
        '-skew-y-12',
    ],
    rotate3D: [
        'perspective-rotate3dX',
        'perspective-rotate3dX-inverse',
        'perspective-rotate3dY',
        'perspective-rotate3dY-inverse',
    ],
    roundedtl: [
        { label: 'none', value: 'rounded-tl-none' },
        { label: 'sm', value: 'rounded-tl-sm' },
        { label: 'rounded', value: 'rounded-tl' },
        { label: 'md', value: 'rounded-tl-md' },
        { label: 'lg', value: 'rounded-tl-lg' },
        { label: 'xl', value: 'rounded-tl-xl' },
        { label: '2xl', value: 'rounded-tl-2xl' },
        { label: '3xl', value: 'rounded-tl-3xl' },
        { label: '3xl', value: 'rounded-tl-3xl' },
        { label: 'full', value: 'rounded-tl-full' }
    ],
    roundedtr: [
        { label: 'none', value: 'rounded-tr-none' },
        { label: 'sm', value: 'rounded-tr-sm' },
        { label: 'rounded', value: 'rounded-tr' },
        { label: 'md', value: 'rounded-tr-md' },
        { label: 'lg', value: 'rounded-tr-lg' },
        { label: 'xl', value: 'rounded-tr-xl' },
        { label: '2xl', value: 'rounded-tr-2xl' },
        { label: '3xl', value: 'rounded-tr-3xl' },
        { label: '3xl', value: 'rounded-tr-3xl' },
        { label: 'full', value: 'rounded-tr-full' },
    ],
    roundedbl: [
        { label: 'none', value: 'rounded-bl-none' },
        { label: 'sm', value: 'rounded-bl-sm' },
        { label: 'rounded', value: 'rounded-bl' },
        { label: 'md', value: 'rounded-bl-md' },
        { label: 'lg', value: 'rounded-bl-lg' },
        { label: 'xl', value: 'rounded-bl-xl' },
        { label: '2xl', value: 'rounded-bl-2xl' },
        { label: '3xl', value: 'rounded-bl-3xl' },
        { label: '3xl', value: 'rounded-bl-3xl' },
        { label: 'full', value: 'rounded-bl-full' },
    ],
    roundedbr: [
        { label: 'none', value: 'rounded-br-none' },
        { label: 'sm', value: 'rounded-br-sm' },
        { label: 'rounded', value: 'rounded-br' },
        { label: 'md', value: 'rounded-br-md' },
        { label: 'lg', value: 'rounded-br-lg' },
        { label: 'xl', value: 'rounded-br-xl' },
        { label: '2xl', value: 'rounded-br-2xl' },
        { label: '3xl', value: 'rounded-br-3xl' },
        { label: '3xl', value: 'rounded-br-3xl' },
        { label: 'full', value: 'rounded-br-full' },
    ],
    shadow: [
        'shadow-none',
        'shadow',
        'shadow-xs',
        'shadow-sm',
        'shadow-md',
        'shadow-lg',
        'shadow-xl',
        'shadow-2xl',
        'shadow-inner'
    ],
    shadowcolor: setColors('shadow'),
    mixblendmode: [
        'mix-blend-normal',
        'mix-blend-multiply',
        'mix-blend-screen',
        'mix-blend-overlay',
        'mix-blend-darken',
        'mix-blend-lighten',
        'mix-blend-color-dodge',
        'mix-blend-color-burn',
        'mix-blend-hard-light',
        'mix-blend-soft-light',
        'mix-blend-difference',
        'mix-blend-exclusion',
        'mix-blend-hue',
        'mix-blend-saturation',
        'mix-blend-color',
        'mix-blend-luminosity',
        'mix-blend-plus-lighter'
    ],
    bgblendmode: [
        "bg-blend-normal",
        "bg-blend-multiply",
        "bg-blend-screen",
        "bg-blend-overlay",
        "bg-blend-darken",
        "bg-blend-lighten",
        "bg-blend-color-dodge",
        "bg-blend-color-burn",
        "bg-blend-hard-light",
        "bg-blend-soft-light",
        "bg-blend-difference",
        "bg-blend-exclusion",
        "bg-blend-hue",
        "bg-blend-saturation",
        "bg-blend-color",
        "bg-blend-luminosity"
    ],
    grayscale: [{
        label: 'none', value: 'grayscale-0'
    }, {
        label: 'grayscale', value: 'grayscale'
    }],
    animation: [
        'animate-none',
        'animate-ping',
        'animate-bounce',
        'animate-spin',
        'animate-pulse',
        'animate-slidein',
        'animate-slideout'
    ],
    clipPath: [
        { label: 'diagonal', value: 'clip-path-diagonal' },
        { label: 'diagonal inverse', value: 'clip-path-diagonal-reverse' },
        { label: 'angle left', value: 'clip-path-angle-left' },
        { label: 'angle right', value: 'clip-path-angle-right' },
        { label: 'arrow left', value: 'clip-path-arrow-left' },
        { label: 'arrow right', value: 'clip-path-arrow-right' },
        { label: 'triangle', value: 'clip-path-triangle' },
        { label: 'circle', value: 'clip-path-circle' },
        { label: 'tag down', value: 'clip-path-tag-down' },
        { label: 'trapezoid left', value: 'clip-path-trapezoid-left' },
        { label: 'trapezoid right', value: 'clip-path-trapezoid-right' },
        { label: 'rombus', value: 'clip-path-rombus' },
        { label: 'parallelogram', value: 'clip-path-parallelogram' },
        { label: 'parallelogram inverse', value: 'clip-path-parallelogram-inverse' },
        { label: 'frame', value: 'clip-path-frame' },
        { label: 'cross', value: 'clip-path-cross' },
        { label: 'stairs', value: 'clip-path-stairs' },
        { label: 'stairs 2', value: 'clip-path-stairs-2' }
    ],
    transition: [
        'transition-none',
        'transition-all',
        'transition',
        'transition-colors',
        'transition-opacity',
        'transition-shadow',
        'transition-transform'
    ],
    transitionDuration: [
        'duration-75',
        'duration-100',
        'duration-150',
        'duration-200',
        'duration-300',
        'duration-500',
        'duration-700',
        'duration-1000'
    ],
    transitionTiming: [
        'ease-linear',
        'ease-in',
        'ease-out',
        'ease-in-out'
    ],
    transitionDelay: [
        'delay-75',
        'delay-100',
        'delay-150',
        'delay-200',
        'delay-300',
        'delay-500',
        'delay-700',
        'delay-1000'
    ],
    blur: [
        {
            label: 'none', value: 'blur-none',
        },
        {
            label: 'sm', value: 'blur-sm',
        },
        {
            label: 'normal', value: 'blur'
        },
        {
            label: 'md', value: 'blur-md'
        },
        {
            label: 'lg', value: 'blur-lg'
        },
        {
            label: 'xl', value: 'blur-xl',
        },
        {
            label: '2xl', value: 'blur-2xl',
        },
        {
            label: '3xl', value: 'blur-3xl',
        }
    ],
    brightness: [
        'brightness-0',
        'brightness-50',
        'brightness-75',
        'brightness-90',
        'brightness-95',
        'brightness-100',
        'brightness-105',
        'brightness-110',
        'brightness-125',
        'brightness-150',
        'brightness-200'
    ],
    contrast: [
        'contrast-0',
        'contrast-50',
        'contrast-75',
        'contrast-100',
        'contrast-125',
        'contrast-150',
        'contrast-200'
    ],
    dropshadow: [
        {
            label: 'drop shadow', value: 'drop-shadow-none',
        },
        {
            label: 'drop shadow sm', value: 'drop-shadow-sm',
        },
        {
            label: 'drop shadow', value: 'drop-shadow'
        },
        {
            label: 'drop shadow md', value: 'drop-shadow-md'
        },
        {
            label: 'drop shadow lg', value: 'drop-shadow-lg'
        },
        {
            label: 'drop shadow xl', value: 'drop-shadow-xl',
        },
        {
            label: 'drop shadow 2xl', value: 'drop-shadow-2xl',
        }
    ],
    huerotate: [
        'hue-rotate-0',
        'hue-rotate-15',
        'hue-rotate-30',
        'hue-rotate-60',
        'hue-rotate-90',
        'hue-rotate-180'
    ],
    invert: [
        {
            label: 'none', value: 'invert-0',
        }, {
            label: 'invert', value: 'invert'
        }
    ],
    saturation: [
        'saturation-0',
        'saturation-50',
        'saturation-100',
        'saturation-150',
        'saturation-200'
    ],
    sepia: [
        {
            label: 'none', value: 'sepia-0',
        }, {
            label: 'sepia', value: 'sepia'
        }
    ],

    backdropblur: [
        {
            label: 'backdrop blur none', value: 'backdrop-blur-none',
        },
        {
            label: 'backdrop blur sm', value: 'backdrop-blur-sm',
        },
        {
            label: 'backdrop blur', value: 'backdrop-blur'
        },
        {
            label: 'backdrop blur md', value: 'backdrop-blur-md'
        },
        {
            label: 'backdrop blur lg', value: 'backdrop-blur-lg'
        },
        {
            label: 'backdrop blur xl', value: 'backdrop-blur-xl',
        },
        {
            label: 'backdrop blur 2xl', value: 'backdrop-blur-2xl',
        }
    ],
    backdropbrightness: [
        'backdrop-brightness-0',
        'backdrop-brightness-50',
        'backdrop-brightness-75',
        'backdrop-brightness-90',
        'backdrop-brightness-95',
        'backdrop-brightness-100',
        'backdrop-brightness-105',
        'backdrop-brightness-110',
        'backdrop-brightness-125',
        'backdrop-brightness-150',
        'backdrop-brightness-200'
    ],
    backdropcontrast: [
        'backdrop-contrast-0',
        'backdrop-contrast-50',
        'backdrop-contrast-75',
        'backdrop-contrast-100',
        'backdrop-contrast-125',
        'backdrop-contrast-150',
        'backdrop-contrast-200'
    ],
    backdropgrayscale: [
        'backdrop-grayscale',
        'backdrop-grayscale-0',
    ],
    backdrophuerotate: [
        'backdrop-hue-rotate-0',
        'backdrop-hue-rotate-15',
        'backdrop-hue-rotate-30',
        'backdrop-hue-rotate-60',
        'backdrop-hue-rotate-90',
        'backdrop-hue-rotate-180'
    ],
    backdropinvert: [
        'backdrop-invert',
        'backdrop-invert-0'
    ],
    backdropopacity: [
        'backdrop-opacity-0',
        'backdrop-opacity-5',
        'backdrop-opacity-10',
        'backdrop-opacity-15',
        'backdrop-opacity-20',
        'backdrop-opacity-25',
        'backdrop-opacity-30',
        'backdrop-opacity-40',
        'backdrop-opacity-50',
        'backdrop-opacity-60',
        'backdrop-opacity-70',
        'backdrop-opacity-75',
        'backdrop-opacity-80',
        'backdrop-opacity-90',
        'backdrop-opacity-95',
        'backdrop-opacity-100',
        'backdrop-opacity-105',
        'backdrop-opacity-110',
        'backdrop-opacity-125',
        'backdrop-opacity-150',
        'backdrop-opacity-200'
    ],
    backdropsaturate: [
        'backdrop-saturate-0',
        'backdrop-saturate-50',
        'backdrop-saturate-100',
        'backdrop-saturate-125',
        'backdrop-saturate-150',
        'backdrop-saturate-200'
    ],
    backdropsepia: [
        'backdrop-sepia',
        'backdrop-sepia-0'
    ],
    bordercollapse: [
        'border-collapse',
        'border-separate'
    ],
    borderspacing: [...setValue('border-spacing', false), 'border-spacing-px', ...setValue('border-spacing-x', false), 'border-spacing-x-px', ...setValue('border-spacing-y', false), 'border-spacing-y-px'],
    tablelayout: [
        'table-auto',
        'table-fixed'
    ],
    captionside: [
        'caption-top',
        'caption-bottom'
    ],
    scale: [
        'slace-0',
        'scale-50',
        'scale-75',
        'scale-90',
        'scale-95',
        'scale-100',
        'scale-105',
        'scale-110',
        'scale-125',
        'scale-150',
    ],
    scalex: [
        'scale-x-0', 'scale-x-50', 'scale-x-75', 'scale-x-90', 'scale-x-95', 'scale-x-100', 'scale-x-105', 'scale-x-110', 'scale-x-125', 'scale-x-150',
    ],
    scaley: [
        'scale-y-0', 'scale-y-50', 'scale-y-75', 'scale-y-90', 'scale-y-95', 'scale-y-100', 'scale-y-105', 'scale-y-110', 'scale-y-125', 'scale-x-150',
    ],
    translatex: [...setValue('translate-x'), 'translate-x-full', 'translate-x-1/2',
        'translate-x-1/3',
        'translate-x-2/3',
        'translate-x-1/4',
        'translate-x-2/4',
        'translate-x-3/4'
    ],
    translatey: [...setValue('translate-y'), 'translate-y-full', 'translate-y-1/2',
        'translate-y-1/3',
        'translate-y-2/3',
        'translate-y-1/4',
        'translate-y-2/4',
        'translate-y-3/4'
    ],
    transformorigin: [
        'origin-center',
        'origin-top',
        'origin-top-right',
        'origin-right',
        'origin-bottom-right',
        'origin-bottom',
        'origin-bottom-left',
        'origin-left',
        'origin-top-left'
    ],
    willchange: [
        'will-change-auto',
        'will-change-scroll',
        'will-change-contents',
        'will-change-transform'
    ],
    userselect: [
        'select-none',
        'select-text',
        'select-all',
        'select-auto'
    ],
    touchaction: [
        'touch-auto',
        'touch-none',
        'touch-pan-x',
        'touch-pan-left',
        'touch-pan-right',
        'touch-pan-y',
        'touch-pan-up',
        'touch-pan-down',
        'touch-pinch-zoom',
        'touch-manipulation'
    ],
    scrollsnaptype: [
        'snap-none',
        'snap-x',
        'snap-y',
        'snap-both',
        'snap-mandatory',
        'snap-proximity'
    ],
    scrollsnapstop: [
        'snap-normal',
        'snap-always'
    ],
    scrollsnapalign: [
        'snap-start',
        'snap-end',
        'snap-center',
        'snap-align-none'
    ],
    scrollsnappaddingTop: [...setValue('scroll-pt', false), 'scroll-pt-px'],
    scrollsnappaddingBottom: [...setValue('scroll-pb', false), 'scroll-pb-px'],
    scrollsnappaddingLeft: [...setValue('scroll-pl', false), 'scroll-pl-px'],
    scrollsnappaddingRight: [...setValue('scroll-pr', false), 'scroll-pr-px'],
    scrollsnapmarginTop: [...setValue('scroll-mt', true), 'scroll-auto'],
    scrollsnapmarginBottom: [...setValue('scroll-mb', true), 'scroll-auto'],
    scrollsnapmarginLeft: [...setValue('scroll-ml', true), 'scroll-auto'],
    scrollsnapmarginRight: [...setValue('scroll-mr', true), 'scroll-auto'],
    scrollbehavior: [
        'scroll-auto',
        'scroll-smooth'
    ],
    resize: [
        {
            label: 'resize none', value: 'resize-none',
        },
        {
            label: 'resize x', value: 'resize-x',
        },
        {
            label: 'resize y', value: 'resize-y',
        },
        {
            label: 'resize', value: 'resize',
        },
    ],
    pointerevent: [
        {
            label: 'none', value: 'pointer-events-none',
        },
        {
            label: 'auto', value: 'pointer-events-auto',
        }
    ],
    caretcolor: setColors('caret'),
    cursor: [
        'cursor-auto',
        'cursor-default',
        'cursor-pointer',
        'cursor-wait',
        'cursor-text',
        'cursor-move',
        'cursor-help',
        'cursor-not-allowed',
        'cursor-none',
        'cursor-context-menu',
        'cursor-progress',
        'cursor-cell',
        'cursor-crosshair',
        'cursor-vertical-text',
        'cursor-alias',
        'cursor-copy',
        'cursor-no-drop',
        'cursor-grab',
        'cursor-grabbing',
        'cursor-all-scroll',
        'cursor-col-resize',
        'cursor-row-resize',
        'cursor-n-resize',
        'cursor-e-resize',
        'cursor-s-resize',
        'cursor-w-resize',
        'cursor-ne-resize',
        'cursor-nw-resize',
        'cursor-se-resize',
        'cursor-sw-resize',
        'cursor-ew-resize',
        'cursor-ns-resize',
        'cursor-nesw-resize',
        'cursor-nwse-resize',
        'cursor-zoom-in',
        'cursor-zoom-out'
    ],
    apparence: [
        'apparence',
        'appearance-none'
    ],
    accent: setColors('accent'),
    radius: [
        'none',
        'full',
        'sm',
        'base',

    ]
}

export const flattenClasses = () => {
    const flatClasses = [];

    for (const category in classes) {
        if (classes.hasOwnProperty(category)) {
            const categoryClasses = classes[category];

            categoryClasses.forEach((classItem) => {
                let ctx = category;
                if (ctx == 'textClass') {
                    ctx = 'textcolor';
                }
                if (ctx == 'colorClass') {
                    ctx = 'bgcolor';
                }
                if (ctx == 'textHoverClass') {
                    ctx = 'textcolorover';
                }
                if (ctx == 'colorHoverClass') {
                    ctx = 'bgcolorover';
                }
                if (typeof classItem === 'string' && ctx != 'colors') {

                    flatClasses.push({ attr: ctx, value: classItem });
                } else {
                    flatClasses.push({ attr: ctx, value: classItem.value });
                }
            });
        }
    }

    return flatClasses;
};
export function searchClass(classes, value) {
    const regex = new RegExp(`\\b${value}\\b`);
    const matchingClasses = classes.filter((cls) => regex.test(cls.value));
    return matchingClasses;
}

export default classes

