import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../shared/component/Button';
import { CinemaContext } from '../../shared/context/CinemaContext';
import { useNavigate } from 'react-router-dom';

export const SeelcionarPagamento: React.FC = () => {

    const context = useContext(CinemaContext)
    const navigate = useNavigate()
    const [formaPagamento, setFormaPagamento] = useState<"NENHUM" | "PIX" | "CARTÃO">('NENHUM')

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
    }, [])

    const handleChangeButton = (pagamento: "NENHUM" | "PIX" | "CARTÃO") => {
        setFormaPagamento(pagamento)
    }

    return (
        <>
            <div className="flex flex-col justify-center  items-center  h-full ">

                <div className="text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Selecione a forma de pagamento</div>
                <div className="flex w-full  justify-center space-x-3 pt-5 ">
                    <div className="flex flex-col items-center h-24">
                        <Button onClick={() => { handleChangeButton(`PIX`) }} descricao={`PIX`} />
                    </div>
                    <div className="flex flex-col items-center h-24">
                        <Button onClick={() => { handleChangeButton(`CARTÃO`) }} descricao={`CARTÃO`} />
                    </div>
                </div>
                <div className="pt-5 text-teal-600 font-medium font-mono">
                    {formaPagamento !== 'NENHUM' && <div>Forma pagamento selecionada : {`${formaPagamento}`}</div>}
                    {formaPagamento !== 'NENHUM' && <div>Valor : {`R$ ${context.usuarioAtual.oferta ? 20 : 32} reais`}</div>}
                </div>
                <div className=" pt-5 space-x-4">
                    <Button onClick={() => { navigate('/selecionarDesconto') }} descricao={`Voltar`} />
                    {formaPagamento !== 'NENHUM' && <Button onClick={() => {
                        let usuarioAtual = context.usuarioAtual
                        usuarioAtual.pagamento = formaPagamento
                        usuarioAtual.valor = context.usuarioAtual.oferta ? 20 : 32
                        context.changeUsuarioAtual(usuarioAtual)
                        navigate('/imprimirIngresso')

                    }} descricao={`Pagar`} />}
                </div>

            </div>

        </>
    )

}