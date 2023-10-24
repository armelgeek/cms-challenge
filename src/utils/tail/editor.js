import jp from 'jsonpath'

var editor = {
    state: {
        elements: null,
        document: null,
        project: null,
        selected: null,
        page: null,
        current: null,
        component: null,
        action: null,
        subaction: null,
        level: null,
        parent: null,
        startTime: null,
        autosave: null,
        export: 'single',
        preview: null,
        fonts: "Alfa+Slab+One|Asap+Condensed|Abel|Alice|Alegreya|Amethysta|Archivo+Black|Barlow|Barlow+Condensed|Bungee+Inline|Expletus+Sans|Lora|Montserrat|Nunito+Sans|Oi|Open+Sans|PT+Sans|Roboto|Roboto+Condensed|Quattrocento|Raleway|Ultra|Yatra+One".split('|'),
        save: true,
        article: null,
        customizeTab: null
    }
}

// Create a randomi ID
function randomID(){
    return 'tail-editor-' + Math.random().toString(36).substr(2, 5)
}

//clone object and reassign any id to a new random id
var traverse = function(o) {
    for (var i in o) {
      //fn.apply(this,[i,o[i]]);  
      if (o[i] !== null && typeof(o[i])=="object") {
        traverse(o[i]);
      } else {
          if ( i === 'id' ){
              o[i] = randomID()
          }
      }
    }
    return o
  }



// Find a node by ID and remove (flag remove)
function removeElement(id,currentNode){
    if (id == currentNode.id) {
        return currentNode;
    } else {
        var node = null
        for(var index in currentNode.blocks){
            
            node = currentNode.blocks[index];
            
            if(node.id === id){
                currentNode.blocks.splice(index,1)
                node.parent = currentNode
                // set current node when removing
                //store.dispatch ( 'setCurrent' , currentNode )
                return node;
            }
            removeElement(id, node );
        }
        return node

    }
}

function removeNestedObjectsKey( currentNode = {} , arrayKey = [] , deleteKey = ''){
    delete currentNode[deleteKey]
    currentNode[arrayKey].forEach ( obj => {
        removeNestedObjectsKey ( obj , arrayKey , deleteKey)
    })
    return currentNode
   
}


