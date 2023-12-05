import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useGetter } from "../../../store";
import twGroups from "../../../utils/scripts/tw.groups";
import { FaAngleLeft, FaAngleRight, FaChevronCircleRight, FaMinus } from "react-icons/fa";
import Width from "../../../components/blocks/tailwind/controls/Width";
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
import DecorationColor from './controls/DecorationColor';
import DivideColor from './controls/DivideColor';
import OutlineColor from './controls/OutlineColor';
import RingColor from './controls/RingColor';
import RingOffsetColor from './controls/RingOffsetColor';
import ShadowColor from './controls/ShadowColor';
import CaretColor from './controls/CaretColor';
import AccentColor from './controls/AccentColor';
import BlockCss from '../components/BlockCss';
import BlockIconify from '../components/BlockIconify';
const BlockTailwind = ({ css, cid }: any) => {
    const [gr, setGr] = useState('');
    const [controls, setControls] = useState(null) as any;
    const editor = useGetter('editor', 'data', []);
    const desktop = useGetter('desktop', 'data', []);
    const setInfo = useDispatch('editor', 'setInfo');
    const updateBlockStyle = useDispatch('editor', 'updateBlockStyle');
    console.log('editor', editor);
    const setControl = useCallback((group: any) => {
        setGr(group.label);
        setInfo({
            prop: 'customizeTab',
            value: group
        })
        setControls(group.components);
        css = editor.current.css.css
    }, [])
    const updateCss = useCallback((classe: any, attr: any) => {
        editor.current.cssObject[`${desktop.mode}`] = {
            ...editor.current.cssObject[`${desktop.mode}`],
            [attr]: classe
        };
        if (cid === editor.current.id) {
            updateBlockStyle(editor.current.cssObject);
        }
    }, [editor.current, desktop.mode])
    const isEnabled = (group: any) => {
        if (group.filter) {
            return group.filter.includes(editor.current.tag)
        }
        return true
    }
    useEffect(() => {
        setControls(null);
    }, [cid]);
    console.log('controls', controls);
    return (
        <div className="relative z-highest h-full">
            {editor.current && (
                <div className="mx-1 my-1">
                    {twGroups.map((group) => (
                        <>
                            {isEnabled(group) && (
                                <div key={group.label} className={`${gr === group.label ? 'bg-primary-500 text-white' : ''} flex flex-row justify-between items-center capitalize cursor-pointer py-1 text-gray-700 text-base`} onClick={() => setControl(group)}>
                                    <div className="bt-label text-base">{group.label}</div>
                                    <div className="bt-icon">
                                        <FaAngleRight />
                                    </div>

                                </div>
                            )}
                        </>
                    ))}
                </div>
            )}
            {controls != null && (
                <>
                    <div className="bg-slate-100 border text-gray-500  top-0 absolute w-full z-10 left-0 right-0 bottom-0">
                        <div className="bg-primary-500 flex flex-row py-1 mx-1 px-1 items-center capitalize cursor-pointer text-white" onClick={() => {
                            setControls(null);
                            setInfo({
                                prop: 'customizeTab',
                                value: null
                            })
                        }}><FaAngleLeft className={'mr-1'} /> {gr}</div>
                        <div className={`grid grid-cols-${gr == 'Advanced' ? 1 : 2} gap-y-1 content-center mx-2 mb-1`}>
                            {controls.map((c: any) => <div className={`capitalize ${c.hasOwnProperty('group') ? 'float-left my-4 mx-1' : 'py-1 px-2 flex flex-col clear-both'}`}>
                                <div key={Math.random() + '_' + editor.current.id}>
                                    {c.name == 'icon' && (
                                        <BlockIconify />
                                    )}
                                    {c.name == 'Css' && (
                                        <BlockCss />
                                    )}
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
                                        <Options
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
                                    {c.name == "RingColor" && (
                                        <RingColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "ShadowColor" && (
                                        <ShadowColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "CaretColor" && (
                                        <CaretColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "AccentColor" && (
                                        <AccentColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "DecorationColor" && (
                                        <DecorationColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "RingOffsetColor" && (
                                        <RingOffsetColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == 'OutlineColor' && (
                                        <OutlineColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "DivideColor" && (
                                        <DivideColor
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
                            </div>)}
                        </div>
                    </div>

                </>
            )}
        </div>
    )
}
export default BlockTailwind;
