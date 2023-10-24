
import React, {memo, } from 'react';
const BodyWrapper = memo(({children}:any) => {
    return (
        <div className="wrapper">
                {children}
        </div>
    )
})
export default  BodyWrapper;