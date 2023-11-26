import React from 'react'

const DesktopSidebarLeft = () => {
    return (
        <div className="  fixed bottom-0 w-full flex flex-row items-center pt-2  gap-5 bg-purple-900 text-white cursor-pointer">
            <div className="icon-button mb-2">Dashboard</div>
            <div className="icon-button mb-2">New template</div>
            <div className="icon-button mb-2">UI Kit</div>
            <div className="icon-button mb-2">Templates</div>
            <div className="icon-button mb-2">Settings</div>
        </div>
    )
}

export default DesktopSidebarLeft;