
import React, {memo, } from 'react';
import {Link, useLocation} from "react-router-dom";
import {FiChevronDown, FiCircle} from "react-icons/fi";
const NavTree = memo(({title, route,scope,children}:any) => {
    const location = useLocation();
    const isActive = location.pathname == route;
    return (
        <div className={"ml-3 my-3 mr-3"}>
            <Link  to={route} className={`sidebar-menu ${isActive ? 'active' : ''}`}>
                <span className="sidebar-menu-icon">{children ? children: <FiCircle size={16}/>}</span>
                <span className={"sidebar-menu-text font-medium text-base"}>{title}</span>
            </Link>
        </div>
    )
})
export default  NavTree;