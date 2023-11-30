import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash';
import { useDispatch, useGetter } from '../../../store';

const BlockEditContent = () => {
    const editor = useGetter('editor', 'data', []);
    console.log('editor', editor);
    const editBlockContent = useDispatch('editor','editBlockContent');
    const [value, setValue] = useState(editor?.current?.content);
    const updateValue = useCallback((e:any)=>{
        setValue(e.target.value);
        editBlockContent(e.target.value);
    
    },[value]);
    useEffect(()=>{
        setValue(editor.current?.content);
    },[editor?.current])
    console.log('editor.current.element',editor.current.element);
    return editor.current && (
        <div id="contentEditor" className="flex flex-col items-start w-64">
            {(editor.current.type === 'youtube' || editor.current.type === 'video') && (
                <>
                    <label>Video ID</label>
                    <input
                        className="m-1"
                        type="text"
                        value={value}
                        onChange={updateValue}
                        placeholder="video ID only"
                    />
                </>
            )}
            {(editor.current.element == 'p'  || editor.current.element == 'li'  || editor.current.element == 'h') && (
                <div className="w-full flex flex-row justify-center">
                        <textarea
                            className="p-1 h-40  text-base input w-96"
                            value={value}
                            onChange={updateValue}
                        />
                </div>
            )}
        </div>
    )
}
export default BlockEditContent;