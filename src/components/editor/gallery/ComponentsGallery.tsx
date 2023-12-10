import React, { useState } from 'react'

const ComponentsGallery = ({ kit, skip, limit, addKitBlockInPage, editKitBlockInPage }: any) => {
    
    return (
        <div className="flex w-full px-2 flex-col flex-wrap cursor-pointer overflow-y-auto z-highest transition-all duration-500 my-1">
            {Array.isArray(kit.json.templates) && kit.json.templates.map((p: any, index: any) => (
                <GalleryDetail
                    index={index}
                    p={p}
                    addKit={addKitBlockInPage}
                    editKit={editKitBlockInPage}
                />)
            )}
        </div>
    )
} 
const GalleryDetail = ({ index, p, addKit, editKit }: any) => {
   
    return (
        <div key={index} className="relative border shadow rounded my-2" title={p.name} >
            {p.image && (
                <div className="flex flex-col items-center justify-center py-4">
                    <img src={p.image} className="w-full" width={120} height={120} />
                </div>
            )}
            <div className="w-full p-1 bg-gray-200 text-black mt-1">{p.name}</div>
            <div className="bg-white hover:bg-opacity-50 hover:opacity-100 flex flex-row items-center justify-around">
                <button className="btn btn-purple hover:bg-purple-300 rounded border-0 w-24" onClick={() => addKit(p)} >Add</button>
                <button className="btn btn-purple hover:bg-purple-300 rounded border-0 w-24" onClick={() => editKit(p)} >Edit</button>
            </div>
        </div>
    )
}
export default ComponentsGallery;