"use strict";

export default class Element {
    constructor() {
        this.id = this.randomID()
        this.title = ''
        this.blocks = []
        this.css = {
            css: "",
            container: "",
        }
        this.cssObject = {
            base: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
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
        this.background ={
            url: null
        }
        this.type = 'element'
        this.tag = 'element'
        this.editable = false
        this.icon = 'highlight_alt'
        this.helper = null
    }

    randomID() {
        return 'windflow-' + Math.random().toString(36).substr(2, 5)
    }

    Groups() {
        return [
            {
                label: 'structure',
                elements: [
                    {
                        id: 'section',
                        name: 'Section',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-opacity="0.15" points="1 3 1 9 11 9 11 3"></polygon><path d="M12,4 L12,8 C12,9.1045695 11.1045695,10 10,10 L2,10 C0.8954305,10 -1.09144673e-11,9.1045695 -1.09139364e-11,8 L-1.09139364e-11,4 C-1.09140717e-11,2.8954305 0.8954305,2 2,2 L10,2 C11.1045695,2 12,2.8954305 12,4 Z M10,3 L2,3 C1.44771525,3 1,3.44771525 1,4 L1,8 C1,8.55228475 1.44771525,9 2,9 L10,9 C10.5522847,9 11,8.55228475 11,8 L11,4 C11,3.44771525 10.5522847,3 10,3 Z" fill-rule="nonzero"></path><path d="M0,11 L12,11 L12,12 L0,12 Z M0,0 L12,0 L12,1 L0,1 Z" fill-opacity="0.5"></path></svg>',
                    },
                    {
                        id: 'container',
                        name: 'Container',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill-opacity="0.15" points="3 1 3 11 9 11 9 1"></polygon><path d="M10,2 L10,10 C10,11.1045695 9.1045695,12 8,12 L4,12 C2.8954305,12 2,11.1045695 2,10 L2,2 C2,0.8954305 2.8954305,-4.63227689e-16 4,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 Z M8,1 L4,1 C3.44771525,1 3,1.44771525 3,2 L3,10 C3,10.5522847 3.44771525,11 4,11 L8,11 C8.55228475,11 9,10.5522847 9,10 L9,2 C9,1.44771525 8.55228475,1 8,1 Z" fill-rule="nonzero"></path><path d="M11,0 L12,0 L12,12 L11,12 Z M0,0 L1,0 L1,12 L0,12 Z" fill-opacity="0.5"></path></svg>',
                    },
                    {
                        id: 'block',
                        name: 'Block',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2.5,1 L9.5,1 C10.3284271,1 11,1.67157288 11,2.5 L11,9.5 C11,10.3284271 10.3284271,11 9.5,11 L2.5,11 C1.67157288,11 1,10.3284271 1,9.5 L1,2.5 C1,1.67157288 1.67157288,1 2.5,1 Z" fill-opacity="0.15"></path><path d="M9.5,0 L2.5,0 C1.11928813,0 0,1.11928813 0,2.5 L0,9.5 C0,10.8807119 1.11928813,12 2.5,12 L9.5,12 C10.8807119,12 12,10.8807119 12,9.5 L12,2.5 C12,1.11928813 10.8807119,0 9.5,0 Z M2.5,1 L9.5,1 C10.3284271,1 11,1.67157288 11,2.5 L11,9.5 C11,10.3284271 10.3284271,11 9.5,11 L2.5,11 C1.67157288,11 1,10.3284271 1,9.5 L1,2.5 C1,1.67157288 1.67157288,1 2.5,1 Z"></path></svg>',
                    },
                    {
                        id: 'separator',
                        name: 'Separator',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0" y="5.5" width="12" height="1"></rect><path d="M11,8 L11,12 L1,12 L1,8 L11,8 Z M11,0 L11,4 L1,4 L1,0 L11,0 Z" opacity="0.15"></path></svg>'
                    },
                    {
                        id: 'columns',
                        name: 'Columns',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10,6.5 C11.1045695,6.5 12,7.3954305 12,8.5 L12,10 C12,11.1045695 11.1045695,12 10,12 L2,12 C0.8954305,12 0,11.1045695 0,10 L0,8.5 C0,7.3954305 0.8954305,6.5 2,6.5 L10,6.5 Z M10,7.5 L2,7.5 C1.44771525,7.5 1,7.94771525 1,8.5 L1,10 C1,10.5522847 1.44771525,11 2,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,8.5 C11,7.94771525 10.5522847,7.5 10,7.5 Z M10,0 C11.1045695,0 12,0.8954305 12,2 L12,3.5 C12,4.6045695 11.1045695,5.5 10,5.5 L2,5.5 C0.8954305,5.5 0,4.6045695 0,3.5 L0,2 C0,0.8954305 0.8954305,0 2,0 L10,0 Z M10,1 L2,1 C1.44771525,1 1,1.44771525 1,2 L1,3.5 C1,4.05228475 1.44771525,4.5 2,4.5 L10,4.5 C10.5522847,4.5 11,4.05228475 11,3.5 L11,2 C11,1.44771525 10.5522847,1 10,1 Z" transform="translate(6, 6) rotate(90) translate(-6, -6)"></path><path d="M10,7.5 L2,7.5 C1.44771525,7.5 1,7.94771525 1,8.5 L1,10 C1,10.5522847 1.44771525,11 2,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,8.5 C11,7.94771525 10.5522847,7.5 10,7.5 Z M10,1 L2,1 C1.44771525,1 1,1.44771525 1,2 L1,3.5 C1,4.05228475 1.44771525,4.5 2,4.5 L10,4.5 C10.5522847,4.5 11,4.05228475 11,3.5 L11,2 C11,1.44771525 10.5522847,1 10,1 Z" fill-opacity="0.15" transform="translate(6, 6) rotate(90) translate(-6, -6)"></path></svg>'
                    },
                    {
                        id: 'rows',
                        name: 'Rows',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10,6.5 C11.1045695,6.5 12,7.3954305 12,8.5 L12,10 C12,11.1045695 11.1045695,12 10,12 L2,12 C0.8954305,12 0,11.1045695 0,10 L0,8.5 C0,7.3954305 0.8954305,6.5 2,6.5 L10,6.5 Z M10,7.5 L2,7.5 C1.44771525,7.5 1,7.94771525 1,8.5 L1,10 C1,10.5522847 1.44771525,11 2,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,8.5 C11,7.94771525 10.5522847,7.5 10,7.5 Z M10,0 C11.1045695,0 12,0.8954305 12,2 L12,3.5 C12,4.6045695 11.1045695,5.5 10,5.5 L2,5.5 C0.8954305,5.5 0,4.6045695 0,3.5 L0,2 C0,0.8954305 0.8954305,0 2,0 L10,0 Z M10,1 L2,1 C1.44771525,1 1,1.44771525 1,2 L1,3.5 C1,4.05228475 1.44771525,4.5 2,4.5 L10,4.5 C10.5522847,4.5 11,4.05228475 11,3.5 L11,2 C11,1.44771525 10.5522847,1 10,1 Z"></path><path d="M10,7.5 L2,7.5 C1.44771525,7.5 1,7.94771525 1,8.5 L1,10 C1,10.5522847 1.44771525,11 2,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,8.5 C11,7.94771525 10.5522847,7.5 10,7.5 Z M10,1 L2,1 C1.44771525,1 1,1.44771525 1,2 L1,3.5 C1,4.05228475 1.44771525,4.5 2,4.5 L10,4.5 C10.5522847,4.5 11,4.05228475 11,3.5 L11,2 C11,1.44771525 10.5522847,1 10,1 Z" fill-opacity="0.15"></path></svg>'
                    }, {
                        id: 'grid',
                        name: 'Grid',
                        icon: '<svg width="12" height="12" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="currentColor" fill-opacity=".15" d="M11 8v3H8V8h3zM5 8v3H2V8h3zm0-6v3H2V2h3zm6 0v3H8V2h3z"></path><path fill="currentColor" d="M12 7v4.5a.5.5 0 01-.5.5H7V7h5zM6 7v5H1.5a.5.5 0 01-.5-.5V7h5zm5 1H8v3h3V8zM5 8H2v3h3V8zm1-7v5H1V1.5a.5.5 0 01.5-.5H6zm5.5 0a.5.5 0 01.5.5V6H7V1h4.5zM5 2H2v3h3V2zm6 0H8v3h3V2z"></path></svg>'
                    }
                ]
            },
            {

                label: 'content',
                elements: [
                    {
                        id: 'heading',
                        name: 'Heading',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2,0 L2,6 L10,6 L10,0 L11,0 L11,12 L10,12 L10,7 L2,7 L2,12 L1,12 L1,0 L2,0 Z"></path></svg>',
                    },
                    {
                        id: 'paragraph',
                        name: 'Paragraph',
                        icon: '<svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0,10 L6,10 L6,11 L0,11 L0,10 Z M0,1 L12,1 L12,2 L0,2 L0,1 Z M0,4 L12,4 L12,5 L0,5 L0,4 Z M0,7 L12,7 L12,8 L0,8 L0,7 Z"></path></svg>'
                    },
                    {
                        id: 'richtext',
                        name: 'RichText',
                        icon: '<svg width="12" height="12" viewBox="0 0 12 12" class="fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect opacity="0.3" x="1" y="1" width="5" height="5"></rect><path d="M5.5,11 C5.77614237,11 6,11.2238576 6,11.5 C6,11.7761424 5.77614237,12 5.5,12 L0.5,12 C0.223857625,12 3.38176876e-17,11.7761424 0,11.5 C-3.38176876e-17,11.2238576 0.223857625,11 0.5,11 L5.5,11 Z M11.5,8 C11.7761424,8 12,8.22385763 12,8.5 C12,8.77614237 11.7761424,9 11.5,9 L0.5,9 C0.223857625,9 3.38176876e-17,8.77614237 0,8.5 C-3.38176876e-17,8.22385763 0.223857625,8 0.5,8 L11.5,8 Z M6,0 C6.55228475,2.78052031e-16 7,0.44771525 7,1 L7,6 C7,6.55228475 6.55228475,7 6,7 L1,7 C0.44771525,7 4.47140469e-16,6.55228475 0,6 L0,1 C-1.78657678e-16,0.44771525 0.44771525,-9.5692398e-18 1,0 L6,0 Z M11.5,5 C11.7761424,5 12,5.22385763 12,5.5 C12,5.77614237 11.7761424,6 11.5,6 L8.5,6 C8.22385763,6 8,5.77614237 8,5.5 C8,5.22385763 8.22385763,5 8.5,5 L11.5,5 Z M4.492,3.915 L1.813,6 L6,6 L6,5.248 L4.492,3.915 Z M6,1 L1,1 L1,5.365 L4.53374238,2.61663017 L6,3.914 L6,1 Z M11.5,2 C11.7761424,2 12,2.22385763 12,2.5 C12,2.77614237 11.7761424,3 11.5,3 L8.5,3 C8.22385763,3 8,2.77614237 8,2.5 C8,2.22385763 8.22385763,2 8.5,2 L11.5,2 Z"></path></svg>'
                    },
                    {
                        id: 'span',
                        name: 'Text',
                        icon: 'text_format'
                    }

                ]
            },
            {
                label: 'Actions',
                elements: [
                    {
                        id: 'button',
                        name: 'Button',
                        icon: 'smart_button'
                    },
                    {
                        id: 'link',
                        name: 'Link',
                        icon: 'smart_link'
                    }, {
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
                        id: 'download',
                        name: 'Download',
                        icon: 'download'
                    }
                ]
            },
            {

                label: 'Media',
                elements: [
                    {
                        id: 'iconify',
                        name: 'Icon',
                        icon: 'iconify'
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
                        id: 'audio',
                        name: 'Audio',
                        icon: 'audio'
                    },
                    {
                        id: 'youtube',
                        name: 'Youtube',
                        icon: 'movie'
                    },
                ]
            },
            /**{

                label: 'containers',
                elements: [

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
            },**/
            {
                label: 'forms',
                elements: [
                    {
                        id: 'form',
                        name: 'Form',
                        icon: 'call_to_action'
                    },
                    {
                        id: 'label',
                        name: 'Label',
                        icon: 'label_alt'
                    },
                    {
                        id: 'inputtext',
                        name: 'Input Text',
                        icon: 'input'
                    },
                    {
                        id: 'textarea',
                        name: 'Textarea',
                        icon: 'text_format'
                    },
                    {
                        id: 'select',
                        name: 'Select',
                        icon: 'select'
                    },

                    {
                        id: 'option',
                        name: 'Option',
                        icon: 'option'
                    },
                    {
                        id: 'file',
                        name: 'File Upload',
                        icon: 'file'
                    },
                    {
                        id: 'checkbox',
                        name: 'Checkbox',
                        icon: 'check_box'
                    },
                    {
                        id: 'radio',
                        name: 'Radio',
                        icon: 'radio'
                    },



                ]
            },
            {
                label: 'Tables',
                elements: [
                    {
                        id: 'table',
                        name: 'Table',
                        icon: 'table'
                    },
                    {
                        id: 'header',
                        name: 'Header',
                        icon: 'header'
                    },
                    {
                        id: 'body',
                        name: 'Body',
                        icon: 'body'
                    },
                    {
                        id: 'footer',
                        name: 'Footer',
                        icon: 'footer'
                    },
                    {
                        id: 'th',
                        name: 'Th',
                        icon: 'th'
                    },
                    {
                        id: 'row',
                        name: 'Row',
                        icon: 'row'
                    },
                    {
                        id: 'cell',
                        name: 'Cell',
                        icon: 'cell'
                    },
                ]
            },
            {
                label: 'List',
                elements: [
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
                ]
            },
            {
                label: 'HTML',
                elements: [
                    {
                        id: 'embed',
                        name: 'Embed',
                        icon: 'embed'
                    }
                ]
            }
        ]
    }


    createElement(element, options) {
        switch (element) {
            case 'section': return this.Section(options);
            case 'container': return this.Container(options);
            case 'block': return this.Block(options);
            case 'separator': return this.Separator(options);
            case 'columns': return this.Columns(options);
            case 'rows': return this.Rows(options);
            case 'grid': return this.Grid(options);
            case 'flexbox': return this.Flexbox(options);
            case 'heading': return this.Heading(options);
            case 'paragraph': return this.Paragraph();
            case 'richtext': return this.RichText();
            case 'span': return this.Span();
            case 'label': return this.Label();
            case 'blockquote': return this.Blockquote();
            case 'code': return this.Code();
            case 'image': return this.Image();
            case 'video': return this.Video();
            case 'audio': return this.Audio();
            case 'youtube': return this.YTVideo();
            case 'download': return this.Download();
            case 'form': return this.Form();
            case 'inputtext': return this.InputText();
            case 'file': return this.InputFile();
            case 'radio': return this.InputRadio();
            case 'textarea': return this.InputTextarea();
            case 'checkbox': return this.InputCheckbox();
            case 'number': return this.InputNumber();
            case 'hidden': return this.InputHidden();
            case 'submit': return this.InputSubmit();
            case 'reset': return this.InputReset();
            case 'button': return this.Button();
            case 'select': return this.Select();
            case 'emptycontainer': return this.EmptyContainer(options);
            case 'option': return this.Option();
            case 'ul': return this.Ul(options);
            case 'li': return this.Li(options);
            case 'ol': return this.Ol(options);
            case 'link': return this.Link(options);
            case 'table': return this.Table(options);
            case 'row': return this.Row(options);
            case 'cell': return this.Cell(options);
            case 'th': return this.TCell(options);
            case 'header': return this.Thead(options);
            case 'body': return this.TBody(options);
            case 'footer': return this.TFooter(options);
            case 'iconify': return this.Iconify(options);
            default: return null;
        }
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

    Container() {
        this.blocks = []
        this.type = 'container'
        this.tag = 'container'
        this.title = 'Container'
        this.css.css = 'container'
        this.element = 'div'

        this.cssObject = {
            base: {
                neutral: {
                    container: 'container'
                },
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        return this
    }
    Section() {
        this.blocks = []
        this.type = 'container'
        this.title = 'Section'
        this.tag = 'section'
        this.css.css = 'pt-5 pb-5 w-full'
        this.element = 'section'
        this.cssObject = {
            base: {
                neutral: {
                    paddingTop: 'pt-5',
                    paddingBottom: 'pb-5',
                    width: 'w-full'
                },
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.content = 'Empty section'
        return this
    }
    Block(content = 'Empty Block') {
        this.blocks = []
        this.title = 'Block',
            this.type = 'container'
        this.title = 'Block'
        this.tag = 'block'
        this.css.css = 'w-full'
        this.element = 'div'
        this.cssObject = {
            base: {
                neutral: {
                    width: 'w-full',
                },
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.content = content
        return this
    }


    Grid() {
        this.blocks = [
            {
                id: this.randomID(),
                blocks: [],
                title: 'Block',
                type: 'container',
                tag: 'block',
                css: {
                    css: 'w-full'
                },
                element: 'div',
                cssObject: {
                    base: {

                        neutral: {
                            width: 'w-full'
                        },
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: 'Empty Block 1'
            },
            {
                id: this.randomID(),
                blocks: [],
                title: 'Block',
                type: 'container',
                tag: 'block',
                css: {
                    css: 'w-full'
                },
                element: 'div',
                cssObject: {
                    base: {

                        neutral: {
                            width: 'w-full'
                        },
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: 'Empty Block 2'
            },
            {
                id: this.randomID(),
                blocks: [],
                title: 'Block',
                type: 'container',
                tag: 'block',
                css: {
                    css: 'w-full'
                },
                element: 'div',
                cssObject: {
                    base: {
                        neutral: {
                            width: 'w-full'
                        },
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: 'Empty Block 3'
            },
            {
                id: this.randomID(),
                blocks: [],
                title: 'Block',
                type: 'container',
                tag: 'block',
                css: {
                    css: 'w-full'
                },
                element: 'div',
                cssObject: {
                    base: {
                        neutral: {
                            width: 'w-full'
                        },
                        active: null,
                        hover: null,
                        focus: null

                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: 'Empty Block 4'
            }
        ]
        this.type = 'container'
        this.title = 'Grid'
        this.tag = 'grid'
        this.css.css = 'grid gap-3 grid-cols-1 sm:grid-cols-2 w-full'
        this.element = 'div'
        this.cssObject = {
            base: {
                neutral: {
                    display: 'grid',
                    gap: 'gap-3',
                    width: 'w-full',
                    gridtemplatecolumn: 'grid-cols-1'
                },
                active: null,
                hover: null,
                focus: null

            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
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
        this.title = 'Flex'
        this.tag = 'flex'
        this.css.css = 'flex'
        this.cssObject = {
            base: {
                neutral: {
                    flex: 'flex',
                    flexdirection: options.direction ? ' flex-' + options.direction : 'flex-row',
                    colspan: options.colspan ? ' col-span-' + options.colspan : ''
                },
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        },
            this.css.css += options.direction ? ' flex-' + options.direction : ''
        this.css.css += options.colspan ? ' col-span-' + options.colspan : ''
        this.element = 'div'
        return this
    }
    EmptyContainer(options = { direction: null, colspan: null }) {
        this.id = this.randomID()
        this.blocks = []

        this.type = 'container'
        this.title = 'Empty Container'
        this.css.css = 'flex w-full h-80 justify-center items-center'
        this.tag = 'flex'
        this.cssObject = {
            base: {
                neutral: {
                    flex: 'flex',
                    w: 'w-full',
                    h: 'h-80',
                    justifycenter: 'justify-center',
                    itemscenter: 'items-center'
                },
                active: null,
                hover: null,
                focus: null

            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'div'
        this.content = 'Container with preset height of 20rem (h-80) and item centered. Drag elements from the left sidebar into this container'
        return this
    }



    Heading(level = 1) {
        this.level = level
        this.element = 'h'
        this.content = 'Heading ' + level
        this.icon = 'title'
        this.editable = true

        this.dialog = 'md:w-40'
        this.title = 'Heading ' + level
        return this
    }
    Paragraph() {
        this.element = 'p'
        this.label = 'Paragraph'
        this.icon = 'subject'
        this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Imperdiet massa tincidunt nunc pulvinar.'
        this.editable = true
        this.title = 'Paragraph'
        return this
    }

    Span() {
        this.element = 'span'
        this.label = 'Span'
        this.icon = 'text_format'
        this.content = 'Simple text'
        this.editable = true
        this.title = 'Simple text'
        return this
    }

    Blockquote() {

        this.element = 'blockquote'
        this.content = 'This is a quote'
        this.editable = true
        this.title = 'Blockquote'
        return this
    }

    Code() {
        this.element = 'pre'
        this.content = 'Code goes here'
        this.editable = true
        this.title = 'Code'
        return this
    }

    Image() {
        this.element = 'img'
        this.label = 'Image'
        this.icon = 'insert_photo'
        this.content = ''
        this.css.css = 'w-40 h-auto'
        this.title = 'Image'
        return this
    }



    Video() {
        this.element = 'video'
        this.label = 'Video'
        this.icon = 'movie'
        this.content = ''
        this.type = 'video'
        this.title = 'Video'
        this.src = ''
        this.options = {
            controls: true,
            autoplay: true,
            loop: true
        }
        return this
    }
    Audio() {
        this.element = 'audio'
        this.label = 'Audio'
        this.icon = 'audio'
        this.content = ''
        this.type = 'audio'
        this.title = 'Audio'
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
        this.title = 'Youtube Video'
        this.type = 'video'
        this.element = 'iframe'
        return this
    }


    Icon() {
        this.label = 'Icon'
        this.title = 'Icon'
        this.data = { icon: 'home' }
        this.tag = "span"
        this.content = 'home'
        this.element = 'i'
        return this
    }

    Iconify() {
        this.label = 'Iconify'
        this.title = 'Icon'
        this.type = 'element'
        this.tag = "i"
        this.css.css = 'iconify',
        this.cssObject = {
                base: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            this.content = ''
        this.element = 'iconify'
        return this
    }

    Download() {
        this.label = 'File'
        this.title = 'Download File'
        this.icon = 'download'
        this.content = 'Download'
        this.type = 'file'
        this.tag = 'file'
        this.element = 'button'
        return this
    }

    Form() {
        this.type = 'container'
        this.title = 'form'
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
        this.title = 'input'
        this.css.css = 'input',
            this.cssObject = {
                base: {
                    neutral: {
                        input: 'input',
                    },
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
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
        this.title = 'input text'
        this.tag = 'input'
        this.placeholder = 'Input'
        return this
    }

    InputFile() {
        this.inputElement()
        this.title = 'file upload'
        this.type = 'file'
        this.tag = 'file'
        this.placeholder = 'Select file'
        return this
    }
    InputRadio() {
        this.inputElement()
        this.title = 'Input Radio'
        this.type = 'radio'
        this.tag = 'radio'
        this.placeholder = 'Choice Radio'
        return this
    }
    Label() {

        this.element = 'label'
        this.content = 'This is a label'
        this.editable = true
        this.title = 'Label'
        return this
    }
    Option() {
        this.element = 'option'
        this.content = 'This is a option'
        this.title = 'Option'
        return this
    }

    Select() {
        this.element = 'select'
        this.content = ''
        this.tag = 'container'
        this.blocks = [{
            id: this.randomID(),
            blocks: [],
            title: 'Option',
            type: 'element',
            style: '',
            tag: 'option',
            css: {
                css: ''
            },
            element: 'option',
            cssObject: {
                base: {
                    neutral: {
                        width: 'w-full'
                    },
                    active: null,
                    hover: null,
                    focus: null

                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Option 1'
        }, {
            id: this.randomID(),
            blocks: [],
            title: 'Option',
            type: 'element',
            style: '',
            tag: 'option',
            css: {
                css: ''
            },
            element: 'option',
            cssObject: {
                base: {
                    neutral: {
                        width: 'w-full'
                    },
                    active: null,
                    hover: null,
                    focus: null

                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Option 2'
        }, {
            id: this.randomID(),
            blocks: [],
            title: 'Option',
            type: 'element',
            style: '',
            tag: 'option',
            css: {
                css: ''
            },
            element: 'option',
            cssObject: {
                base: {
                    neutral: {
                        width: 'w-full'
                    },
                    active: null,
                    hover: null,
                    focus: null

                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Option 3'
        }]
        this.title = 'Select'
        return this
    }

    InputNumber() {
        this.inputElement()
        this.title = 'input number'
        this.tag = 'number'
        this.type = 'number'
        return this
    }


    InputHidden() {
        this.inputElement()
        this.title = 'input hidden'
        this.tag = 'hidden'
        this.type = 'hidden'
        return this
    }

    InputCheckbox() {
        this.inputElement()
        this.title = 'checkbox'
        this.tag = 'checkbox'
        this.type = 'checkbox'
        return this
    }

    InputTextarea() {
        this.element = 'textarea'
        this.title = 'textarea'
        this.tag = 'textarea'
        this.css.css = 'textarea'

        this.cssObject = {
            base: {
                neutral: {
                    textarea: 'textarea'
                },
                active: null,
                hover: null,
                focus: null

            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        },
            this.type = 'textarea'
        this.placeholder = 'type here'
        return this
    }

    InputSubmit() {
        this.element = 'button'
        this.title = 'input submit'
        this.tag = 'submit'
        this.type = 'button'
        this.value = 'Submit'
        this.content = 'Submit'
        return this
    }

    InputReset() {
        this.InputSubmit()
        this.title = 'input reset'
        this.tag = 'reset'
        this.value = 'Reset'
        this.content = 'Reset'
        return this
    }

    Button() {
        this.type = 'button'
        this.element = 'button'
        this.title = 'button'
        this.tag = 'button'
        this.css.css = 'btn btn-primary'
        this.cssObject = {
            base: {

                neutral: {
                    btn: 'btn',
                    btnPrimary: 'btn-primary',
                },
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.content = 'button'
        this.value = 'button'
        return this
    }
    Ul() {
        this.type = 'container'
        this.style = ''
        this.title = 'List'
        this.blocks = [{
            id: this.randomID(),
            blocks: [],
            title: 'li',
            type: 'element',
            style: '',
            tag: 'container',
            css: {
                css: ''
            },
            element: 'li',
            cssObject: {
                base: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'List Item 1'
        }, {
            id: this.randomID(),
            blocks: [],
            title: 'li',
            type: 'element',
            style: '',
            tag: 'container',
            css: {
                css: ''
            },
            element: 'li',
            cssObject: {
                base: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'List Item 2'
        }, {
            id: this.randomID(),
            blocks: [],
            title: 'li',
            type: 'element',
            style: '',
            tag: 'container',
            css: {
                css: ''
            },
            element: 'li',
            cssObject: {
                base: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'List Item 3'
        }]
        this.tag = 'container'
        this.css.css = ''
        this.cssObject = {
            base: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'ul'
        this.content = ''
        return this
    }
    Li() {
        this.type = 'container'
        this.title = 'Unordered List Item'
        this.style = ''
        this.blocks = []
        this.tag = 'element'
        this.css.css = ''
        this.cssObject = {
            base: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'li'
        this.content = 'Unordered list item'
        return this;
    }
    Ol() {
        this.type = 'container'
        this.title = 'Ordered List Item'
        this.style = ''
        this.blocks = []
        this.tag = 'element'
        this.css.css = ''
        this.cssObject = {
            base: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'ol'
        this.content = 'Ordered list item'
        return this;
    }
    Link() {
        this.type = 'element'
        this.title = 'Link'
        this.style = ''
        this.blocks = []
        this.tag = 'element'
        this.css.css = ''
        this.cssObject = {
            base: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'a'
        this.content = 'Link'
        return this;
    }
    Separator() {
        this.title = 'Horizontal line',
            this.type = 'element'
        this.style = ''
        this.blocks = []
        this.tag = 'element'
        this.css.css = 'mt-5 mb-5 border-black border-opacity-3 border-t-1 w-full'
        this.cssObject = {
            base: {
                neutral: {
                    marginTop: 'mt-5',
                    borderColor: 'border-black',
                    borderOpacity: 'border-opacity-3',
                    marginBottom: 'mb-5',
                    borderTop: 'border-t-1',
                    width: 'w-full'
                },
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'hr'
        this.content = ''
        return this;
    }
    Columns() {
        this.type = 'container'
        this.title = 'Columns'
        this.style = ''
        this.blocks = [{
            id: this.randomID(),
            blocks: [],
            title: 'Block',
            type: 'container',
            tag: 'block',
            css: {
                css: 'w-full'
            },
            element: 'div',
            cssObject: {
                base: {
                    neutral: {
                        width: 'w-full'
                    },
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Empty container 1'
        }, {
            id: this.randomID(),
            blocks: [],
            title: 'Block',
            type: 'container',
            tag: 'block',
            css: {
                css: 'w-full'
            },
            element: 'div',
            cssObject: {
                base: {
                    neutral: {
                        width: 'w-full'
                    },
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Empty container 2'
        }]
        this.tag = 'container'
        this.css.css = 'flex flex-col gap-5 w-full'
        this.cssObject = {
            base: {
                neutral: {
                    display: 'flex',
                    gap: 'gap-5',
                    flexdirection: 'flex-col',
                    width: 'w-full'
                },
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'div'
        this.content = ''
        return this
    }
    Rows() {
        this.type = 'container'
        this.title = 'Rows'
        this.style = ''
        this.blocks = [{
            id: this.randomID(),
            blocks: [],
            title: 'Block',
            type: 'container',
            tag: 'block',
            css: {
                css: 'w-full'
            },
            element: 'div',
            cssObject: {
                base: {
                    neutral: {
                        width: 'w-full'
                    },
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Empty container 1'
        }, {
            id: this.randomID(),
            blocks: [],
            title: 'Block',
            type: 'container',
            tag: 'block',
            css: {
                css: 'w-full'
            },
            element: 'div',
            cssObject: {
                base: {
                    neutral: {
                        width: 'w-full'
                    },
                    active: null,
                    hover: null,
                    focus: null
                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Empty container 2'
        }]
        this.tag = 'container'
        this.css.css = 'flex flex-row gap-5 w-full'
        this.cssObject = {
            base: {
                neutral: {
                    display: 'flex',
                    gap: 'gap-5',
                    flexdirection: 'flex-row',
                    width: 'w-full'
                },
                active: null,
                hover: null,
                focus: null
            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'div'
        this.content = ''
        return this
    }

    RichText() {
        this.type = 'container'
        this.title = 'Rich Text'
        this.style = ''
        this.blocks = [
            {
                id: this.randomID(),
                blocks: [],
                level: 2,
                title: 'Heading',
                type: 'element',
                tag: 'element',
                style: '',
                css: {
                    css: 'font-bold text-lg'
                },
                element: 'h',
                cssObject: {
                    base: {
                        neutral: {
                            fontWeight: 'font-bold',
                            textSize: 'text-lg'
                        },
                        active: null,
                        hover: null,
                        focus: null

                    },
                    xxl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: 'Heading title'
            },
            {
                id: this.randomID(),
                blocks: [],
                title: 'Paragraph',
                type: 'element',
                tag: 'element',
                style: '',
                css: {
                    css: 'w-full'
                },
                element: 'p',

                cssObject: {
                    base: {
                        neutral: {
                            width: 'w-full'
                        },
                        active: null,
                        hover: null,
                        focus: null

                    },
                    xxl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },

                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean. Imperdiet massa tincidunt nunc pulvinar.'
            }
        ]
        this.tag = 'container'
        this.css.css = ''
        this.cssObject = {
            base: {
                neutral: null,
                active: null,
                hover: null,
                focus: null

            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        }
        this.element = 'div'
        this.content = ''
        return this
    }
    Row() {
        this.element = 'tr'
        this.content = ''
        this.tag = 'container'
        this.blocks = [{
            id: this.randomID(),
            blocks: [],
            title: 'td',
            type: 'element',
            style: '',
            tag: 'container',
            css: {
                css: ''
            },
            element: 'td',
            cssObject: {
                base: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null

                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Cell 1'
        }, {
            id: this.randomID(),
            blocks: [],
            title: 'td',
            type: 'element',
            style: '',
            tag: 'container',
            css: {
                css: ''
            },
            element: 'td',
            cssObject: {
                base: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null

                },
                xxl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xl: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                lg: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                md: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                sm: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                },
                xs: {
                    neutral: null,
                    active: null,
                    hover: null,
                    focus: null
                }
            },
            content: 'Cell 2'
        }]
        this.title = 'tr'
        return this
    }
    Cell() {
        this.element = 'td'
        this.content = 'Cell'
        this.tag = 'container'
        this.blocks = []
        this.title = 'td'
        return this
    }
    TCell() {
        this.element = 'th'
        this.content = 'T Cell'
        this.tag = 'container'
        this.blocks = []
        this.title = 'th'
        return this
    }
    Thead() {
        this.element = 'thead'
        this.content = ''
        this.tag = 'container'
        this.blocks = [
            {
                id: this.randomID(),
                blocks: [
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'th',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'th',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 1'
                    },
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'th',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'th',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 2'
                    },
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'th',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'th',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 3'
                    }
                ],
                title: 'tr',
                type: 'element',
                style: '',
                tag: 'container',
                css: {
                    css: ''
                },
                element: 'tr',
                cssObject: {
                    base: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null

                    },
                    xxl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: ''
            }
        ]
        this.title = 'Thead'
        return this
    }

    TBody() {
        this.element = 'tbody'
        this.content = ''
        this.tag = 'container'
        this.blocks = [
            {
                id: this.randomID(),
                blocks: [
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'td',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'td',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 1'
                    },
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'td',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'td',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 2'
                    },
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'td',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'td',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 3'
                    }
                ],
                title: 'tr',
                type: 'element',
                style: '',
                tag: 'container',
                css: {
                    css: ''
                },
                element: 'tr',
                cssObject: {
                    base: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null

                    },
                    xxl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: ''
            }
        ]
        this.title = 'TBody'
        return this
    }

    TFooter() {
        this.element = 'tfoot'
        this.content = ''
        this.tag = 'container'
        this.blocks = [
            {
                id: this.randomID(),
                blocks: [
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'td',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'td',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 1'
                    },
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'td',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'td',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 2'
                    },
                    {
                        id: this.randomID(),
                        blocks: [],
                        title: 'td',
                        type: 'element',
                        style: '',
                        tag: 'container',
                        css: {
                            css: ''
                        },
                        element: 'td',
                        cssObject: {
                            base: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null

                            },
                            xxl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xl: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            lg: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            md: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            sm: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            },
                            xs: {
                                neutral: null,
                                active: null,
                                hover: null,
                                focus: null
                            }
                        },
                        content: 'Cell 3'
                    }
                ],
                title: 'tr',
                type: 'element',
                style: '',
                tag: 'container',
                css: {
                    css: ''
                },
                element: 'tr',
                cssObject: {
                    base: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null

                    },
                    xxl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xl: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    lg: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    md: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    sm: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    },
                    xs: {
                        neutral: null,
                        active: null,
                        hover: null,
                        focus: null
                    }
                },
                content: ''
            }
        ]
        this.title = 'TFoot'
        return this
    }
    Table() {
        this.element = 'table'
        this.content = ''
        this.tag = 'container'
        this.css.css = 'table'
        this.cssObject = {
            base: {
                neutral: {
                    table: 'table'
                },
                active: null,
                hover: null,
                focus: null

            },
            xxl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xl: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            lg: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            md: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            sm: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            },
            xs: {
                neutral: null,
                active: null,
                hover: null,
                focus: null
            }
        },
            this.blocks = [
                {
                    id: this.randomID(),
                    blocks: [
                        {
                            id: this.randomID(),
                            blocks: [
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'th',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'th',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 1'
                                },
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'th',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'th',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 2'
                                },
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'th',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'th',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 3'
                                }
                            ],
                            title: 'tr',
                            type: 'element',
                            style: '',
                            tag: 'container',
                            css: {
                                css: ''
                            },
                            element: 'tr',
                            cssObject: {
                                base: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null

                                },
                                xxl: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                xl: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                lg: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                md: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                sm: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                xs: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                }
                            },
                            content: ''
                        }
                    ],
                    title: 'thead',
                    type: 'element',
                    style: '',
                    tag: 'container',
                    css: {
                        css: ''
                    },
                    element: 'thead',
                    cssObject: {
                        base: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null

                        },
                        xxl: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        xl: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        lg: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        md: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        sm: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        xs: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        }
                    },
                    content: ''
                },
                {
                    id: this.randomID(),
                    blocks: [
                        {
                            id: this.randomID(),
                            blocks: [
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'td',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'td',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 1'
                                },
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'td',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'td',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 2'
                                },
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'td',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'td',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 3'
                                }
                            ],
                            title: 'tr',
                            type: 'element',
                            style: '',
                            tag: 'container',
                            css: {
                                css: ''
                            },
                            element: 'tr',
                            cssObject: {
                                base: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null

                                },
                                xxl: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                xl: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                lg: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                md: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                sm: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                xs: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                }
                            },
                            content: ''
                        },
                        {
                            id: this.randomID(),
                            blocks: [
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'td',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'td',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 11'
                                },
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'td',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'td',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 12'
                                },
                                {
                                    id: this.randomID(),
                                    blocks: [],
                                    title: 'td',
                                    type: 'element',
                                    style: '',
                                    tag: 'container',
                                    css: {
                                        css: ''
                                    },
                                    element: 'td',
                                    cssObject: {
                                        base: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null

                                        },
                                        xxl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xl: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        lg: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        md: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        sm: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        },
                                        xs: {
                                            neutral: null,
                                            active: null,
                                            hover: null,
                                            focus: null
                                        }
                                    },
                                    content: 'Cell 13'
                                }
                            ],
                            title: 'tr',
                            type: 'element',
                            style: '',
                            tag: 'container',
                            css: {
                                css: ''
                            },
                            element: 'tr',
                            cssObject: {
                                base: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null

                                },
                                xxl: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                xl: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                lg: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                }, active: null,

                                md: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                sm: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                },
                                xs: {
                                    neutral: null,
                                    active: null,
                                    hover: null,
                                    focus: null
                                }
                            },
                            content: ''
                        }
                    ],
                    title: 'tbody',
                    type: 'element',
                    style: '',
                    tag: 'container',
                    css: {
                        css: ''
                    },
                    element: 'tbody',
                    cssObject: {
                        base: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null

                        },
                        xxl: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        xl: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        lg: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        md: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        sm: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        },
                        xs: {
                            neutral: null,
                            active: null,
                            hover: null,
                            focus: null
                        }
                    },
                    content: ''
                },

            ]
        this.title = 'Table'
        return this
    }

}
