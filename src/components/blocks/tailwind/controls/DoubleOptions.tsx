import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import Options from './Options';

const DoubleOptions = ({ title, option1, option2 }: any) => {

    return (
        <>

            <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
                <div className="flex flex-row-reverse justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-60 dark:text-opacity-60">
                    <div className="w-2/3 items-center">
                        <div className="gap-1 w-full max-w-full grid-cols-fit grid grid-flow-col">
                            <div className="w-full">

                                <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                    <div className="w-full flex flex-col gap-1">
                                        <div className="flex">
                                            {option1}
                                        </div>
                                      
                                    </div>
                                    <div className="w-full flex flex-col gap-1">
                                        <div className="flex">
                                            {option2}
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <label className='w-1/4 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium'>
                        <span>{title}</span>
                    </label>
                </div>
            </div>
        </>
    )
}
export default DoubleOptions;