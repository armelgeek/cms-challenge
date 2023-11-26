import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useGetter } from '../../../store';

const BlockHeading = () => {
    const editor = useGetter('editor', 'data', []);
    const [value, setValue] = useState(editor?.current?.level);
    const editBlockLevel = useDispatch('editor','editBlockLevel');
    const updateValue = useCallback((e:any)=>{
        setValue(e.target.value);
        editBlockLevel(e.target.value);
    
    },[value]);
    useEffect(()=>{
        setValue(editor?.current?.level);
    },[editor?.current])
    return (
        <div className="w-40">
            <div className="p-1 bg-gray-200 w-full">Heading</div>
            <select className="p-1 m-1 w-5/6" value={value} onChange={updateValue}>
                {[1, 2, 3, 4, 5, 6].map((value, index) => <option key={index} value={value}>H{value}</option>)}
            </select>
        </div>
    )
}
export default BlockHeading;