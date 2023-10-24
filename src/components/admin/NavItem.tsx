import React, { memo } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
const NavItem = memo(({ title, icon = null, route, scope }: any) => {
  return <div className="sidebar-menu-header flex flex-row justify-between items-center font-semibold opacity-60">
    <div>{title}</div>
  </div>;
});
export default NavItem;
