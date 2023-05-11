import React from 'react'

interface IContainer {
    children?: React.ReactNode
}

export const Container: React.FC<IContainer> = ({ children }) => {

    return (
        <div className="pl-44 pt-10 pr-20 pb-24 select-none h-screen w-screen bg-gray-500">
            <div className=" bg-slate-100 w-full h-full rounded-md">
                {children}
            </div>
        </div>
    )
}