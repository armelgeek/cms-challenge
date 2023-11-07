import React, { useCallback, useState } from 'react'
const BlockAttributes = () => {
    const [state,setState] = useState({
        element: null,
        newAttributeName: '',
        newAttributeValue: '',
        currentAttribute: null,
        attributes:[],
        attrib:[]
    }) as any;
    /**const addAttribute= useCallback((e)=>{
        if ( e.keyCode === 13 ){
            if ( !state.element.data.hasOwnProperty('attributes') ){
                let attrib = {}
                state.attrib[state.newAttributeName] = state.newAttributeValue 
                console.log ( attrib )
                state.element.data['attributes'] = attrib
            } else {
                state.element.data.attributes[state.newAttributeName] = state.newAttributeValue
            }
            this.attributes.push ( this.newAttributeName )
            this.newAttributeName = ''
            this.newAttributeValue = ''
            this.$store.dispatch ( 'setCurrent' , this.element )
        }
    },[])
    deleteAttribute(attrib,i){
        this.currentAttribute = null
        this.attributes.splice(i,1)
        delete this.element.data.attributes[attrib]
        this.$store.dispatch ( 'setCurrent' , this.element )
        console.log ( attrib , ' deleted')
    }**/
  return (
    <div>BlockAttributes</div>
  )
}
export default BlockAttributes;