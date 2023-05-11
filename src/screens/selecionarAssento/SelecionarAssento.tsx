import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../shared/component/Button';
import { CinemaContext } from '../../shared/context/CinemaContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SelecionarAssento: React.FC = () => {

    const context = useContext(CinemaContext)
    const navigate = useNavigate()
    const [mapa, setMapa] = useState<string[][]>([
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO']
      ])
    const [linha, setLinha] = useState<number | undefined>(undefined)
    const [coluna, setColuna] = useState<number | undefined>(undefined)
    const [assento, setAssento] = useState<string>('')

    useEffect(() => {
        let mapaNew = [
            ['VAGO', 'VAGO', 'VAGO'],
            ['VAGO', 'VAGO', 'VAGO'],
            ['VAGO', 'VAGO', 'VAGO'],
            ['VAGO', 'VAGO', 'VAGO'],
            ['VAGO', 'VAGO', 'VAGO']
          ]
        if (context.usuarioAtual.filme === 'NENHUM') {
            navigate('/selecionarFilme')
            
        }
        if (context.usuarioAtual.sessao === 'NENHUM') {
            navigate('/selecionarSessao')
        }
        if (context.usuarioAtual.filme === 'BATMAN') {
            if (context.usuarioAtual.sessao === '14 Horas') {
                setMapa(context.sessao14FilmeA)
                mapaNew= context.sessao14FilmeA
            }

            if (context.usuarioAtual.sessao === '16 horas') {
                setMapa(context.sessao16FilmeA)
                mapaNew= context.sessao16FilmeA
            }
        }

        if (context.usuarioAtual.filme === 'PETER PAN') {
            if (context.usuarioAtual.sessao === '14 Horas') {
                setMapa(context.sessao14FilmeB)
                mapaNew= context.sessao14FilmeB
            }

            if (context.usuarioAtual.sessao === '16 horas') {
                setMapa(context.sessao16FilmeB)
                mapaNew= context.sessao16FilmeB
            }
        }
        setAssento(context.usuarioAtual.assento)

        if (context.usuarioAtual.assento !== '') {
            let assentoValores: string[] = context.usuarioAtual.assento.split('-')
            let i = parseInt(assentoValores[0])
            let j = parseInt(assentoValores[1])
            mapaNew[i][j] = 'SELECIONADO'
            setLinha(i)
            setColuna(j)
        }


    }, [])

    const handleChangeButton = (i: number, j: number) => {
        let newMapa = [...mapa];
        if (newMapa[i][j] === 'OCUPADO') {
            toast.info('Assento já está ocupado por outra pessoa !')
            return
        }
        if (linha !== undefined && coluna !== undefined) {
            newMapa[linha][coluna] = 'VAGO'
            newMapa[i][j] = 'SELECIONADO'
        } else {
            newMapa[i][j] = 'SELECIONADO'

        }
        setLinha(i)
        setColuna(j)
        setAssento(`${i}-${j}`)
        setMapa(newMapa)

    }


    return (
        <>
            <div className="flex flex-col justify-center  items-center  h-full">

                <div className="text-5xl flex justify-center text-center font-medium text-teal-600 font-mono dark:text-slate-400 pl-10 pr-10">Mapa de assentos das {context.usuarioAtual.sessao}</div>

                <div className="flex w-full   justify-center space-x-5 pt-5 ">

                    {mapa && mapa.map((linha, i) =>
                        <div className="flex flex-col text-lg font-extrabold text-teal-500" key={i}>
                            {linha.map((coluna, j) =>
                                <span className="cursor-pointer hover:opacity-70" onClick={() => { handleChangeButton(i, j) }} key={j}>{coluna} </span>
                            )}
                        </div>
                    )}
                </div>
                <div className="pt-5 text-teal-600 font-medium font-mono">

                    {assento !== '' && <div>Assento selecionado : {`${assento}`}</div>}
                </div>
                <div className="pt-5 space-x-4">
                    <Button onClick={() => {
                        let newMapa = [...mapa]
                        if (linha !== undefined && coluna !== undefined) {
                            newMapa[linha][coluna] = 'VAGO'
                        }
                        navigate('/selecionarSessao')

                    }} descricao={`Voltar`} />
                    {assento !== '' && <Button onClick={() => {
                        let usuarioAtual = context.usuarioAtual
                        usuarioAtual.assento = assento
                        context.changeUsuarioAtual(usuarioAtual)
                        navigate('/selecionarDesconto')

                    }} descricao={`Confirmar`} />}
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </>
    )

}