import React, {useState} from 'react'
import _ from 'lodash';
import twClasses from "../../../../utils/scripts/tw.classes";

const Width = ({title, attr,data, updateCss}:any) => {
    const [model, setModel] = useState(!_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : {});
    console.log('width',model); 
    return (
        <div className="flex flex-col">
            <p className='uppercase font-bold' style={{
                fontSize: '10px',
            }}>{ title }</p>
            <select value={model}  className="select"  onChange={(e)=> {
                setModel(e.target.value);
                updateCss(e.target.value,attr);
            }}>
            <option value=""></option>
                {twClasses[`${attr}`].map((option:any) =>(
                    <option selected={option.value == model} key={`w-${attr}-${option.label}`} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
export default Width;
