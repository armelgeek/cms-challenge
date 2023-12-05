import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';

const Checkbox = ({ title, data, attr, updateCss }: any) => {
    const options: any = classes[attr];
    const [selected, setSelected] = useState(!_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] == options[0] : false);
    return (
        <div className="flex flex-row gap-2 items-center clear-both">
            <input
                type="checkbox" checked={selected} onChange={(e) => {
                    setSelected(e.target.checked);
                    if (e.target.checked) {

                        updateCss(options[0], attr);
                    } else {
                        updateCss('', attr);
                    }
                }}
            />
            <div className="mr-2">
                <span className="uppercase font-bold" style={{
                    fontSize: "10px"
                }}>{title || attr}</span>
            </div>
        </div>
    )
}
export default Checkbox;