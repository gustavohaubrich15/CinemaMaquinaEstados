import React, { createContext, useState } from 'react';
import { ReactComponent as BatmanSvg } from '../images/batman.svg'
import { ReactComponent as PeterPanSvg } from '../images/peterpan.svg'

interface ICinemaProvider {
    children?: React.ReactNode
}

interface ICinema {
    usuarioAtual: {
        filme: 'NENHUM' | 'BATMAN' | 'PETER PAN';
        assento: string;
        sessao: 'NENHUM' | '14 Horas' | '16 horas';
        oferta: boolean;
        pagamento: 'NENHUM' | 'PIX' | 'CARTÃO';
        valor: number;
    },
    changeUsuarioAtual: (usuario: {
        filme: 'NENHUM' | 'BATMAN' | 'PETER PAN';
        assento: string;
        sessao: 'NENHUM' | '14 Horas' | '16 horas';
        oferta: boolean;
        pagamento: 'NENHUM' | 'PIX' | 'CARTÃO';
        valor: number;
    }) => void,
    sessao14FilmeA: string[][],
    changeSessao14FilmeA: (sessao: string[][]) => void,
    sessao14FilmeB: string[][],
    changeSessao14FilmeB: (sessao: string[][]) => void,
    sessao16FilmeA: string[][],
    changeSessao16FilmeA: (sessao: string[][]) => void,
    sessao16FilmeB: string[][],
    changeSessao16FilmeB: (sessao: string[][]) => void,
    filmes: {
        nome: 'NENHUM' | 'BATMAN' | 'PETER PAN',
        imagem: JSX.Element
    }[],
    sessoes: {
        nome: '14 Horas' | '16 horas'
    }[]
}

export const CinemaContext = createContext<ICinema>({} as ICinema)

export const CinemaProvider: React.FC<ICinemaProvider> = ({ children }) => {

    const [usuarioAtual, setUsuarioAtual] = useState<{
        filme: 'NENHUM' | 'BATMAN' | 'PETER PAN';
        assento: string;
        sessao: 'NENHUM' | '14 Horas' | '16 horas';
        oferta: boolean;
        pagamento: 'NENHUM' | 'PIX' | 'CARTÃO';
        valor: number;
    }>({ filme: 'NENHUM', assento: '', oferta: false, pagamento: 'NENHUM', sessao: 'NENHUM', valor: 0 })

    const [sessao14FilmeA, setSessao14FilmeA] = useState<string[][]>([
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO']
      ])
    const [sessao14FilmeB, setSessao14FilmeB] = useState<string[][]>([
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO']
      ])
    const [sessao16FilmeA, setSessao16FilmeA] = useState<string[][]>([
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO']
      ])
    const [sessao16FilmeB, setSessao16FilmeB] = useState<string[][]>([
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO'],
        ['VAGO', 'VAGO', 'VAGO']
      ])

    const changeUsuarioAtual = (usuarioAtual: {
        filme: 'NENHUM' | 'BATMAN' | 'PETER PAN';
        assento: string;
        sessao: 'NENHUM' | '14 Horas' | '16 horas';
        oferta: boolean;
        pagamento: 'NENHUM' | 'PIX' | 'CARTÃO';
        valor: number;
    }) => {
        setUsuarioAtual(usuarioAtual)
    }

    const changeSessao14FilmeA = (sessao: string[][]) => {
        setSessao14FilmeA(sessao)
    }
    const changeSessao14FilmeB = (sessao: string[][]) => {
        setSessao14FilmeB(sessao)
    }
    const changeSessao16FilmeA = (sessao: string[][]) => {
        setSessao16FilmeA(sessao)
    }
    const changeSessao16FilmeB = (sessao: string[][]) => {
        setSessao16FilmeB(sessao)
    }
    const filmes: {
        nome: 'NENHUM' | 'BATMAN' | 'PETER PAN',
        imagem: JSX.Element
    }[] = [{
        nome: 'BATMAN',
        imagem: <BatmanSvg />

    }, {
        nome: 'PETER PAN',
        imagem: <PeterPanSvg />

    }]

    const sessoes: {
        nome: '14 Horas' | '16 horas'
    }[] = [{
        nome: '14 Horas'
    },
    {
        nome: '16 horas'
    }]


    return (
        <>
            <CinemaContext.Provider value={{ usuarioAtual, changeUsuarioAtual, changeSessao14FilmeA, changeSessao14FilmeB, changeSessao16FilmeA, changeSessao16FilmeB, sessao14FilmeA, sessao14FilmeB, sessao16FilmeA, sessao16FilmeB, filmes, sessoes }}>
                {children}
            </CinemaContext.Provider>
        </>
    )
}