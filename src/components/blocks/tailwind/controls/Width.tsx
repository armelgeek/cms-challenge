import React, {useState} from 'react'
import twClasses from "../../../../utils/scripts/tw.classes";

const Width = ({title, attr,css}:any) => {
    const [model, setModel] = useState('');
    return (
        <div className="flex flex-col">
            { title }
            <select className="w-full nodark"  onChange={(e)=> setModel(e.target.value)}>
            <option value=""></option>
                {twClasses[`${attr}`].map((option:any) =>(
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
export default Width;
