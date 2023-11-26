import React, { useCallback, useState } from 'react'
const BlockAttributes = ({ element }: any) => {
    const [state, setState] = useState({
        element: null,
        newAttributeName: '',
        newAttributeValue: '',
        currentAttribute: null,
        attributes: [],
        attrib: []
    }) as any;
    const addAttribute = useCallback((e: any) => {
        /**if ( e.keyCode === 13 ){
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
           
        } */
    }, [])
    const deleteAttribute = (attrib: any, i: number) => {
        /** this.currentAttribute = null
         this.attributes.splice(i,1)
         delete this.element.data.attributes[attrib]
         this.$store.dispatch ( 'setCurrent' , this.element )
         console.log ( attrib , ' deleted')
          */
    }
    return element ? (
        <div className="p-2 flex flex-col" key={element.id + '_attr'}>
            {element && element.data && element.data.attributes && Object.keys(element.data.attributes) && (
                <>
                    {state.attributes.length && (
                        <>
                            <select className="w-full" onChange={(e: any) => { }}>
                                {state.attributes.map((att: any) => (
                                    <option value={att} selected={state.currentAttribute == att}>{att}</option>
                                ))}

                            </select>
                            {state.attributes.map((attrib: any, i: number) => (
                                <>
                                    <div className="w-5/6 flex items-center mb-1">
                                        <span className="chip bg-purple-400 mr-2">{attrib}</span>{element.data.attributes[attrib]}</div>
                                    <button onClick={() => deleteAttribute(attrib, i)}>Delete</button>
                                </>
                            ))}
                        </>
                    )}
                </>
            )}
            <label>Attribute</label>
            <input type="text" className="w-full" value={state.newAttributeName} />
            <label>Value</label>
            <input type="text" className="w-full" value={state.newAttributeName} onKeyDown={(e) => addAttribute(e)} />
            <p className="text-xs text-gray-300 absolute bottom-0 mb-20"><b>To add an attribute add a name a value (optional) and click Enter</b>.<br /><br />You can add attributes to any element. Do not duplicate attributes in order to prevent unexpected behaviors.</p>

        </div>

    ) : null;
}
export default BlockAttributes;