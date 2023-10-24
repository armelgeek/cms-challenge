
import React, {memo, } from 'react';
const Header = memo(({children}:any) => {
    return (
        <header className="header shadow-lg border border-t-0 border-l-0 border-r-0  border-slate-500 bg-dark-900">
            <div className="container-fluid flex items-center justify-between">
                {children}
            </div>
        </header>
    )
})
export default  Header;