import React, { useContext, useEffect } from 'react';
import { Button } from '../../shared/component/Button';
import { CinemaContext } from '../../shared/context/CinemaContext';
import { useNavigate } from 'react-router-dom';

export const ImprimirIngresso: React.FC = () => {

    const context = useContext(CinemaContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (context.usuarioAtual.filme === 'NENHUM') {
            navigate('/selecionarFilme')
        }
        if (context.usuarioAtual.sessao === 'NENHUM') {
            navigate('/selecionarSessao')
        }
        if (context.usuarioAtual.assento === '') {
            navigate('/selecionarAssento')
        }
        if (context.usuarioAtual.pagamento === 'NENHUM') {
            navigate('/selecionarPagamento')
        }

        let usuarioAtual = context.usuarioAtual

        if (usuarioAtual.filme === 'BATMAN') {
            if (usuarioAtual.sessao === '14 Horas') {
                let newMapa = [...context.sessao14FilmeA]
                let assentoValores: string[] = usuarioAtual.assento.split('-')
                newMapa[parseInt(assentoValores[0])][parseInt(assentoValores[1])] = 'OCUPADO'
                context.changeSessao14FilmeA(newMapa)
            }

            if (usuarioAtual.sessao === '16 horas') {
                let newMapa = [...context.sessao16FilmeA]
                let assentoValores: string[] = usuarioAtual.assento.split('-')
                newMapa[parseInt(assentoValores[0])][parseInt(assentoValores[1])] = 'OCUPADO'
                context.changeSessao16FilmeA(newMapa)
            }
        }

        if (usuarioAtual.filme === 'PETER PAN') {
            if (usuarioAtual.sessao === '14 Horas') {
                let newMapa = [...context.sessao14FilmeB]
                let assentoValores: string[] = usuarioAtual.assento.split('-')
                newMapa[parseInt(assentoValores[0])][parseInt(assentoValores[1])] = 'OCUPADO'
                context.changeSessao14FilmeB(newMapa)
            }

            if (usuarioAtual.sessao === '16 horas') {
                let newMapa = [...context.sessao16FilmeB]
                let assentoValores: string[] = usuarioAtual.assento.split('-')
                newMapa[parseInt(assentoValores[0])][parseInt(assentoValores[1])] = 'OCUPADO'
                context.changeSessao16FilmeB(newMapa)
            }
        }
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center  items-center  h-full ">

                <div className="text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Informações do ingresso</div>
                <div className="flex w-full font-bold flex-col items-center justify-center space-x-3 pt-5  text-teal-600 font-mono">
                    <div className="flex space-x-10">
                        <div><i>Filme</i> : {`${context.usuarioAtual.filme}`}</div>
                        <div><i>Sessão</i> : {`${context.usuarioAtual.sessao}`}</div>
                    </div>
                    <div className="flex space-x-10 pt-6">
                        <div><i>Assento</i> : {`${context.usuarioAtual.assento}`}</div>
                        <div><i>Forma de pagamento</i> : {`${context.usuarioAtual.pagamento}`}</div>
                    </div>
                    <div className="pt-6 text-3xl"><i>Valor</i> : {`R$ ${context.usuarioAtual.valor} reais`}</div>

                </div>
                <div className=" pt-5 space-x-4">
                    <Button onClick={() => {
                        context.changeUsuarioAtual({ filme: 'NENHUM', assento: '', oferta: false, pagamento: 'NENHUM', sessao: 'NENHUM', valor: 0 })
                        navigate('/home')
                    }} descricao={`Voltar a tela inicial`} />
                </div>

            </div>

        </>
    )

}