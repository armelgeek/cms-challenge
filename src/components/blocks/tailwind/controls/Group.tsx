import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';

const Group = ({ title, data, attr, updateCss }: any) => {
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
            <select className="select select-sm bg-white" onChange={(e) => {
                setSelected(e.target.value);
                updateCss(e.target.value, attr);
            }}>
                <option value="">{title || attr}</option>
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
    )
}
export default Group;