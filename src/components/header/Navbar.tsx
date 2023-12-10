import React, { useContext, useState } from "react";
import ThemeSwicther from "./ThemeSwitcher";
import Account from "./Account";
import { AuthContext } from "../../store/Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { PiFlowerLotusFill } from "react-icons/pi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(AuthContext);
  return (
    <>
      <header className="sticky top-0 z-40 ">
        <nav className="h-14 w-full bg-white shadow-sm px-auto px-28">
          <div className="flex h-14 items-center justify-between text-center">
            <div className="flex">
              <Link to={'/'}>
                <div className="flex h-14  items-center">
                  <PiFlowerLotusFill size={36} className="text-primary-500"  />
                  <p className="text-primary-500 uppercase ml-2 text-sm font-bold">WindFlow</p>
                </div>
              </Link>
            </div>
            <div className="flex h-14 items-center justify-evenly max-[1387px]:mr-[385px] max-[963px]:-ml-[135px]">

              
              <div>
                <div className="max-[1387px]:hidden">
                  <ThemeSwicther />
                </div>
              </div>
              <div>
                <div className="text-[12px] max-[1387px]:hidden">
                  {!state.isAuthenticated ? (
                    <>
                      <Link
                        to={"/login"}
                        className="mx-3"
                      >
                        <FaUserCircle fontSize={32} className="text-primary-500 group-focus-within:ring group-focus-within:ring-primary-500" />
                      </Link>
                    </>
                  ) : (
                    <Account />
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </>
  );
};

export default Navbar;
