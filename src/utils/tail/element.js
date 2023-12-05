"use strict";

export default class Element {
    constructor() {
        this.id = this.randomID()
        this.blocks = []
        this.css = {
            css: "",
            container: "",
        }
        this.cssObject={
            base: null,
            xxl:null,
            xl: null,
            lg: null,
            md: null,
            sm: null,
            xs: null
        },
        this.tailwind = {}
        this.font = ""
        this.style = ""
        this.content = ""
        this.description = ""
        this.categories = []
        this.data = {
          
        }
        this.link = ''
        this.anchor = ''
        this.image = {
            url: null
        }
        this.type = 'element'
        this.tag = 'element'
        this.editable = false
        this.icon = 'highlight_alt'
        this.helper = null
    }

    randomID() {
        return 'tail-editor-' + Math.random().toString(36).substr(2, 5)
    }

    Groups() {
        return [
            {
                label: 'main',
                elements:[
                    {
                        id: 'heading',
                        name: 'Heading',
                        icon: 'title',
                    },
                    {
                        id: 'paragraph',
                        name: 'Paragraph',
                        icon: 'subject'
                    },
                    {
                        id: 'inlinetext',
                        name: 'Inline Text',
                        icon: 'text_format'
                    },
                    {
                        id: 'span',
                        name: 'Span',
                        icon: 'text_format'
                    },
                    {
                        id: 'blockquote',
                        name: 'Blockquote',
                        icon: 'text_format'
                    },
                    {
                        id: 'code',
                        name: 'Code',
                        icon: 'code'
                    },
                    {
                        id: 'link',
                        name: 'Link',
                        icon: 'link'
                    },
                    {
                        id: 'image',
                        name: 'Image',
                        icon: 'insert_photo'
                    },
                    {
                        id: 'video',
                        name: 'Video',
                        icon: 'movie'
                    },
                    {
                        id: 'youtube',
                        name: 'Youtube',
                        icon: 'movie'
                    },

                    {
                        id: 'download',
                        name: 'Download',
                        icon: 'download'
                    }
                ]
            },
            {

                label: 'containers',
                elements: [
                    {
                        id: 'grid',
                        name: 'Grid',
                        icon: 'grid_on'
                    },
                    {
                        id: 'flexbox',
                        name: 'Flexbox',
                        icon: 'highlight_alt'
                    },
                    {
                        id: 'emptycontainer',
                        name: 'Empty Container',
                        icon: 'highlight_alt'
                    },
                    {
                        id: 'containerwith2div',
                        name: 'Container With 2 Div',
                        icon: 'highlight_alt'
                    },
                    {
                        id: 'containerwith2divunequalsdivs',
                        name: 'Container With 2 Div unequals divs',
                        icon: 'highlight_alt'
                    },
                    {
                        id: 'ul',
                        name: 'List',
                        icon: 'ul'
                    },
                    {
                        id: 'li',
                        name: 'UnOrdered List item',
                        icon: 'li'
                    },
                    {
                        id: 'ol',
                        name: 'Ordered List item',
                        icon: 'ol'
                    },

                ],
            },
            {
                label: 'form',
                elements: [
                    {
                        id: 'form',
                        name: 'Form',
                        icon: 'call_to_action'
                    },
                    {
                        id: 'inputtext',
                        name: 'Input Text',
                        icon: 'input'
                    },
                    {
                        id: 'email',
                        name: 'Email',
                        icon: 'email'
                    },
                    {
                        id: 'hidden',
                        name: 'Hidden',
                        icon: 'input'
                    },
                    {
                        id: 'number',
                        name: 'Number',
                        icon: 'input'
                    },
                    {
                        id: 'checkbox',
                        name: 'Checkbox',
                        icon: 'check_box'
                    },
                    {
                        id: 'textarea',
                        name: 'Textarea',
                        icon: 'text_format'
                    },
                    {
                        id: 'submit',
                        name: 'Submit',
                        icon: 'smart_button'
                    },
                    {
                        id: 'reset',
                        name: 'Reset',
                        icon: 'smart_button'
                    },
                    {
                        id: 'button',
                        name: 'Button',
                        icon: 'smart_button'
                    }
                ]
            },
            {
                label: 'Tables',
                elements: []
            }
        ]
    }


