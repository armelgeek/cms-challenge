import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import { FaExpand } from 'react-icons/fa';
import Options from './Options';
const BordersWidth = ({ title, data, updateCss }: any) => {
    const [selected, setSelected] = useState({});
    const [isFull, setIsFull] = useState(true);
    const [options, setOptions] = useState([
        { label: 'sm', value: '1' },
        { label: 'md', value: '2' },
        { label: 'lg', value: '4' },
        { label: 'xl', value: '8' }
    ]);
    const option = (opt: any) => {
        if (!opt.hasOwnProperty('label')) {
            const strArr = opt.split('-');
            strArr.shift()
            const label = strArr.map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            if (opt.charAt(0) === '-') {
                return '-' + opt.split('-')[opt.split('-').length - 1]
            }
            return label;
        } else {
            return opt.label
        }
    }
    useEffect(() => {
        if (isFull) {
            let classe = data && data['borderTop'];
          
            let partieVoulue = classe ? classe.match(/-(\w+)$/) : null;
            let resultat = partieVoulue ? partieVoulue[1] : null;
            console.log(' resultat', resultat)
            
            setSelected(resultat);
        } else {

        }
    }, [isFull])

    return (
        <div className='flex-1 space-y-2'>
            <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
                <div className="flex flex-row-reverse justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-60 dark:text-opacity-60">
                    <div className="w-2/3 items-center">
                        <div className="w-full flex flex-col space-y-1">
                            <div className="flex items-center">
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide  min-w-0 highlight leading-5.5 text-xs border-md  bg-opacity-10">
                                        <div className="w-full flex gap-1">
                                            <select className="select select-sm bg-white" disabled={!isFull} onChange={(e) => {
                                                setSelected(e.target.value);
                                                setIsFull(true);
                                                updateCss('border-t-' + e.target.value, 'borderTop');
                                                updateCss('border-r-' + e.target.value, 'borderRight');
                                                updateCss('border-l-' + e.target.value, 'borderLeft');
                                                updateCss('border-b-' + e.target.value, 'borderBottom');
                                            }}>
                                                <option value="">-</option>
                                                {options.map((opt: any) => (
                                                    <>
                                                        {
                                                            option(opt) != "" && (
                                                                <option
                                                                    selected={opt.hasOwnProperty('label') ? opt.value == selected : opt == selected}
                                                                    value={`${opt.hasOwnProperty('label') ? opt.value : opt}`}>
                                                                    {option(opt)}
                                                                </option>
                                                            )
                                                        }
                                                    </>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => {

                                    if (isFull) {
                                        setIsFull(false);
                                    }
                                    else {
                                        setIsFull(true)
                                    };

                                }} className={`btn btn-sm border-none px-1 ${isFull ? '' : 'bg-primary-100'}`}>
                                    <FaExpand size={18} />
                                </button>

                            </div>

                        </div>
                        {!isFull && (
                            <div className="grid grid-cols-2 gap-1 mt-1">
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs border-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'borderTop'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                            <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Top </span>

                                        </div>

                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs border-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'borderRight'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                            <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Right</span>

                                        </div>

                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs border-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'borderBottom'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                            <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Bottom</span>

                                        </div>

                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs border-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'borderLeft'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                            <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Left</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}


                    </div>
                    <label className="w-1/3 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium panel-item-label text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60">
                        <span>Width</span>
                    </label>

                </div>
            </div>
        </div>
    )
}

export default BordersWidth;