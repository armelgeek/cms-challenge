
import React, {memo, } from 'react';
const AppContainer = memo(({children}:any) => {
    return (
        <div className="Fade app_container flex h-full flex-col bg-slate-100 overflow-hidden dark:bg-blue-950">
            <div className="sidebar-content">
                {children}
            </div>
        </div>
    )
})
export default  AppContainer;