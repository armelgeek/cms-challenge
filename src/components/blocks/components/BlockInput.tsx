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
    const updateBlockProperty = useDispatch('editor', 'updateBlockProperty');
    const updateValue = useCallback((value: any, type: any) => {
        let key = '';
        if (type != 'type') {
            key = 'data.attributes.' + type;
        } else {
            key = type;
        }

        updateBlockProperty(value, key);
        if (editor.selectedBlocks.length > 0) {
            for (let index = 0; index < editor.selectedBlocks.length; index++) {
              const element = editor.selectedBlocks[index];
              updateBlockProperty(value, type, element);
            }
          }
    }, [])
    useEffect(() => {
        setState({
            type: editor?.current?.type,
            name: editor?.current?.attributes?.data?.name,
            id: editor?.current?.attributes?.data?.id,
            placeholder: editor?.current?.data?.attributes?.placeholder || "Placeholder",
            required: editor?.current?.data?.attributes?.required
        });
    }, [editor?.current])
    return (
        <div className="flex flex-col gap-2  p-2">
            <label className='text-sm'>Type</label>
            <select className='select select-md' value={state.type} onChange={(e) => {
                
                updateValue(e.target.value, 'type');
            }
            }>
                <option value="text">text</option>
                <option value="email">email</option>
                <option value="number">number</option>
            </select>
            <label className='text-sm'>Name</label>
            <input className='text-sm border-gray-500 h-10 w-full  items-center overflow-hidden rounded-primary bg-slate-100 dark:text-white text-slate-600 dark:bg-slate-800 sm:flex border' value={state.name} onChange={(e) => updateValue(e.target.value, 'name')} />
            <label className='text-sm'>ID</label>
            <input className='text-sm border-gray-500 h-10 w-full  items-center overflow-hidden rounded-primary bg-slate-100 dark:text-white text-slate-600 dark:bg-slate-800 sm:flex border' value={state.id} onChange={(e) => updateValue(e.target.value, 'id')} />
            <label className='text-sm'>Placeholder</label>
            <input className='text-sm border-gray-500  h-10 w-full  items-center overflow-hidden rounded-primary bg-slate-100 dark:text-white text-slate-600 dark:bg-slate-800 sm:flex border' value={state.placeholder} onChange={(e) => updateValue(e.target.value, 'placeholder')} />
            <label className='text-sm'>Required</label>
            <input type="checkbox" checked={state.required} onChange={(e) => updateValue(e.target.checked, 'required')} />
        </div>
    )
}
export default BlockInput;