import React from 'react'
 const BlockIFrame = ({element,classe,setCurrent}:any) => {
  return element.content && (
    <>

    <iframe 
        key={element.id}
        src={element.src + element.content} 
        className={classe()} 
        //autoplay={el.hasOwnProperty('options')?el.options.autoplay:true} 
        //controls={el.hasOwnProperty('options')?el.options.controls:true}
        //loop={el.hasOwnProperty('options')?el.options.loop:true}
        onClick={()=>setCurrent(element)}
        data-element-tag={element.tag}>
    </iframe>
    </>
  )
}
export default BlockIFrame;
