import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';

const Options = ({ title, data, attr,updateCss }: any) => {
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
        <div className="flex flex-col clear-both">
            <span className="capitalize">{title || attr}</span>
            <select className="w-full bg-white text-black p-1" onChange={(e)=> {
                    setSelected(e.target.value);
                    updateCss(e.target.value,attr);
                }}>
                <option value=""></option>
                {options.map((opt: any) => (
                    <option 
                        selected={opt.hasOwnProperty('label') ? opt.value == selected : opt == selected} 
                        value={`${opt.hasOwnProperty('label') ? opt.value : opt}`}>
                        {option(opt)}
                    </option>
                ))}

            </select>
        </div>
    )
}
export default Options;