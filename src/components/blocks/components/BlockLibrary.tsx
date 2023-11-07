import React, { useState } from 'react'
import Template from '../../../utils/tail/templates';
import { useDispatch, useGetter } from '../../../store';
const BlockLibrary = () => {
  let templates =new Template().templates;
  const [currentTemplate,setCurrentTemplate] = useState(null) as any;
  const editor = useGetter('editor', 'data', []);
  const setInfos = useDispatch('editor', 'setInfos');
  let templatesIcon= new Template().templatesIcon as any;
  const library=(name:string)=>{
    let curr = new Template().Build(name);
    setCurrentTemplate(curr);
    if (!curr ) return 
    curr.blocks.forEach ( (block:any) => {
        setInfos({
          'current.blocks':[...editor.current.blocks,block],
          'document.blocks': [...editor.document.blocks,block]
        })
    })
  }
  return (
    <>{templates && (
      <div className="relative min-h-screen top-0 mt-8 overflow-y-auto w-full">
         <div className="flex flex-wrap items-center justify-center cursor-pointer">
          {Object.keys(templatesIcon).map( (template:string) =>(
          <div 
          key={template} 
          className="bg-gray-100 m-1 hover:bg-gray-300 flex flex-col items-center h-16 w-16 ml-01 text-xs justify-center text-center text-gray-500 rounded hover:text-indigo-500 shadow" onClick={()=> library(templatesIcon[template].template)} title={template}>
          <span className="text-xs">{/**templatesIcon[template].icon**/}{template}</span>
      </div>
          ))}
         </div>
      </div>
    )}</>
  )
}
export default BlockLibrary;