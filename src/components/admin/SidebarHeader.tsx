
import React, {memo, } from 'react';
import { FiArrowLeft, FiArrowRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
const Sidebar = memo(({icon=null,children}:any) => {
    return (
        <div className="sidebar-header bg-dark-900 shadow-lg  border border-t-0 border-l-0 border-r-0  border-slate-500 flex flex-row justify-between">
            <div className="sidebar-logo-text">
              <h1 className="flex text-xl">
                    <span className="font-bold dark:text-slate-800 uppercase text-primary-500"> Tia </span>
                    <span className="font-semibold text-slate-200 uppercase ">Kalo</span>
                </h1>
            </div>
            <div className="flex flex-row justify-between">
                    <FiChevronsLeft size={20} className='mr-2 text-slate-100'/>
                    <FiChevronsRight size={20} className='text-slate-100'/>
              </div>
        </div>
    )
})
export default  Sidebar;