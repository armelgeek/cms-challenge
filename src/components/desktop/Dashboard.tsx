import React, { useCallback, useState } from 'react'
import { useDispatch } from '../../store';
import { Link, useHistory } from 'react-router-dom';
import Element from '../../utils/tail/element';
import FontPicker from "react-fontpicker-ts";

export const Dashboard = () => {
    const history = useHistory();
    const createEmptyBlock = useDispatch('editor','createEmptyBlock');
    const groups = new Element().Groups()
    const dispatch = useDispatch('editor','setInfo');
    const [menus, setMenus] = useState([
        { id:1,label: 'New template', action: '/editor' },
        { id:2,label: 'UI Kit', action: '/uikit' },
        { id:3,label: 'Templates', action: 'pages' },
        { id:3,label: 'Settings', action: 'settings' },
        { id:4,label: 'Github', action: 'linkToGithub' },
        { id:5,label: 'Docs', action: 'help' }
    ])
    const resetTab = useDispatch('desktop','resetTab');
    const openDialog = useCallback((menu:any)=>{
            if(menu.id == 1){
                createEmptyBlock();
                dispatch({
                    prop:'elements',
                    value:groups 
                })
                history.push('/editor');
            }else if(menu.id == 2){
                history.push('/uikit');
            }
    },[])
    return (
        <>
          <div className="flex flex-wrap p-8 items-center justify-center">
                {menus.map((menu,index) =>(
                <div className="w-20 h-20 flex flex-col items-center justify-center shadow-xl bg-gray-700 rounded text-gray-500 m-4 hover:text-gray-400 cursor-pointer" title={menu.label} onClick={()=> openDialog(menu)} key={menu.label}>
                        { menu.label }
                </div>
                ))}
    </div>
        </>
    )
}
