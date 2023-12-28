import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useGetter } from '../../../store';

const BlockLink = ({ link }: any) => {
    const editor = useGetter('editor', 'data', []);
    const [state, setState] = useState({
        link: editor?.current?.link,
        anchor: editor?.current?.anchor,
    })
    const updateBlockProperty = useDispatch('editor', 'updateBlockProperty');
    const updateValue = useCallback((value: any, type: any) => {
        updateBlockProperty(value, type);
    }, [])
    useEffect(() => {
        setState({
            link: editor?.current?.type,
            anchor: editor?.current?.anchor,
        });
    }, [editor?.current])

    return (
        <div className="w-1/4 flex flex-col">
            <div className="flex items-center p-1">
                {editor.current && (
                    <>
                        <label>Link</label>
                        <input className="ml-2 p-1 rounded w-56 text-lg" value={state.link} onChange={(e) => {  updateValue(e.target.value, 'link')}} />
                    </>
                )}

            </div>
            <div className="flex items-center p-1" title="anchor">
                {editor.current && (
                    <>
                        <label>Anchor</label>
                        <input className="ml-2 p-1 rounded w-56 text-lg" value={state.anchor} onChange={(e) => {  updateValue(e.target.value, 'anchor')}} />
                    </>
                )}
            </div>
        </div>
    )
}
export default BlockLink;