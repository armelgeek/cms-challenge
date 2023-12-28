import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import Options from './Options';

const Spacing = ({ title, data, attr, updateCss }: any) => {

    return (
        <>
            <div className="flex-1 space-y-3 m-1">
                <div className="spacing-grid-controls">
                    <div className="relative row-start-1 col-start-1 col-span-5 row-span-5 rounded-xl bg-slate-200">
                        <button type="button" className='absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 block w-full top-0 text-primary-500 text-opacity-50 dark:text-gray-450'>
                            <div className=" h-1.5 border-t border-l border-r rounded-t-md w-full  border-dashed"></div>
                            <div className="p-0.5 absolute z-10 flex items-center bottom-0 left-0 right-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900">
                                </div>
                            </div>
                        </button>
                        <button type="button" className='absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 flex h-full right-0 top-0 text-primary-500 text-opacity-50 dark:text-gray-450'>
                            <div className=" h-1.5 border-t border-b border-r rounded-tr-md rounded-br-md  w-1.5 border-dashed">
                            </div>
                            <div className="p-0.5 absolute z-10 flex items-center h-full left-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900"></div>
                            </div>
                        </button>
                        <button type="button" className='absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 block w-full bottom-0 text-primary-500 text-opacity-50 dark:text-gray-450'>
                            <div className=" h-1.5 border-b border-l border-r rounded-b-md w-full  border-dashed">

                            </div>
                            <div className="p-0.5 absolute z-10 flex items-center top-0 left-0 right-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900"></div>
                            </div>
                        </button>
                        <button type="button" className="absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 flex h-full left-0 text-primary-500 text-opacity-50 dark:text-gray-450">
                            <div className=" h-1.5 border-t border-b border-l rounded-tl-md rounded-bl-md  w-1.5 border-dashed"></div>
                            <div className="p-0.5 absolute z-10 flex items-center h-full right-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900"></div>
                            </div>
                        </button>
                        <span className="absolute bottom-0 right-0 m-1 text-xs transform scale-90 text-primary-500 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3"> Margin </span>
                    </div>
                    <div className="relative row-start-2 col-start-2 col-span-3 row-span-3 bg-slate-100 shadow-sm">
                        <button type="button" className="absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 block w-full top-0 text-primary-500 text-opacity-50 dark:text-gray-450">
                            <div className=" h-1.5 border-t border-l border-r rounded-t-md w-full"></div>
                            <div className="p-0.5 absolute z-10 flex items-center bottom-0 left-0 right-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900"></div>
                            </div>
                        </button>
                        <button type="button" className="absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 flex h-full right-0 top-0 text-primary-500 text-opacity-50 dark:text-gray-450" >
                            <div className="border h-1.5 border-t border-b border-r rounded-tr-md rounded-br-md  w-1.5"></div>
                            <div className="p-0.5 absolute z-10 flex items-center h-full left-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900"></div>
                            </div>
                        </button>
                        <button type="button" className="absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 block w-full bottom-0 text-primary-500 text-opacity-50 dark:text-gray-450">
                            <div className=" h-1.5 border-b border-l border-r rounded-b-md w-full"></div>
                            <div className="p-0.5 absolute z-10 flex items-center top-0 left-0 right-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900">
                                </div>
                            </div>
                        </button>
                        <button type="button" className="absolute focus:outline-none hover:text-gray-350 z-10 hover:z-20 active:z-20 flex h-full left-0 text-gray-300 text-opacity-50 dark:text-gray-450"><div className="border-current h-1.5 border-t border-b border-l rounded-tl-md rounded-bl-md  w-1.5"></div>
                            <div className="p-0.5 absolute z-10 flex items-center h-full right-0">
                                <div className="h-2 w-2 border  mx-auto bg-primary-500 dark:bg-gray-900"></div>
                            </div>
                        </button>
                        <span className="absolute -bottom-2 right-0 m-1 text-xs transform scale-90 text-primary-500 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3"> Padding </span>
                    </div>
                    <div className="row-start-1 col-start-3 justify-self-center self-center">
                        <div className="relative inline-block my-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'marginTop'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-start-3 col-start-5 justify-self-center self-center">
                        <div className="relative inline-block mx-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'marginRight'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-start-5 col-start-3 justify-self-center self-center">
                        <div className="relative inline-block mx-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'marginBottom'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-start-3 col-start-1 justify-self-center self-center">
                        <div className="relative inline-block mx-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'marginLeft'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-start-2 col-start-3 justify-self-center self-center">
                        <div className="relative inline-block mx-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'paddingTop'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-start-3 col-start-4 justify-self-center self-center">
                        <div className="relative inline-block mx-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'paddingRight'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-start-4 col-start-3 justify-self-center self-center">
                        <div className="relative inline-block mx-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'paddingBottom'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-start-3 col-start-2 justify-self-center self-center">
                        <div className="relative inline-block mx-1.5">
                            <div className="w-[38px] flex">
                                <Options
                                    attr={'paddingLeft'}
                                    title={''}
                                    data={data}
                                    updateCss={updateCss}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-start-3  row-start-3 h-full p-0.5">
                        <div className="rounded bg-primary-500 dark:bg-gray-600 w-full h-full"></div>
                    </div>
                </div>
                <div className="flex items-end leading-none font-normal text-xxs text-gray-400 dark:text-gray-300 text-opacity-50  space-x-1">
                    <hr className='flex-1 border-current opacity-10' />
                </div>
                <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
                    <div className="flex flex-row-reverse justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-60 dark:text-opacity-60">
                        <div className="w-2/3 items-center">
                            <div className="gap-1 w-full max-w-full grid-cols-fit grid grid-flow-col">
                                <div className="w-full">

                                    <div className="relative flex w-full max-w-full  gap-2 min-w-0 highlight leading-5.5 text-xs rounded-md bg-opacity-10">

                                        <div className="w-full flex flex-col gap-1">
                                            <div className="flex">
                                                <Options
                                                    attr={'spacingx'}
                                                    title={''}
                                                    data={data}
                                                    updateCss={updateCss}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Horizontally</span>
                                        </div>
                                        <div className="w-full flex flex-col gap-1">
                                            <div className="flex">
                                                <Options
                                                    attr={'spacingy'}
                                                    title={''}
                                                    data={data}
                                                    updateCss={updateCss}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-900 dark:text-white text-opacity-60 dark:text-opacity-60 leading-3 mt-1">Vertically</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        <label className='w-1/4 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium'>
                                <span>Children</span>
                            </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Spacing;