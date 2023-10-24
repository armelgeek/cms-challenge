import React, {memo, } from 'react';
import SidebarHeader from "./SidebarHeader";
const Sidebar = memo(({children}:any) => {
    return (
        <div className="sidebar shadow-lg  border-slate-500 border border-t-0 border-l-0 border-b-0 border-r-0 bg-dark-900">
           {/** <SidebarHeader/> */}
            <div className="sidebar-content relative">
                {children}
              
            </div>
            <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-dark-700 ">
                <p className='text-white text-sm'>Mis en cache de la musique ....</p>
            </div>
        </div>
    )
})
export default  Sidebar;