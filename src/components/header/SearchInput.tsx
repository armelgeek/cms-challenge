import React, { memo } from 'react'

const SearchInput = memo(() => {
  return (
        <button
        type="button"
        data-trigger="search-modal"
        className="group hidden h-10 w-72 border items-center overflow-hidden rounded-primary bg-slate-100 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"
        >
        <span className="ml-2 text-sm text-slate-400">
            Rechercher un artist,musique ...
        </span>
        </button>
  )
})
export default SearchInput;