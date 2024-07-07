import '@testing-library/jest-dom';//Estamos importando o pacote @testing-library/jest-dom.
import React from 'react';
import { render, screen } from '@testing-library/react';
import Nomes from './index';
import axios from 'axios';

import { BrowserRouter } from "react-router-dom";
import Clientes from '../../pages/Clientes';

jest.mock('axios');

test('Renderiza nomes após a requisição', async () => {// Simula a resposta da API que será retornada pelo axios.get
    const nomesMock = [
        { id: 1, name: 'Nome 1' },
        { id: 2, name: 'Nome 2' },
        { id: 3, name: 'Nome 3' }
    ];

    axios.get.mockResolvedValue({ data: nomesMock });

    render(
        <BrowserRouter>
            <Clientes>
                <Nomes />
            </Clientes>
        </BrowserRouter>
    );//Tambme funcionaria informando somente o componente <Nome /> sem o <Clientes> e <BrowserRouter> como wrapper

    // Aguarda a renderização dos elementos
    const nomeElement1 = await screen.findByText('Nome 1');
    const nomeElement2 = screen.getByText('Nome 2');
    const nomeElement3 = screen.getByText('Nome 3');

    expect(nomeElement1).toBeInTheDocument();
    expect(nomeElement2).toBeInTheDocument();
    expect(nomeElement3).toBeInTheDocument();
});