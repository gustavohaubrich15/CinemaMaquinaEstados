import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../shared/component/Button';
import { CinemaContext } from '../../shared/context/CinemaContext';
import { useNavigate } from 'react-router-dom';
import CpfCnpjInput from 'react-cpf-cnpj-input-field'
import { cpf as cpfTest } from 'cpf-cnpj-validator';


export const DigitarCPF: React.FC = () => {

    const context = useContext(CinemaContext)
    const navigate = useNavigate()
    const [cpf, setcpf] = useState<any>()

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

    return (
        <>
            <div className="flex flex-col justify-center  items-center  h-full ">

                <div className="text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Digite seu cpf</div>
                <div className="flex w-full  justify-center space-x-3 pt-5 ">
                    <div className="flex flex-col items-center h-24">
                        <CpfCnpjInput defaultMaskType={'CPF'}
                            className="placeholder:italic placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            onChange={(e: any) => { 
                                setcpf(e.target.value) 
                            }} />
                    </div>
                </div>
                <div className="space-x-4">
                    <Button onClick={() => { navigate('/selecionarDesconto') }} descricao={`Voltar`} />
                    {cpfTest.isValid(cpf) && <Button onClick={() => {
                        let usuarioAtual = context.usuarioAtual
                        usuarioAtual.oferta = true
                        context.changeUsuarioAtual(usuarioAtual)
                        navigate('/selecionarPagamento')
                    }} descricao={`Confirmar`} />}
                </div>

            </div>

        </>
    )

}