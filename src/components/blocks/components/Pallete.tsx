import React, { useState } from 'react'
import classes from '../../../utils/scripts/tw.classes';
const getColor = (n: number, color: string) => {
    return n === 1 ? 'bg-' + color + '-50' : 'bg-' + color + '-' + (n - 1) * 100
}

const Pallete = (props: any) => {
    const [options, setOptions] = useState(classes['colors']);
    console.log('colorss',options);
    return (
        <div className="fixed top-0 z-50 bg-gray-700 text-white p-2 w-full z-modal cursor-pointer right-0">
            <div className="flex flex-row justify-start">
                <div>
                    <div className="flex items-center mb-4  bordercolor-500">
                        Current
                        <div className={`${props.context ? props.css.replace('text-', 'bg-').replace('hover:', '') : ''}h-8 w-8 rounded-full ml-2`}></div>
                    </div>
                    <div className="flex flex-row m-auto mb-2">
                        <div className="material-icons border border-black text-xl font-bold rounded-full h-6 w-6 mr-2 bg-transparent text-red-500 flex items-center justify-center" title="transparent" onClick={() => props.setColor('')}></div>
                        <div className="border border-black rounded-full  w-6 h-6 mr-2 bg-white" title="white" onClick={() => props.setColor('white')}></div>
                        <div className="border border-black rounded-full  w-6 h-6 mr-2 bg-black" title="black" onClick={() => props.setColor('black')}></div>
                    </div>
                    <div className="m-auto">
                        {options.map((option, index) => (
                            <div key={'color_' + index} className="flex flex-row mb-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n, index) => (
                                    <div
                                        key={"density" + '_' + option + '_' + n} title={option + '-' + (n === 1 ? n * 50 : n * 100)}
                                        className={`${getColor(n, option) } rounded-full border border-black  w-5 h-5 mr-1`}
                                        onClick={() => props.setColor(option,n === 1 ? n * 50 : (n - 1) * 100)}
                                    >

                                    </div>
                                ))}

                            </div>
                        ))}
                        {props.field && (
                            <>
                                Image
                                {props.field.image && (
                                    <i className="material-icons text-white text-sm border rounded-full">add</i>
                                )}
                                {props.field.image && (
                                    <>
                                        <img src={props.field.image.url} />
                                        <span className="text-xs">Remove</span>
                                    </>
                                )}

                            </>
                        )}
                    </div>
                </div>
            </div>
            <button className="mt-1 xs" onClick={props.close}>OK</button>
        </div>
    )
}
export default Pallete;