import React from 'react'
import { useGetter } from '../../store'

const AddToUIKit = ({ uiks, setInfos }: any) => {
    const desktop = useGetter('desktop', 'data', []);
    return (
        <>
            <label className='font-bold'>Nom</label>
            <input className='input-control' value={desktop.library.name} onChange={(e) => {
                setInfos({
                    'library.name': e.target.value,
                })
            }} />
            <label  className='font-bold'>Category</label>
            <select className="select" onChange={(e: any) => {
                
                setInfos({
                    'library.id': uiks[e.target.value].category_kit_id,
                    'library.templates': uiks[e.target.value].json ? uiks[e.target.value].json.templates : []
                })
               
            }}>
                <option value=""></option>
                {uiks.map((uik: any, i: number) => (
                    <option key={i} value={i}>{uik.name}</option>
                ))}

            </select>
            <label  className='font-bold'>Description</label>
            <textarea
                className="input bg-slate-100"

                onChange={(e) => {
                    setInfos({
                        'library.description': e.target.value,
                    })
                }}
            >{desktop.library.description}</textarea>
        </>
    )
}
export default AddToUIKit;
