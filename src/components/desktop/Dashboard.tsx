import React, { useState } from 'react'
import { useDispatch } from '../../store';

export const Dashboard = () => {
    const [menus, setMenus] = useState([
        { label: 'New template', icon: 'emojione-monotone:new-button', action: 'startEmpty' },
        { label: 'UI Kit', icon: 'mdi:widgets-outline', action: 'UIKit' },
        { label: 'Templates', icon: 'la:elementor', action: 'pages' },
        { label: 'Settings', icon: 'carbon:settings-adjust', action: 'settings' },
        { label: 'Github', icon: 'bi:github', action: 'linkToGithub' },
        { label: 'Docs', icon: 'mdi:help', action: 'help' }
    ])
    const resetTab = useDispatch('desktop','resetTab');
    return (
        <div className="flex flex-wrap p-8 items-center justify-center" onClick={resetTab}>
            {menus.map((menu,index) =>(
            <div className="w-20 h-20 flex flex-col items-center justify-center shadow-xl bg-gray-700 rounded text-gray-500 m-4 hover:text-gray-400 cursor-pointer" title={menu.label} onClick={()=>openDialog(menu)} key={menu.label}>
                    <div className="text-3xl">{menu.icon}</div>
                    <div>{ menu.label }</div>
            </div>
            ))}
           
    </div>
    )
}
