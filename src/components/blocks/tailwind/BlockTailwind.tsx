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
import Group from './controls/Group';
import SingleOptions from './controls/SingleOptions';
import Spacing from './controls/Spacing';
import TextSpacing from './controls/TextSpacing';
import TextStyle from './controls/TextStyle';
import Borders from './controls/Borders';
import BordersWidth from './controls/BordersWidth';
import { Partial } from './controls/Partial';
import DividerWidth from './controls/DividerWidth';
import Placement from './controls/Placement';
import Scale from './controls/Scale';
import Move from './controls/Move';
import Skew from './controls/Skew';
import { Origin } from './controls/Origin';
import Display from './controls/Display';
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
        editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`] = {
            ...editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`],
            [attr]: classe
        };
        if (cid === editor.current.id) {
            updateBlockStyle(editor.current.cssObject);
        }
    }, [editor.current, desktop.mode,desktop.state])
    const isEnabled = (group: any) => {
        if (group.filter) {
            return group.filter.includes(editor.current.tag)
        }
        return true
    }
    useEffect(() => {
        setControls(null);
    }, [cid]);
    return (
        <>
            {editor.current && (
                <>
                    {twGroups.map((group) => (
                        <>
                            {isEnabled(group) && (
                                <div key={group.label} className={` py-1 border-b border-gray-200 dark:border-gray-700 px-3 ${gr === group.label ? 'bg-primary-500 text-white' : ''} flex flex-row justify-between items-center capitalize cursor-pointer py-1 text-gray-700 text-base`} onClick={(e) => {setControl(group)}}>
                                    <div className="text-gray-900 dark:text-white text-xs font-medium tracking-wide flex justify-between items-center -mb-3 cursor-pointer px-3 py-2.5 -mx-3 -mt-3">
                                        <div className={`flex items-center leading-7 text-sm  py-px  ${gr === group.label ? 'text-white' : ''}`}>
                                            <div className="icons  mr-1">
                                                <FaAngleRight className='text-slate-300' />
                                            </div>
                                            <span className={`${gr === group.label ? 'text-white' : 'text-slate-600'}`}>{group.label}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                </>
            )}
            {controls != null && (
                <>
                    <div className="bg-white  text-gray-500  top-0 absolute w-full z-10 left-0 right-0 bottom-0">
                        <div className="text-gray-900 sticky top-0 z-40 bg-primary-500  dark:text-white text-xs font-medium tracking-wide flex justify-between items-center cursor-pointer py-1 px-3">
                            <div className="flex flex-row  text-sm items-center capitalize leading-7 py-px   text-white dark:text-gray-400 mr-1" onClick={() => {
                                setControls(null);
                                setInfo({
                                    prop: 'customizeTab',
                                    value: null
                                })
                            }}><FaAngleLeft className={'mr-1'} /> {gr}</div>
                        </div>
                        <>
                            {controls.map((c: any) => <div className={`p-3 capitalize ${c.hasOwnProperty('group') ? 'float-left my-4 mx-1' : 'py-1 px-2 flex flex-col clear-both'}`}>
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
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == 'Height' && (
                                        <Height
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}

                                    {c.name == 'SingleOptions' && (
                                        <SingleOptions
                                            attr={c.attr}
                                            title={c.title}
                                            prefix={c.prefix || ''}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == 'Group' && (
                                        <Group
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == 'Spacing' && (
                                        <Spacing
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == 'Range' && (
                                        <Options
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == 'Options' && (
                                        <Options
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Position" && (
                                        <Position
                                            attr={c.attr}
                                            title={c.title}
                                            selector={c.selector}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Checkbox" && (
                                        <Checkbox
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Button" && (
                                        <Button
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Color" && (
                                        <Color
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "RingColor" && (
                                        <RingColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "ShadowColor" && (
                                        <ShadowColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "CaretColor" && (
                                        <CaretColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "AccentColor" && (
                                        <AccentColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "DecorationColor" && (
                                        <DecorationColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "RingOffsetColor" && (
                                        <RingOffsetColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == 'OutlineColor' && (
                                        <OutlineColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "DivideColor" && (
                                        <DivideColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "BorderColor" && (
                                        <BorderColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "TextFont" && (
                                        <TextFont
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.font}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "BgPosition" && (
                                        <BgPosition
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "BgGradient" && (
                                        <BgGradient
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "BgGradientPresets" && (
                                        <BgGradientPresets
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "BgColor" && (
                                        <BgColor
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            stitle={editor.current.style}
                                            icon={c.icon || null}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "TextSpacing" && (
                                        <TextSpacing
                                            title={'Spacing'}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "TextStyle" && (
                                        <TextStyle
                                            title={'Style'}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Borders" && (
                                        <Borders
                                            title={''}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "BordersWidth" && (
                                        <BordersWidth
                                            title={''}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Partial" && (
                                        <Partial title={c.title} />

                                    )}

                                    {c.name == "DividerWidth" && (
                                        <DividerWidth
                                            title={'DividerWidth'}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Placement" && (
                                        <Placement
                                            title={'Placement'}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Scale" && (
                                        <Scale
                                            title={'Scale'}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Move" && (
                                        <Move
                                            title={'Move'}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Skew" && (
                                        <Skew
                                            title={'Skew'}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Origin" && (
                                        <Origin
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}
                                    {c.name == "Display" && (
                                        <Display
                                            attr={c.attr}
                                            title={c.title}
                                            data={editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`]}
                                            updateCss={updateCss}
                                        />
                                    )}

                                </div>
                            </div>)}
                        </>
                    </div>
                </>
            )}
        </>
    )
}
export default BlockTailwind;
