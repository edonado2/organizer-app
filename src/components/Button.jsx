import React from 'react'


export const Button = ({children, className}) => {
    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-fit p-5 m-5 rounded-2xl">
                {children}
            </button>
        </>
    )
}
