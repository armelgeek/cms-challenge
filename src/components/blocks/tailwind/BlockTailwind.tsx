import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useGetter } from "../../../store";
import twGroups from "../../../utils/scripts/tw.groups";
import { FaChevronCircleRight, FaMinus } from "react-icons/fa";
import Width from "../../../components/blocks/tailwind/controls/Width";
import { clean, removeClassesByType } from '../../../utils/functions';
import Range from './controls/Range';
import Options from './controls/Options';
import Position from './controls/Position';
import Checkbox from './controls/Checkbox';
import Button from './controls/Button';
import Height from './controls/Height';
import Color from './controls/Color';
import BorderColor from './controls/BorderColor';
import TextFont from './controls/TextFont';
import BgPosition from './controls/BgPosition';
import BgGradient from './controls/BgGradient';
import BgGradientPresets from './controls/BgGradientPresets';
import BgColor from './controls/BgColor';
const BlockTailwind = ({ css, cid }: any) => {
    const [gr, setGr] = useState('');
    const [controls, setControls] = useState(null) as any;
    const editor = useGetter('editor', 'data', []);
    const desktop = useGetter('desktop', 'data', []);
    const setInfo = useDispatch('editor', 'setInfo');
    const updateBlockStyle = useDispatch('editor', 'updateBlockStyle');
    const setControl = useCallback((group: any) => {
        setGr(group.label);
        setInfo({
            prop: 'customizeTab',
            value: group
        })
        setControls(group.components);
        css = editor.current.css.css
    }, [])
    console.log('desktoptop',desktop)
    const updateCss = useCallback((classe: any, attr: any) => {
        console.log('update css leka', editor.current.cssObject[`${desktop.mode}`],classe,attr,cid === editor.current.id);
        editor.current.cssObject[`${desktop.mode}`] = {
            ...editor.current.cssObject[`${desktop.mode}`],
            [attr]: classe
        };
        if (cid === editor.current.id) {
            updateBlockStyle(editor.current.cssObject);
        }
    }, [editor.current,desktop.mode])
    const isEnabled = (group: any) => {
        if (group.filter) {
            return group.filter.includes(editor.current.tag)
        }
        return true
    }
    //console.log('blockblocks',editor.document.blocks);
    useEffect(() => {
        setControls(null);
    }, [cid]);
    console.log('controls', controls);
    return (
        <div className="relative z-highest h-full">
            {editor.current && (
                <div className="border-r border-b">
                    {twGroups.map((group) => (
                        <>
                            {isEnabled(group) && (
                                <div key={group.label} className={`${gr === group.label ? 'bg-bluegray-300 text-gray-200' : ''} flex items-center capitalize cursor-pointer p-2 text-gray-700 text-base`} onClick={() => setControl(group)}>
                                    {group.label}
                                    <FaChevronCircleRight className="absolute right-0 m-1" />
                                </div>
                            )}
                        </>
                    ))}
                </div>
            )}
            {controls != null && (
                <>
                    <div className="bg-primary-400 text-gray-500 border-b border-gray-900 top-0 absolute w-full z-10 left-0 right-0 bottom-0">
                        <div className="bg-indigo-500 flex flex-row p-1 items-center capitalize cursor-pointer text-white" onClick={() => {
                            setControls(null);
                            setInfo({
                                prop: 'customizeTab',
                                value: null
                            })
                        }}><FaMinus className={'mr-2'} /> {gr}</div>
                        {controls.map((c: any) => <div className={`capitalize ${c.hasOwnProperty('group') ? 'float-left my-4 mx-1' : 'p-2 flex flex-col clear-both'}`}>
                            <div key={Math.random() + '_' + editor.current.id}>
                                {c.name == 'Width' && (
                                    <Width
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == 'Height' && (
                                    <Height
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == 'Range' && (
                                    <Range
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == 'Options' && (
                                    <Options
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "Position" && (
                                    <Position
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "Checkbox" && (
                                    <Checkbox
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "Button" && (
                                    <Button
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "Color" && (
                                    <Color
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "BorderColor" && (
                                    <BorderColor
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "TextFont" && (
                                    <TextFont
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "BgPosition" && (
                                    <BgPosition
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "BgGradient" && (
                                    <BgGradient
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "BgGradientPresets" && (
                                    <BgGradientPresets
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
                                    />
                                )}
                                {c.name == "BgColor" && (
                                    <BgColor
                                        attr={c.attr}
                                        title={c.title}
                                        data={editor.current.cssObject[`${desktop.mode}`]}
                                        stitle={editor.current.style}
                                        icon={c.icon || null}
                                        updateCss={updateCss}
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
