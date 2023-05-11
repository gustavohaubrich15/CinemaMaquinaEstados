import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../screens/home/Home';
import { SelecionarFilme } from '../screens/selecionarFilme/SelecionarFilme';
import { SelecionarSessao } from '../screens/selecionarSessao/SelecionarSessao';
import { SelecionarAssento } from '../screens/selecionarAssento/SelecionarAssento';
import { SelecionarDesconto } from '../screens/selecionarDesconto/SelecionarDesconto';
import { SeelcionarPagamento } from '../screens/selecionarPagamento/SelecionarPagamento';
import { ImprimirIngresso } from '../screens/imprimirIngresso/ImprimirIngresso';
import { DigitarCPF } from '../screens/digitarCPF/DigitarCPF';

export const RoutesApp: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/selecionarFilme' element={<SelecionarFilme />} />
                <Route path='/selecionarSessao' element={<SelecionarSessao />} />
                <Route path='/selecionarAssento' element={<SelecionarAssento />} />
                <Route path='/selecionarDesconto' element={<SelecionarDesconto />} />
                <Route path='/digitarCPF' element={<DigitarCPF />} />
                <Route path='/selecionarPagamento' element={<SeelcionarPagamento />} />
                <Route path='/imprimirIngresso' element={<ImprimirIngresso />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </>
    )
}