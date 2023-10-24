
import React, {memo, } from 'react';
import {Link} from "react-router-dom";
const SubNavTree = memo(({title,icon=null, route,scope}:any) => {
    return (
        <ul className="sidebar-submenu">
            <Link to={route} className="sidebar-menu">
                {icon && <span className="sidebar-menu-icon"></span>}
                <span className={"sidebar-menu-text"}>{title}</span>
            </Link>
        </ul>
    )
})
export default  SubNavTree;