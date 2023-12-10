import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../store/Provider/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import { FiInfo, FiLogOut, FiUser } from "react-icons/fi";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
const Account = () => {
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();
 
  const handleLogout = useCallback(() => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/login");
  }, []);
  const handleShowProfile = useCallback(() => {
    history.push("/account");
  }, []);
  return (
    <div className="dropdown_container">
      <Menu
        arrow={true}
        menuButton={
          <MenuButton>
            <div
              className="group relative flex items-center gap-x-1.5"

            >
              <div className="avatar avatar-circle avatar-indicator avatar-indicator-online">
                <img
                  className="avatar-img group-focus-within:ring group-focus-within:ring-primary-500"
                  src="/images/avatar1.png"
                  alt="Avatar 1"
                />
              </div>
            </div>
          </MenuButton>
        }
        direction={"bottom"}
        viewScroll={"close"}
        position={"anchor"}
        transition
      >
        <MenuItem onClick={handleShowProfile}>
          <span>Profile</span>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <span>Déconnexion</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Account;
