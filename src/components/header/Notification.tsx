import React from 'react';

export default function componentName() {
  return (
    <div className="dropdown -mt-0.5" data-strategy="absolute">
    <div className="dropdown-toggle px-3">
      <button className="relative mt-1 flex items-center justify-center rounded-full text-slate-500 transition-colors duration-150 hover:text-slate-700 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-primary-500">
        <span className="absolute -right-1 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-danger-500 text-[11px] text-slate-200">
          5
        </span>
      </button>
    </div>

    <div className="dropdown-content mt-3 w-[17.5rem] divide-y dark:divide-slate-700 sm:w-80">
      <div className="flex items-center justify-between px-4 py-4">
        <h6 className="text-slate-800 dark:text-slate-300">
          Notifications
        </h6>
        <button className="text-xs font-medium text-slate-600 hover:text-primary-500 dark:text-slate-300">
          Clear All
        </button>
      </div>

      <div className="px-4 py-2">
        <button
          className="btn btn-primary-plain btn-sm w-full"
          type="button"
        >
          <span>View More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
</div>
  );
}
