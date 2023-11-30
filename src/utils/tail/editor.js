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
