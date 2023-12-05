import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useGetter } from '../../../store';

const BlockInput = () => {
    const editor = useGetter('editor', 'data', []);
    const [state, setState] = useState({
        type: editor?.current?.type,
        name: editor?.current?.data?.attributes?.name,
        id: editor?.current?.data?.attributes?.id,
        placeholder: editor?.current?.data?.attributes?.placeholder,
        required: editor?.current?.data?.attributes?.required
    })
    console.log('editor',editor);
    const updateBlockProperty = useDispatch('editor', '');
    const updateValue = useCallback((value: any, type: any) => {
        console.log('e.target.value',value)
        let key = '';
        if(type != 'type'){
            key = 'data.attributes.' + type;
        }else{
            key = type;
        }
        
        (value,key);
    }, [])
    useEffect(() => {
        setState({
            type: editor?.current?.type,
            name: editor?.current?.attributes?.data?.name,
            id: editor?.current?.attributes?.data?.id,
            placeholder: editor?.current?.data?.attributes?.placeholder,
            required: editor?.current?.data?.attributes?.required
        });
    }, [editor?.current])
    return (
        <div className="flex flex-col p-2 pr-20">
            <label>Type</label>
            <select value={state.type} onChange={(e) => updateValue(e.target.value, 'type')}>
                <option value="text">text</option>
                <option value="email">email</option>
                <option value="number">number</option>
            </select>
            <label>Name</label>
            <input type="text" value={state.name} onChange={(e) => updateValue(e.target.value, 'name')} />
            <label>ID</label>
            <input type="text" value={state.id} onChange={(e) => updateValue(e.target.value, 'id')} />
            <label>Placeholder</label>
            <input type="text" value={state.placeholder} onChange={(e) => updateValue(e.target.value, 'placeholder')} />
            <label>Required</label>
            <input type="checkbox" value={state.required} onChange={(e) => updateValue(e.target.checked, 'required')} />
        </div>
    )
}
export default BlockInput;