export default {
    install: function (Vue) {
        // const $eventBus =  ( action , e = null ) =>{
        //     eventBus.$emit ( action , e )
        // }

        // const $editorBus =  ( action , e = null ) =>{
        //     editorBus.$emit ( action , e )
        // }

        // const $dialogBus = ( action , e = null ) => {
        //     dialogBus.$emit ( action , e )
        // }

        const $randomID = () => {
            return randomID()
        }

        const $clean = function ( str = '' ){
            if ( !str ) return ''
            str = str.replace(/\s\s+/g, ' ')
            return [...new Set(str.split(' '))].join(' ')
        }

        //clone object
        const $clone = ( obj )=>{
            if ( !obj ) return null
            return traverse ( obj )
        }

        const $removeNode = (id) => {
            //var parent = jp.parent ( editor.document , '$..blocks[?(@.id=="' + id + '")]' )
            removeElement ( id , editor.document )
            // remove element et set current to null
            //store.dispatch ( 'setCurrent' , null )
        }
        /**
         * Paste block from clipboard to current block (target has to have block property)
         */
         const $block_paste = () => {
            /**let current = store.state.editor.current
            let obj = window.localStorage.getItem ( 'tail-editor-clipboard' )
            obj = JSON.parse ( obj )
            obj = traverse ( obj )
            if ( current.hasOwnProperty ( 'blocks') ){
                current.blocks.push ( obj )
            }**/
        }
        /**
         * block duplicate
        */
        const $block_duplicate = () => {
            /**let component = store.state.editor.document //store.state.desktop.tabs[store.state.desktop.currentTab].blocks
            let current = store.state.editor.current
            if ( !component || !current ) return
            //let current = store.state.editor.current
            //console.log ( component )
            //let component = store.state.editor.component
            //console.log ( component )
            console.log ( 'ID====>' , current.id )
            var parent = jp.parent ( component , '$..blocks[?(@.id=="' + current.id + '")]' )
            let i 
            if ( parent ){
                parent.forEach ( (p,index) => {
                    if ( p.id === current.id ){
                        i = index
                    }
                })
                let el = JSON.parse(JSON.stringify(current))
                let obj = traverse ( obj )
                parent.splice ( i+1 , 0 , obj )
            }**/
        }

        const $duplicateBlock = () => {
            /**if ( !store.state.editor.current ) return
            console.log ( 'duplicate block' )
            let component = store.state.editor.document //comp //this.$mapState().desktop.tabs[this.$mapState().desktop.currentTab].blocks
            var parent = jp.parent ( component , '$..blocks[?(@.id=="' + store.state.editor.current.id + '")]' )
            let i 
            if ( parent ){
                parent.forEach ( (p,index) => {
                    if ( p.id === store.state.editor.current.id ){
                        i = index
                    }
                })
                let el = JSON.parse(JSON.stringify(store.state.editor.current))
                let obj = traverse ( el )
                obj.id = randomID()
                parent.splice ( i+1 , 0 , obj )
                // remove duplicate and set current to null 
                //store.dispatch ( 'setCurrent' , null )
                //editorBus.$emit('editorMessage','Block duplicated')
            }**/
        }

        const $pasteBlock = () => {
            let block = JSON.parse ( window.localStorage.getItem ( 'whoobe-clipboard' ) )
            let copiedBlock = traverse ( block )
            //store.state.editor.current.blocks.push ( copiedBlock )
        }

        
        const $exportBlock = () => {
            /**if ( !store.state.editor.current ) return
            let block = store.state.editor.current 
            const data = JSON.stringify(block)
            const blob = new Blob([data], {type: 'application/json'})
            FileSaver.saveAs(blob,'whoobe-block');**/
        }

        const $importBlock = () => {

        }



        //Page Export
        const $exportDocument = (confirmSave = true , name='whoobe-document' , type='document') => {
            /**if ( confirmSave ){
                const result = confirm('Save Page?');
                if (!result) return;
            }
            let page = store.state.editor.page
            delete page.json

            //create info for building
            let pagePurge = new Block()
            pagePurge.json.blocks = store.state.editor.document
            pagePurge.purge()
            let json = {
                blocks : store.state.editor.document,
                build: pagePurge.json.build
            }

            page.json = json 
            // remove coords & tailwind keys
            removeNestedObjectsKey ( page.json.blocks , 'blocks' , 'coords' )
            removeNestedObjectsKey ( page.json.blocks , 'blocks' , 'tailwind' )
            const data = JSON.stringify(page)
            const blob = new Blob([data], {type: 'application/json'})
            FileSaver.saveAs(blob,page.name);
            **/
        }

        const $exportBuild = (html)=>{
            /**if ( !html ) return
            let page = store.state.editor.page
            let fonts = jp.query ( page.json.blocks , '$..blocks..font') 
            let fnts = [ ...new Set ( fonts.filter ( a => { return a } ) )]
            let anims = jp.query ( page.json.blocks , '$..blocks[?(@.gsap.animation)]') 
            let animations = anims.map ( a => { return { id: a.id , gsap: a.gsap }}) 
            const whoobeone = {
                html : html,
                fonts: fnts,
                title: page.name,
                description: page.description,
                animations: animations,
                tags: page.tags.join(',')
            }
            let data = "const whoobe = " + JSON.stringify(whoobeone) + ';export default whoobe'
            const blob = new Blob([data],{type: 'application/js'})
            FileSaver.saveAs(blob,'whoobe.js')**/
        }

        const $exportImage = ( image ) => {
            /**fetch(image)
                .then(res => res.blob())
                .then(data => {
                    const blob = new Blob([data], {type: 'image/jpeg'})
                    FileSaver.saveAs(blob,'image.jpg');
                    return true
            })**/
        }

        const $imageInfo = ( image ) => {
            /**if ( !image ) return 
            const img = new Image();

            img.src = image;

            img.onload = function() {
                const imgWidth = img.naturalWidth;
                const imgHeight = img.naturalHeight;
                return  
            };
            let ratio = img.naturalWidth / img.naturalHeight
            return img**/
        }

        /**
         * Beautify HTML code of the block preview
         @html      String      => html string
        */
         const $beautify = ( html = '' )=>{
            if ( !html ) return ''
            var tab = '\t';
            var result = '';
            var indent= '';
        
            html.split(/>\s*</).forEach(function(element) {
                if (element.match( /^\/\w/ )) {
                    indent = indent.substring(tab.length);
                }
        
                result += indent + '<' + element + '>\r\n';
        
                if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
                    indent += tab;              
                }
            });
            return result.substring(1, result.length-3);
        }
    
        const $icons = ( search = '' , limit = 120 ) =>{
            if ( !search ) return null
            const resolve = new Promise ( (resolve,reject ) =>{
                fetch ( 'https://api.iconify.design/search?query=' + search + '&limit=' + limit , { mode: 'cors'})
                .then ( res => res.json() )
                .then ( icons => resolve ( icons ))
                .catch ( err => {
                    console.log ( err )
                })
            })
            return resolve
        }

        const $purgeCSS = ( ) => {
           /** let css = jp.query ( store.state.editor.document , '$..blocks..css.css' ).filter(a=>{ return a}).join(',').split(' ').filter(a=> { return a })
            let containers = jp.query ( store.state.editor.document , '$..blocks..css.container' ).filter(a=>{ return a}).join(',').split(' ').filter(a=> { return a })
            let toPurge = [ ...css , ...containers ]
            return [ ...new Set(toPurge) ].sort()**/
        }
    }


} 