    createElement(element, options) {
        return element === 'grid' ? this.Grid(options) :
            element === 'flexbox' ? this.Flexbox(options) :
                element === 'heading' ? this.Heading(options) :
                    element === 'paragraph' ? this.Paragraph() :
                        element === 'inlinetext' ? this.InlineText() :
                            element === 'Sspan' ? this.Span() :
                                element === 'blockquote' ? this.Blockquote() :
                                    element === 'code' ? this.Code() :
                                        element === 'image' ? this.Image() :
                                            element === 'video' ? this.Video() :
                                                    element === 'youtube' ? this.YTVideo() :
                                                                    element === 'download' ? this.Download() :
                                                                        element === 'form' ? this.Form() :
                                                                            element === 'inputtext' ? this.InputText() :
                                                                                element === 'email' ? this.InputEmail() :
                                                                                    element === 'textarea' ? this.InputTextarea() :
                                                                                        element === 'checkbox' ? this.InputCheckbox() :
                                                                                            element === 'number' ? this.InputNumber() :
                                                                                                element === 'hidden' ? this.InputHidden() :
                                                                                                    element === 'submit' ? this.InputSubmit() :
                                                                                                        element === 'reset' ? this.InputReset() :
                                                                                                            element === 'button' ? this.Button() :
                                                                                                                element === 'emptycontainer' ? this.EmptyContainer(options) :
                                                                                                                    element === 'containerwith2div' ? this.ContainerWith2Div(options) :
                                                                                                                        element === 'containerwith2divunequalsdivs' ? this.ContainerWith2DivUnequalsDivs(options) :
                                                                                                                            element === 'ul' ? this.Ul(options) :
                                                                                                                                element === 'li' ? this.Li(options) :
                                                                                                                                    element === 'ol' ? this.Ol(options) :
                                                                                                                                    element === 'link' ? this.Link(options) : null
    }

    setIcon(icon) {
        this.icon = icon
        return this
    }

    setTag(tag) {
        this.tag = tag
        return this
    }

    setCss(css) {
        this.css.css = css
        return this
    }

    setContent(content) {
        this.content = content
        return this
    }

    setImage(image) {
        this.image = image
        return this
    }

    setSemantic(semantic) {
        this.semantic = semantic
        return this
    }



