import React from 'react';
import { Button } from '../../shared/component/Button';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col space-y-2 justify-center  items-center  h-full">

                <div className="pt-1 text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Bem vindo ao Cinema</div>
                <div className="pt-2 text-2xl font-semibold">Clique no botão para iniciar</div>
                <Button onClick={()=> navigate('/selecionarFilme')} descricao="Iniciar" />
            </div>

        </>
    )

}