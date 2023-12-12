import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaChevronLeft, FaChevronRight, FaCircle, FaGgCircle } from 'react-icons/fa';
import { MdExpandLess } from 'react-icons/md';
import { removeLeadingNegativeSign } from '../../../../utils/functions';
import { FaArrowUp19, FaCircleNodes, FaRegCircleDot } from 'react-icons/fa6';

const Position = ({ title, data, attr, updateCss, selector }: any) => {
    const [selected, setSelected] = useState(!_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : {});
    const onPress = (value: any) => {
        setSelected(selector +'-' + value);
        updateCss(selector+'-' + value, attr);
    }
    return (
        <>
            <div className="grid grid-cols-3 gap-2 w-full">
                <button title={"top left"} onClick={() => onPress('left-top')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'left-top' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px -rotate-45" >
                        <FaArrowUp />
                    </span>
                </button>
                <button title={"top"} onClick={() => onPress('top')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'top' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px">
                        <FaArrowUp />
                    </span>
                </button>
                <button title={"top right"} onClick={() => onPress('right-top')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'right-top' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px  rotate-45">
                        <FaArrowUp />
                    </span>
                </button>
                <button title={"left"} onClick={() => onPress('left')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'left' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px ">
                        <FaArrowLeft />
                    </span>
                </button>
                <button title={"center"} onClick={() => onPress('center')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'center' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px">
                        <FaRegCircleDot />
                    </span>
                </button>
                <button title={"right"} onClick={() => onPress('right')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'right' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px ">
                        <FaArrowRight />
                    </span>
                </button>
                <button  title={"bottom left"} onClick={() => onPress('left-bottom')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'left-bottom' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px  -rotate-45">
                        <FaArrowLeft />
                    </span>
                </button>
                <button title={"bottom"} onClick={() => onPress('bottom')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'bottom' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px ">
                        <FaArrowDown />
                    </span>
                </button>
                <button title={"bottom right"} onClick={() => onPress('right-bottom')} className={` flex items-center justify-center  whitespace-nowrap text-gray-500 dark:text-gray-300 ${selected == selector+'-' + 'right-bottom' ? 'bg-primary-500 text-white' : 'bg-slate-300'} text-xs p-2 space-x-1 rounded-md leading-3.5 font-medium`} type="button">
                    <span className="icons m-px  rotate-45">
                        <FaArrowRight />
                    </span>
                </button>
            </div>
        </>
    )
}
export default Position;