import React from 'react'
import {useDispatch, useGetter} from './store';
import Template from "./utils/tail/templates";
const EditorFooter = ({blockEditor}:any) => {
    const editor = useGetter('editor', 'data', []);
    const desktop = useGetter('desktop', 'data', []);
    const setInfo = useDispatch('desktop','setInfo');
    const addToUKit = useDispatch('desktop','addToUKit');
    const savePage = useDispatch('editor','savePage');
    const updateKitBlock = useDispatch('editor', 'updateKitBlock');
    const  uiks = [...desktop.uikits,... new Template().kits()];
  return editor.document != null && (
    <div className="z-50">
        <div className="fixed bottom-0 w-full flex  flex-row items-center p-2  gap-5 bg-purple-900 text-white cursor-pointer">
                <button className="btn btn-primary btn-sm" onClick={savePage}>Save Template</button>
            <select className="mr-2 rounded ring-1 ring-purple-500 bg-gray-200 py-2" onChange={(e:any)=> {
                setInfo({
                    prop: 'library',
                    value: {
                        name: uiks[e.target.value].name,
                        author: uiks[e.target.value].author,
                        description: uiks[e.target.value].description,
                        templates: uiks[e.target.value].json ? uiks[e.target.value].json.templates : uiks[e.target.value].templates,
                    }
                })
            }}>
                <option value=""></option>
                {uiks.map((uik: any, i: number) => (
                    <option value={i}>{uik.name}</option>
                ))}

            </select>
            <div className="font-bold text-lg">{desktop?.library?.name}</div>
                <button className="btn btn-primary btn-sm" onClick={()=> addToUKit(blockEditor)}>Save UI Kit</button>
        </div>
    </div>
  )
}
export default EditorFooter;