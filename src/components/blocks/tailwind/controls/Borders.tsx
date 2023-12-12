import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import { FaExpand } from 'react-icons/fa';
import Options from './Options';
const Borders = ({ title, data, updateCss }: any) => {
    const [selected, setSelected] = useState({});
    const [isFull, setIsFull] = useState(false);
    const [options, setOptions] = useState([
        { label: 'none', value: 'none' },
        { label: 'sm', value: 'sm' },
        { label: 'rounded', value: 'rounded' },
        { label: 'md', value: 'md' },
        { label: 'lg', value: 'lg' },
        { label: 'xl', value: 'xl' },
        { label: '2xl', value: '2xl' },
        { label: '3xl', value: '3xl' },
        { label: '3xl', value: '3xl' },
        { label: 'full', value: 'full' }
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
            let classe = data && data['roundedtl'];
            let partieVoulue = classe ? classe.match(/-(\w+)$/) : null;
            let resultat = partieVoulue ? partieVoulue[1] : null;
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
                                    <div className="relative flex w-full max-w-full tracking-wide  min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
                                        <div className="w-full flex gap-1">
                                            <select className="select select-sm bg-white" disabled={!isFull} onChange={(e) => {
                                                setSelected(e.target.value);
                                                setIsFull(true);
                                                updateCss('rounded-tl-' + e.target.value, 'roundedtl');
                                                updateCss('rounded-tr-' + e.target.value, 'roundedtr');
                                                updateCss('rounded-bl-' + e.target.value, 'roundedbl');
                                                updateCss('rounded-br-' + e.target.value, 'roundedbr');
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

                                }} className={`btn btn-sm rounded-none px-1 ${isFull ? '' : 'bg-primary-100'}`}>
                                    <FaExpand size={18} />
                                </button>

                            </div>

                        </div>
                        {!isFull && (
                            <div className="grid grid-cols-2 gap-1 mt-1">
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'roundedtl'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                             <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Top left</span>
                                        
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'roundedtr'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                             <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Top Right</span>
                                        
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'roundedbl'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                             <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Bottom Left</span>
                                        
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="relative flex w-full max-w-full tracking-wide min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
                                        <div className="w-full  flex-col flex gap-1">
                                            <Options
                                                attr={'roundedbr'}
                                                title={''}
                                                data={data}
                                                updateCss={updateCss}
                                            />
                                             <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Bott. Right</span>
                                        
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>
                    <label className="w-1/3 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium panel-item-label text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60">
                        <span>Radius</span>
                    </label>

                </div>
            </div>
        </div>
    )
}

export default Borders;