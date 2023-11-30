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
        'container-none',
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
    semantics: ['article', 'aside', 'details', 'div', 'figcaption', 'figure', 'footer', 'form', 'header', 'hero', 'label', 'main', 'mark', 'nav', 'product', 'section', 'span', 'summary', 'time'],
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
        "normal-nums",
        "ordinal",
        "slashed-zero",
        "lining-nums",
        "oldstyle-nums",
        "proportional-nums",
        "tabular-nums",
        "diagonal-fractions",
        "stacked-fractions"
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
    textindent:[...setValue('indent',false),'indent-px'],
    verticalalign:['align-baseline','align-top','align-middle','align-bottom','align-text-top','align-text-bottom','align-sub','align-super'],
    whitespace: ['whitespace-normal','whitespace-nowrap','whitespace-pre','whitespace-per-line','whitespace-pre-wrap','whitespace-per-line-wrap','whitespace-break-spaces'],
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
    gap: [...setValue('gap',false), 'gap-px', ...setValue('gap-x'), 'gap-x-px', ...setValue('gap-y'), 'gap-y-px'],
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
    bordercolor: setColors('border'),
    border: [
        'border',
        'border-2',
        'border-4',
        'border-8'
    ],
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
    padding: [...setValue('p', false), 'px'],
    paddingTop: [...setValue('pt', false), 'px'],
    paddingBottom: [...setValue('pb', false), 'px'],
    paddingLeft: [...setValue('pl', false), 'px'],
    paddingRight: [...setValue('pr', false), 'px'],
    paddingInlineStart: [...setValue('ps', false), 'px'],
    paddingInlineEnd: [...setValue('pe', false), 'px'],
    spacing: setPercs('p'),
    spacingTop: setPercs('pt'),
    spacingBottom: setPercs('pb'),
    spacingLeft: setPercs('pl'),
    spacingRight: setPercs('pr'),
    margin: [...setValue('m', true), 'auto'],
    marginTop: [...setValue('mt', true), 'auto'],
    marginBottom: [...setValue('mb', true), 'auto'],
    marginLeft: [...setValue('ml', true), 'auto'],
    marginRight: [...setValue('mr', true), 'auto'],
    marginInlineStart: [...setValue('ms', true), 'auto'],
    marginInlineEnd: [...setValue('me', true), 'auto'],
    mauto: ['m-auto'],
    borderType: [
        'border-solid',
        'border-dashed',
        'border-dotted',
        'border-double',
        'border-none'
    ],
    positionelement: [
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
        'modal'
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
    skewX: [
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
    skewY: [
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
    rounded: [
        'rounded-none',
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-3xl',
        'rounded-full'
    ],
    shadow: [
        'shadow',
        'shadow-xs',
        'shadow-sm',
        'shadow-md',
        'shadow-lg',
        'shadow-xl',
        'shadow-2xl'
    ],
    grayscale: ['grayscale'],
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

}

export default classes