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

    return editor.current && (
        <div id="contentEditor" className="flex flex-col items-start w-64">
            {editor.current.tag === 'youtube' || editor.current.tag === 'vimeo' ? (
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
            ) : (
                <>
                    {editor.current && editor.current.element != 'img' && (
                        <textarea
                            className="p-1 h-40 w-full text-base"
                            value={value}
                            onChange={updateValue}
                        />
                    )}
                </>
            )}

        </div>
    )
}
export default BlockEditContent;