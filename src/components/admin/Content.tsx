
import React, {memo, } from 'react';
import Footer from './Footer';
const Content = memo(({children}:any) => {
    return (
        <div className="content h-full overflow-hidden bg-slate-800">
                {children}
        </div>
    )
})
export default  Content;