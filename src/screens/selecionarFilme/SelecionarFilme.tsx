import React, { useContext } from 'react';
import { Button } from '../../shared/component/Button';
import { CinemaContext } from '../../shared/context/CinemaContext';
import { useNavigate } from 'react-router-dom';

export const SelecionarFilme: React.FC = () => {

    const context = useContext(CinemaContext)
    const navigate = useNavigate()

    const handleChangeButton = (filme: "NENHUM" | "BATMAN" | "PETER PAN") => {
        let usuarioAtual = context.usuarioAtual
        usuarioAtual.filme = filme
        context.changeUsuarioAtual(usuarioAtual)
        navigate('/selecionarSessao')
    }

    return (
        <>
            <div className="flex flex-col space-y-2 justify-center  items-center  h-full">

                <div className="text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Selecione o Filme</div>
                <div className="flex w-full h-24 justify-around pt-5 ">
                    <div className="flex flex-col space-y-5 items-center h-56">
                        <Button onClick={() => { handleChangeButton(context.filmes[0].nome) }} descricao={`Selecionar ${context.filmes[0].nome}`} />
                        {context.filmes[0].imagem}
                    </div>
                    <div className="flex flex-col space-y-5 items-center h-56">
                        <Button onClick={() => { handleChangeButton(context.filmes[1].nome) }} descricao={`Selecionar ${context.filmes[1].nome}`} />
                        {context.filmes[1].imagem}
                    </div>
                </div>
            </div>

        </>
    )

}