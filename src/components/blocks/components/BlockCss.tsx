import React, { useState } from 'react'
import classes from '../../../utils/scripts/tw.classes';
import { useDispatch, useGetter } from '../../../store';

 const BlockCss = ({editor}:any) => {
  const [semantics,seSemantics] = useState(classes.semantics);
  return (
    <div className="flex flex-col w-full h-full items-start p-2 bg-bluegray-200">
    <label className="font-bold my-1">CSS</label>
    <textarea value={editor.css.css} className="text-sm font-mono w-full h-1/3 bg-white shadow p-1"/>
    <label className="font-bold my-1">Container CSS</label>
    <textarea value={editor.css.container} className="text-sm font-mono w-full h-20 bg-white shadow p-1"/>
    <label className="font-bold my-1">Style</label>
    <textarea value={editor.style} className="text-sm font-mono w-full h-1/6 bg-white shadow p-1"/>
    <label className="font-bold my-1">Semantic</label>
    <select value={editor.semantic} className="w-full mr-4">
        <option value=""></option>
        {semantics.map(semantic =>(
        <option key={semantic} value={semantic}>{semantic}</option>
        ))}
    </select>
</div>
  )
}
export default BlockCss;