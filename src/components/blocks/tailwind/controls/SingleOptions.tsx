import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import Position from './Position';

const SingleOptions = ({ title, data, attr, updateCss, prefix = '' }: any) => {
    const [selected, setSelected] = useState(!_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : {});
    const options = classes[attr];
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
    return (
        <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
            <div className="flex flex-row-reverse justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-80 dark:text-opacity-80">
                <div className="w-2/3 items-center">
                    <div className="w-full space-y-1">
                        <div className="relative flex  gap-2 flex-col w-full max-w-full tracking-wide  min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
                            <div className="w-full flex gap-1">
                                <select className="select select-sm  bg-white" onChange={(e) => {
                                    e.stopPropagation();
                                    setSelected(e.target.value);
                                    updateCss(e.target.value, attr);
                                }}>
                                    <option value="">-</option>
                                    {options.map((opt: any) => (
                                        <>
                                            {
                                                option(opt) != "" && (
                                                    <option
                                                        selected={opt.hasOwnProperty('label') ? opt.value == selected : opt == selected}
                                                        value={`${opt.hasOwnProperty('label') ? opt.value : opt}`}>
                                                        {option(opt) + prefix}
                                                    </option>
                                                )
                                            }
                                        </>
                                    ))}

                                </select>

                            </div>
                            {attr == 'objectfit' && (
                                <div className="w-full">
                                    <Position
                                        attr={'objectposition'}
                                        title={''}
                                        selector={"object"}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <label title={title} className='w-1/3 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium'>
                    {title || attr}
                </label>
            </div>
        </div>
    )
}
export default SingleOptions;