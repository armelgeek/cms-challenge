import React, { memo } from 'react'
import { CgClose } from 'react-icons/cg';
const Modal = ({ children, title, show, setShow, onSubmit, canSubmit }: any) => {
    return (
        <div className={`modal modal-sm ${show ? 'show flex' : ''} modal-centered`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-primary-600">
                        <div className="flex items-center justify-between">
                            <h6 className=' text-white'>{title}</h6>
                            <div
                                className='mr-2 cursor-pointer'
                                onClick={() => setShow((show: any) => !show)}
                                data-dismiss="modal"
                            >
                                <CgClose className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer flex flex-row justify-start gap-3">
                        <button disabled={!canSubmit} className="btn rounded-md border bg-primary-500 text-white btn-sm" onClick={() => {
                            onSubmit();
                            setShow((show: any) => !show);
                        }}>Enregistrer</button>
                        <button className="btn rounded-md border bg-white text-black btn-sm" onClick={() => setShow((show: any) => !show)}>Annuler</button>
                    </div>
                </div>
            </div>
            {show && (<div className="modal-backdrop show"></div>)}

        </div>
    )
}
export default Modal;