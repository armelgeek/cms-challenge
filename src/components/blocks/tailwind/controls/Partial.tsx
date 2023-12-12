import React from 'react'

export const Partial = ({ title }: any) => {
    return (
        <div className="my-1 flex items-center">
            <span className="mr-2 text-sm shrink text-gray-400 capitalize">{title}</span>
            <div className="grow border-t border-gray-300"></div>
        </div>
    )
}
