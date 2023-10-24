
import React, {memo } from 'react';
const Page = memo(({children}:any) => {
    return (
        <>
            <main className="container w-full bg-dark-800 flex-grow pl-3 pr-3">
                {children}
            </main>
        </>
    )
})
export default  Page;