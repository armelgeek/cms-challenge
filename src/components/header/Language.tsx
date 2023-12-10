import React, { useState } from 'react'
import useDropdown from "../../components/ui/Dropdown/useDropdown";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
const LanguageSwitch = () => {
  const {
    setTargetElement,
    targetElement,
    isOpen,
    toggle,
    close,
  } = useDropdown();
  return (
<div className="dropdown" data-strategy="absolute">
  <div className="dropdown-toggle px-3">

    <button
      ref={setTargetElement}
      onClick={toggle}
      type="button"
      className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700 focus:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-slate-300"
    >
      <span className="fi fi-gb"></span>
      <span className="hidden font-medium md:inline-block">
        English
      </span>
      <span className="inline-block font-medium md:hidden">EN</span>
    </button>
  </div>
  <Dropdown
      placement="bottom-end"
      autoClose={false}
      targetElement={targetElement}
      isOpen={isOpen}
      close={close}
  >
  <div className={`dropdown-content show mt-3 w-40`}>
    <ul className="dropdown-list">
      <li className="dropdown-list-item">
        <button className="dropdown-btn" type="button">
          <span className="fi fi-gb"></span>
          <span className="">Malagasy</span>
        </button>
      </li>
      <li className="dropdown-list-item">
        <button className="dropdown-btn" type="button">
          <span className="fi fi-de"></span>
          <span className="">English</span>
        </button>
      </li>
      <li className="dropdown-list-item">
        <button className="dropdown-btn" type="button">
          <span className="fi fi-gf"></span>
          <span className="">French</span>
        </button>
      </li>
    </ul>
  </div>
</Dropdown>
  </div>
  )
}
export default LanguageSwitch