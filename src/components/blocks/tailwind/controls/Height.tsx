import React, { useState } from 'react'
import _ from 'lodash';
import Options from './Options';

const Height = ({ title, attr, data, updateCss }: any) => {
    return (
        <div className="flex-1 space-y-2 w-full">
            <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
                <div className="flex flex-row-reverse justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-60 dark:text-opacity-60">
                    <div className="w-2/3 items-center">
                        <div className="w-full space-y-1">
                            <div className="relative flex  gap-2 flex-col w-full max-w-full tracking-wide  min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
                                <div className="w-full flex gap-1">
                                    <Options
                                        attr={attr}
                                        title={title}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>
                                <div className="w-full flex gap-2">
                                    <div className="flex flex-col">
                                        <Options
                                            attr={'minHeight'}
                                            title={'min'}
                                            data={data}
                                            updateCss={updateCss}
                                        />
                                         <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Min</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <Options
                                            attr={'maxHeight'}
                                            title={'max'}
                                            data={data}
                                            updateCss={updateCss}
                                        />
                                         <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Max</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <label className="w-1/4 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium panel-item-label text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60">
                        <p className='text-xs'>{title}</p>
                    </label>
                </div>
            </div>

            {/**<select value={model} className="select" onChange={(e) => {
                setModel(e.target.value);
                updateCss(e.target.value, attr);
            }}>
                <option value="">-</option>
                {twClasses[`${attr}`].map((option: any) => (
                    <option selected={option.value == model} key={`w-${attr}-${option.label}`} value={option.value}>{option.label}</option>
                ))}
                </select>**/}
        </div>
    )
}
export default Height;
