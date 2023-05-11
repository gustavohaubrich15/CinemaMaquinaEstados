import React from 'react';

interface IButton {
    descricao: string
}
export const Button: React.FC<IButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ descricao, ...props }) => {

    return (
        <>
            <button {...props} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-10 w-56 border border-blue-500 hover:border-transparent rounded">
                {descricao}
            </button>
        </>
    )

}