    Grid() {
        this.blocks = []
        this.type = 'container'
        this.tag = 'grid'
        this.css.css = 'grid'
        this.element = 'div'
        this.cssObject = {
            base:{
                display: 'grid'
            },
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        return this
    }



    Cols(cols = 1) {
        this.css.container += ' md:grid-cols-' + cols
        // for ( let n=0; n < cols ; n++){
        //     this.blocks.push ( new Element().Flexbox() )
        // }       
        return this
    }

    Flexbox(options = { direction: null, colspan: null }) {
        this.blocks = []
        this.type = 'container'
        this.tag = 'flex'
        this.css.css = 'flex'
        this.cssObject = {
            base:{
                flex: 'flex',
                flexdirection: options.direction ? ' flex-' + options.direction : 'flex-row',
                colspan: options.colspan ? ' col-span-' + options.colspan : ''
            },
            lg: null,
            md: null,
            sm: null,
            xs: null
        },
        this.css.css += options.direction ? ' flex-' + options.direction : ''
        this.css.css += options.colspan ? ' col-span-' + options.colspan : ''
        this.element = 'div'
        return this
    }
    EmptyContainer(options = { direction: null, colspan: null }) {
        this.id= this.randomID()
        this.blocks = []
        this.type = 'container'
        this.css.css = 'flex w-full h-80 justify-center items-center'
        this.tag = 'flex'
        this.cssObject = {
            base:{
                flex: 'flex',
                w: 'w-full',
                h: 'h-80',
                justifycenter: 'justify-center',
                itemscenter: 'items-center'
            },
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        this.element = 'div'
        this.content = 'Container with preset height of 20rem (h-80) and item centered. Drag elements from the left sidebar into this container'
        return this
    }


    ContainerWith2Div(options = { direction: null, colspan: null }) {
        this.id= this.randomID()
        this.blocks = [{
            id:this.randomID(),
            type:'container',
            css:{
                css:'flex w-full h-full justify-center items-center md:w-1/2'
            },
            tag:'flex',
            cssObject:{
                base:{
                    flex: 'flex',
                    w: 'w-full',
                    h: 'h-full',
                    justifycenter: 'justify-center',
                    itemscenter: 'items-center'
                },
                lg: null,
                md: {
                    w: 'md:w-1/2'
                },
                sm: null,
                xs: null
            },
            element: 'div',
            content: 'Content 1'
        },{
            id:this.randomID(),
            type:'container',
            css:{
                css:'flex w-full h-full justify-center items-center md:w-1/2'
            },
            tag:'flex',
            cssObject:{
                base:{
                    flex: 'flex',
                    w: 'w-full',
                    h: 'h-full',
                    justifycenter: 'justify-center',
                    itemscenter: 'items-center'
                },
                lg: null,
                md: {
                    w: 'md:w-1/2'
                },
                sm: null,
                xs: null
            },
            element: 'div',
            content: 'Content 2'
        }]
        this.type = 'container'
        this.css.css = 'flex w-full h-80 justify-center items-center mt-0 mr-auto mb-0 ml-auto flex-wrap'
        this.tag = 'flex'
        this.cssObject = {
            base:{
                flex: 'flex',
                w: 'w-full',
                h: 'h-80',
                mt: 'mt-0',
                mr: 'mr-auto',
                mb: 'mb-0',
                ml: 'ml-auto',
                flexWrap: 'flex-wrap',
                justifycenter: 'justify-center',
                itemscenter: 'items-center'
            },
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        this.element = 'div'
        //this.content = 'Container with preset height of 20rem (h-80) and item centered. Drag elements from the left sidebar into this container'
        return this
    }


    ContainerWith2DivUnequalsDivs(options = { direction: null, colspan: null }) {
        this.id = this.randomID()
        this.blocks = [{
            id:this.randomID(),
            type:'container',
            css:{
                css:'flex w-full h-full justify-center items-center md:w-1/3'
            },
            tag:'flex',
            cssObject:{
                base:{
                    flex: 'flex',
                    w: 'w-full',
                    h: 'h-full',
                    justifycenter: 'justify-center',
                    itemscenter: 'items-center'
                },
                lg: null,
                md: {
                    w: 'md:w-1/3'
                },
                sm: null,
                xs: null
            },
            element: 'div',
            content: 'Content 1'
        },{
            id:this.randomID(),
            type:'container',
            css:{
                css:'flex w-full h-full justify-center items-center md:w-2/3'
            },
            tag:'flex',
            cssObject:{
                base:{
                    flex: 'flex',
                    w: 'w-full',
                    h: 'h-full',
                    justifycenter: 'justify-center',
                    itemscenter: 'items-center'
                },
                lg: null,
                md: {
                    w: 'md:w-2/3'
                },
                sm: null,
                xs: null
            },
            element: 'div',
            content: 'Content 2'
        }]
        this.type = 'container'
        this.css.css = 'flex w-full h-80 justify-center items-center mt-0 mr-auto mb-0 ml-auto flex-wrap'
        this.tag = 'flex'
        this.cssObject = {
            base:{
                flex: 'flex',
                w: 'w-full',
                h: 'h-80',
                mt: 'mt-0',
                mr: 'mr-auto',
                mb: 'mb-0',
                ml: 'ml-auto',
                flexWrap: 'flex-wrap',
                justifycenter: 'justify-center',
                itemscenter: 'items-center'
            },
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        this.element = 'div'
        //this.content = 'Container with preset height of 20rem (h-80) and item centered. Drag elements from the left sidebar into this container'
        return this
    }
    Slider() {
        this.blocks = []
        this.type = 'slider'
        this.tag = 'flex'
        this.element = 'slider'
        this.label = 'Slider'
        this.icon = 'video_library'
        this.css.css = 'w-full h-1/3'
        this.css.container = 'flex flex-col'
        return this
    }

    Heading(level = 1) {
        this.level = level
        this.element = 'h'
        this.content = 'Heading ' + level
        this.icon = 'title'
        this.editable = true
        this.dialog = 'md:w-40'
        return this
    }

    Paragraph() {
        this.element = 'p'
        this.label = 'Rich Text'
        this.icon = 'subject'
        this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Imperdiet massa tincidunt nunc pulvinar.'
        this.editable = true
        return this
    }

    InlineText() {
        this.element = 'div'
        this.label = 'Inline text'
        this.icon = 'text_snippet'
        this.content = 'Inline text'
        this.editable = true
        return this
    }

    Span() {
        this.element = 'span'
        this.label = 'Span'
        this.icon = 'text_format'
        this.content = 'Simple text'
        this.editable = true
        return this
    }

    Blockquote() {
        this.element = 'blockquote'
        this.content = 'This is a quote'
        this.editable = true
        return this
    }

    Code() {
        this.element = 'pre'
        this.content = 'Code goes here'
        this.editable = true
        return this
    }

    Image() {
        this.element = 'img'
        this.label = 'Image'
        this.icon = 'insert_photo'
        this.content = ''
        this.css.css = 'w-40 h-auto'
        return this
    }



    Video() {
        this.element = 'video'
        this.label = 'Video'
        this.icon = 'movie'
        this.content = ''
        this.type = 'video'
        this.src = ''
        this.options = {
            controls: true,
            autoplay: true,
            loop: true
        }
        return this
    }

    YTVideo() {
        this.src = "https://youtube.com/embed/"
        this.label = 'Youtube Video'
        this.type = 'video'
        this.element = 'iframe'
        return this
    }

    VimeoVideo() {
        this.src = "https://player.vimeo.com/video/"
        this.label = 'Vimeo Video'
        this.type = 'video'
        this.element = 'iframe'
        return this
    }

    Icon() {
        this.label = 'Material Icon'
        this.data = { icon: 'home' }
        this.tag = "micon"
        this.css.css = 'text-xl'
        this.content = 'home'
        this.css.container = 'material-icons'
        this.element = 'i'
        return this
    }

    Iconify() {
        this.label = 'Iconify'
        this.data = { icon: 'fa:home' }
        this.tag = "iconify"
        this.css.css = 'text-2xl'
        this.content = ''
        this.css.container = ''
        this.element = 'IconifyIcon'
        return this
    }

    Download() {
        this.label = 'File'
        this.icon = 'download'
        this.content = 'Download'
        this.type = 'file'
        this.tag = 'file'
        this.element = 'button'
        return this
    }

    Form() {
        this.type = 'container'
        this.blocks = []
        this.tag = 'form'
        this.element = 'form'
        this.success = ''
        this.error = ''
        this.action = ''
        return this
    }

    inputElement() {
        this.element = 'input'
        this.css.css = 'input',
            this.cssObject={
                base: {
                    input: 'input',
                },
                xxl:null,
                xl: null,
                lg: null,
                md: null,
                sm: null,
                xs: null
            },
        this.placeholder = ''
        this.content = ''
        this.value = ''
        this.icon = 'input'
        return this
    }

    InputText() {
        this.inputElement()
        this.type = 'text'
        this.tag = 'input'
        this.placeholder = 'Input'
        return this
    }

    InputEmail() {
        this.inputElement()
        this.type = 'email'
        this.tag = 'email'
        this.placeholder = 'Email'
        return this
    }

    InputNumber() {
        this.inputElement()
        this.tag = 'number'
        this.type = 'number'
        return this
    }

    InputHidden() {
        this.inputElement()
        this.tag = 'hidden'
        this.type = 'hidden'
        return this
    }

    InputCheckbox() {
        this.inputElement()
        this.tag = 'checkbox'
        this.type = 'checkbox'
        return this
    }

    InputTextarea() {
        this.element = 'textarea'
        this.tag = 'textarea'
        this.css.css  = 'textarea'
        this.cssObject = {
            textarea: 'textarea'
        }
        this.type = 'textarea'
        this.placeholder = 'type here'
        return this
    }

    InputSubmit() {
        this.element = 'button'
        this.tag = 'submit'
        this.type = 'button'
        this.value = 'Submit'
        this.content = 'Submit'
        return this
    }

    InputReset() {
        this.InputSubmit()
        this.tag = 'reset'
        this.value = 'Reset'
        this.content = 'Reset'
        return this
    }

    Button() {
        this.type = 'button'
        this.element = 'button'
        this.tag = 'button'
        this.css.css = 'btn btn-primary'
        this.cssObject={
            base: {
                btn: 'btn',
                btnPrimary: 'btn-primary',
            },
            xxl:null,
            xl: null,
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        this.content = 'button'
        this.value = 'button'
        return this
    }
    Ul() {
        this.type = 'container'
        this.style = ''
        this.blocks = [{
            id: this.randomID(),
            type:'container',
            blocks:[],
            tag:'element',
            css: {
                css: ''
            },
            style: '',
            cssObject:{
                base:null,
                xxl:null,
                xl: null,
                lg: null,
                md: null,
                sm: null,
                xs: null
            },
            element:'li',
            content:'List item 1'
        },{
            id: this.randomID(),
            type:'container',
            blocks:[],
            tag:'element',
            css: {
                css: ''
            },
            style: '',
            cssObject:{
                base:null,
                xxl:null,
                xl: null,
                lg: null,
                md: null,
                sm: null,
                xs: null
            },
            element:'li',
            content:'List item 2'
        },{
            id: this.randomID(),
            type:'container',
            blocks:[],
            tag:'element',
            css: {
                css: ''
            },
            style: '',
            cssObject:{
                base:null,
                xxl:null,
                xl: null,
                lg: null,
                md: null,
                sm: null,
                xs: null
            },
            element:'li',
            content:'List item 3'
        }]
        this.id= this.randomID()
        this.tag = 'container'
        this.css.css = ''
        this.cssObject={
            base: null,
            xxl:null,
            xl: null,
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        this.element = 'ul'
        this.content = ''
        return this
    }
    Li(){
        this.id=this.randomID()
        this.type='container'
        this.style= ''
        this.blocks=[]
        this.tag='element'
        this.css.css= ''
        this.cssObject={
                base:null,
                xxl:null,
                xl: null,
                lg: null,
                md: null,
                sm: null,
                xs: null
        }
        this.element='li'
        this.content='Unordered list item'
        return this;
    }
    Ol(){
        this.id = this.randomID()
        this.type='container'
        this.style= ''
        this.blocks=[]
        this.tag='element'
        this.css.css= ''
        this.cssObject={
            base:null,
            xxl:null,
            xl: null,
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        this.element='ol'
        this.content='Ordered list item'
        return this;
    }
    Link(){
        console.log('it lets you');
        this.id = this.randomID()
        this.type='element'
        this.style= ''
        this.blocks=[]
        this.tag='element'
        this.css.css= ''
        this.cssObject={
            base:null,
            xxl:null,
            xl: null,
            lg: null,
            md: null,
            sm: null,
            xs: null
        }
        this.element='a'
        this.content='Link'
        return this;
    }

}
