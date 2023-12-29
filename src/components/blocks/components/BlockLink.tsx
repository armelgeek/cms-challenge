import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useGetter } from '../../../store';

const BlockLink = ({ link }: any) => {
    const editor = useGetter('editor', 'data', []);
    const [state, setState] = useState({
        link: editor?.current?.href,
        content: editor?.current?.content,
    })
    console.log('state',state);
    const updateBlockProperty = useDispatch('editor', 'updateBlockProperty');
    const updateValue = useCallback((value: any, type: any) => {
        updateBlockProperty(value, type);
        if (editor.selectedBlocks.length > 0) {
            for (let index = 0; index < editor.selectedBlocks.length; index++) {
              const element = editor.selectedBlocks[index];
              updateBlockProperty(value, type, element);
            }
          }
    }, [])
    useEffect(() => {
        setState({
            link: editor?.current?.href,
            content: editor?.current?.content,
        });
    }, [editor?.current])

    return (
        <div className="w-1/4 flex flex-col">
            <div className="flex items-center p-1">
                {editor.current && (
                    <>
                        <label>Link</label>
                        <input className="ml-2 p-1 rounded w-56 text-lg" value={state.link} onChange={(e) => {  updateValue(e.target.value, 'href')}} />
                    </>
                )}

            </div>
            <div className="flex items-center p-1" title="title">
                {editor.current && (
                    <>
                        <label>title</label>
                        <input className="ml-2 p-1 rounded w-56 text-lg" value={state.content} onChange={(e) => {  updateValue(e.target.value, 'content')}} />
                    </>
                )}
            </div>
        </div>
    )
}
export default BlockLink;