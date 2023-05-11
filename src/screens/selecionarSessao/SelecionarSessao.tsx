import React, { useContext, useEffect } from 'react';
import { Button } from '../../shared/component/Button';
import { CinemaContext } from '../../shared/context/CinemaContext';
import { useNavigate } from 'react-router-dom';

export const SelecionarSessao: React.FC = () => {

    const context = useContext(CinemaContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (context.usuarioAtual.filme === 'NENHUM') {
            navigate('/selecionarFilme')
        }
    }, [])

    const handleChangeButton = (sessao: '14 Horas' | '16 horas') => {
        let usuarioAtual = context.usuarioAtual
        usuarioAtual.sessao = sessao
        usuarioAtual.assento = ''
        context.changeUsuarioAtual(usuarioAtual)
        navigate('/selecionarAssento')
    }

    return (
        <>
            <div className="flex flex-col justify-center  items-center  h-full ">

                <div className="text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Qual a sessão?</div>
                <div className="flex w-full  justify-around pt-5 ">
                    <div className="flex flex-col items-center h-14">
                        <Button onClick={() => { handleChangeButton(context.sessoes[0].nome) }} descricao={`Selecionar ${context.sessoes[0].nome}`} />
                    </div>
                    <div className="flex flex-col items-center h-14">
                        <Button onClick={() => { handleChangeButton(context.sessoes[1].nome) }} descricao={`Selecionar ${context.sessoes[1].nome}`} />
                    </div>
                </div>
                <div className="">
                    <Button onClick={() => { 
                        navigate('/selecionarFilme') }} descricao={`Voltar`} />
                </div>

            </div>

        </>
    )

}