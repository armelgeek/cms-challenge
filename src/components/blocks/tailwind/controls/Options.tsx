import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';

const Options = ({ title, data, attr, updateCss }: any) => {
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
        <div className="flex flex-col clear-both w-full">
            {/** <span className="uppercase font-bold" style={{
                fontSize: "10px"
            }}>{title || attr}</span> */}
            <select value={selected} className="select px-2 select-sm bg-white" onChange={(e) => {
                e.stopPropagation();
                setSelected(e.target.value);
                updateCss(e.target.value, attr);
            }}>
                <option value="">-</option>
                {options.map((opt: any,index:number) => (
                    <React.Fragment key={index}>
                        {
                            option(opt) != "" && (
                                <option
                                    value={`${opt.hasOwnProperty('label') ? opt.value : opt}`}>
                                    {option(opt)}
                                </option>
                            )
                        }
                    </React.Fragment>
                ))}

            </select>
        </div>
    )
}
export default Options;