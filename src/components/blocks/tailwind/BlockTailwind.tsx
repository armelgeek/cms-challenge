import React, {useCallback, useState} from 'react'
import {useDispatch, useGetter} from "../../../store";
import twGroups from "../../../utils/scripts/tw.groups";
import {FaChevronCircleRight, FaMinus} from "react-icons/fa";
import Width from "../../../components/blocks/tailwind/controls/Width";
const BlockTailwind = ({css, cid}:any) => {
    const [gr,setGr] = useState('');
    const [controls,setControls] = useState(null) as any;
    const [allCss,setAllCss] = useState('');
    const [cssTw,setCssTw] = useState({});

    const editor = useGetter('editor','data',[]);
    const setInfo = useDispatch('editor', 'setInfo');
    const setControl=useCallback((group:any)=>{
        setGr(group.label);
        setInfo({
            prop: 'customizeTab',
            value: group
        })
        setControls(group.components);
        css = editor.current.css.css
    },[])
    const isEnabled=(group:any)=>{
        if ( group.filter ){
            return group.filter.includes( editor.current.tag )
        }
        return true
    }

    return (
        <div className="relative z-highest h-full">
            {editor.current && (
            <div className="border-r border-b">
                {twGroups.map((group) =>(
                    <>
                        {isEnabled(group) && (
                            <div key={group.label} className={`${gr===group.label?'bg-bluegray-300 text-gray-200':''} flex items-center capitalize cursor-pointer p-2 text-gray-700 text-base`} onClick={()=> setControl(group) }>
                                {group.label}
                                <FaChevronCircleRight className="absolute right-0 m-1"/>
                            </div>
                        )}
                    </>
                ))}
            </div>
            )}
            {controls!= null  && (
                <>
                <div className="bg-primary-400 text-gray-500 border-b border-gray-900 top-0 absolute w-full z-10 left-0 right-0 bottom-0">
                    <div className="bg-indigo-500 flex flex-row p-1 items-center capitalize cursor-pointer text-white" onClick={()=>{
                        setControls(null);
                        setInfo({
                            prop: 'customizeTab',
                            value: null
                        })
                    }}><FaMinus className={'mr-2'}/> {gr}</div>
                    {controls.map((c:any) => <div className={`capitalize ${c.hasOwnProperty('group')?'float-left my-4 mx-1':'p-2 flex flex-col clear-both'}`}>
                        <div key={Math.random() + '_' + editor.current.id}>
                            {c.name == 'Width' && (
                                <Width
                                    attr={c.attr}
                                    title={c.title}
                                    css={css}
                                    stitle={editor.current.style}
                                    icon={c.icon || null}
                                    //data={cssTw[control.attr]}
                                   // updateCss={c.updateCss}
                                />
                            )}
                        </div>
                        {/**component
                         :key="$randomID() + '_' + editor.current.id"
                         :is="control.name"
                         :attr="control.attr"
                         :title="control.title"
                         :css="$clean(css)"
                         :stile="editor.current.style"
                         :icon="control.icon||null"
                         v-model="cssTw[control.attr]"
                         @stile="stile"
                         @css="updateCss"**/}
                    </div>)}
                </div>

                </>
            )}
        </div>
    )
}
export default BlockTailwind;
