import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import DoubleOptions from './DoubleOptions';
import Options from './Options';
import Button from './Button';

const TextStyle = ({ title, data, updateCss }: any) => {

    return (
        <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
            <div className="flex flex-col-reverse flex-wrap justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-60 dark:text-opacity-60">
                <div className="items-center">
                    <div className="gap-1 w-full max-w-full grid-cols-fit grid grid-flow-col">
                        <div className="w-full grid grid-cols-2 items-center">

                            <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                <div className="w-full flex flex-col gap-1">
                                    <Button
                                        attr={'italic'}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>

                            </div>
                            <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                <div className="w-full flex flex-col gap-1">
                                <Button
                                        attr={'underline'}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>
                            </div>
                            <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                <div className="w-full flex flex-col gap-1">
                                <Button
                                        attr={'uppercase'}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>
                            </div>
                            <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                <div className="w-full flex flex-col gap-1">
                                <Button
                                        attr={'lowercase'}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>
                            </div>
                            <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                <div className="w-full flex flex-col gap-1">
                                <Button
                                        attr={'capitalize'}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>
                            </div>
                            <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                <div className="w-full flex flex-col gap-1">
                                <Button
                                        attr={'line-through'}
                                        data={data}
                                        updateCss={updateCss}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <label className='py-0.5 text-xs leading-5.5 truncate pr-1 font-medium'>
                    <span>{title}</span>
                </label>
            </div>

        </div>


    )
}
export default TextStyle;