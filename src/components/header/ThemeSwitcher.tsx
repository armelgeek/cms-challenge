import React from 'react';

export default function ThemeSwicther() {
  return (
<div
  className="dropdown"
  data-strategy="absolute"
  id="theme-switcher-dropdown"
>
  <button
    className="dropdown-toggle px-3 text-slate-500 hover:text-slate-700 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-primary-500"
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-moon hidden dark:block"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sun block dark:hidden"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  </button>

  <div className="dropdown-content mt-3 w-36">
    <ul className="dropdown-list">
      <li className="dropdown-list-item">
        <button
          className="dropdown-btn active"
          data-theme-mode="light"
        >
          <span>Light</span>
        </button>
      </li>

      <li className="dropdown-list-item">
        <button className="dropdown-btn" data-theme-mode="dark">
          <span>Dark</span>
        </button>
      </li>

      <li className="dropdown-list-item">
        <button className="dropdown-btn" data-theme-mode="system">
          <span>System</span>
        </button>
      </li>
    </ul>
  </div>
</div>
  );
}
