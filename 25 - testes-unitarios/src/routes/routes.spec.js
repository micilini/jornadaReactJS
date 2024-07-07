import React from 'react';
import '@testing-library/jest-dom';//Estamos importando o pacote @testing-library/jest-dom.
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter para testes de rota
import RouterApp from './routes';

describe("RouterApp", () => {//Estamos descrevendo um caso de teste chamado de Menu, que vai englobar todos os testes relacionados ao componente Menu.

test('Renderiza Home ao acessar a rota /', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <RouterApp />
        </MemoryRouter>
    );

    expect(screen.getByText(/Minha Aplicação/i)).toBeInTheDocument(); // Verifica se o título está presente
});

test('Renderiza Serviços ao acessar a rota /servicos', () => {
    render(
        <MemoryRouter initialEntries={['/servicos']}>
            <RouterApp />
        </MemoryRouter>
    );

    expect(screen.getByText(/Serviços/i)).toBeInTheDocument(); // Verifica se o título está presente
});

test('Renderiza Contato ao acessar a rota /contato', () => {
    render(
        <MemoryRouter initialEntries={['/contato']}>
            <RouterApp />
        </MemoryRouter>
    );

    expect(screen.getByText(/Entre em Contato/i)).toBeInTheDocument(); // Verifica se o título está presente
});

test('Renderiza Clientes ao acessar a rota /clientes', () => {
    render(
        <MemoryRouter initialEntries={['/clientes']}>
            <RouterApp />
        </MemoryRouter>
    );

    expect(screen.getByText(/Conheça nossos Clientes/i)).toBeInTheDocument(); // Verifica se o título está presente
});

test('Renderiza página de erro 404 ao acessar uma rota inexistente', () => {
    render(
        <MemoryRouter initialEntries={['/rota-inexistente']}>
            <RouterApp />
        </MemoryRouter>
    );

    expect(screen.getByText(/Error 404/i)).toBeInTheDocument(); // Verifica se o texto de erro 404 está presente
});

});
