import React, { useContext, useEffect } from 'react';
import { Button } from '../../shared/component/Button';
import { CinemaContext } from '../../shared/context/CinemaContext';
import { useNavigate } from 'react-router-dom';

export const SelecionarDesconto: React.FC = () => {

    const context = useContext(CinemaContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if (context.usuarioAtual.filme === 'NENHUM') {
            navigate('/selecionarFilme')
        }
        if (context.usuarioAtual.sessao === 'NENHUM') {
            navigate('/selecionarSessao')
        }
        if (context.usuarioAtual.assento === '') {
            navigate('/selecionarAssento')
        }
    },[])

    const handleChangeButton = (aplicarDesconto: boolean) =>{
        if(aplicarDesconto){
            navigate('/digitarCPF')
        }
        else{
            navigate('/selecionarPagamento')
        }
        
    }

    return (
        <>
            <div className="flex flex-col justify-center  items-center  h-full ">

                <div className="text-5xl font-medium text-teal-600 font-mono dark:text-slate-400">Gostaria de aplicar desconto por CPF?</div>
                <div className="flex w-full  justify-center space-x-3 pt-5 ">
                    <div className="flex flex-col items-center h-24">
                        <Button  onClick={() =>{handleChangeButton(false)}} descricao={`NÃO`} />
                    </div>
                    <div className="flex flex-col items-center h-24">
                    <Button onClick={() =>{handleChangeButton(true)}} descricao={`SIM`} />
                    </div>
                </div>
                <div className="">
                <Button onClick={() =>{navigate('/selecionarAssento')}} descricao={`Voltar`} />
                </div>
                
            </div>

        </>
    )

}