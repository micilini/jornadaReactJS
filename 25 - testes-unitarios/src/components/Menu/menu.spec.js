import '@testing-library/jest-dom';//Estamos importando o pacote @testing-library/jest-dom.
import { render, screen } from "@testing-library/react";//Estamos importando a função render do pacote @testing-library/react.
import Menu from "./index";//Estamos importando o componente Menu.
import { BrowserRouter } from "react-router-dom";
 
describe("Menu", () => {//Estamos descrevendo um caso de teste chamado de Menu, que vai englobar todos os testes relacionados ao componente Menu.

    //Para iniciar os testes, podemos usar tanto o it() quanto o test():

    it("Deve renderizar sem erros", () => {//Estamos descrevendo um teste que verifica se o componente Menu renderiza sem erros.
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );//Estamos renderizando o componente Menu dentro do ambiente do JEST.

        expect(screen.getByText("Minha Aplicação")).toBeInTheDocument();//Esperamos que o texto "Minha Aplicação" esteja na tela.
        expect(screen.getByText("Home")).toBeInTheDocument();//Esperamos que o texto "HOME" esteja na tela.
        expect(screen.getByText("Contato")).toBeInTheDocument();//Esperamos que o texto "CONTATO" esteja na tela.
        expect(screen.getByText("Serviços")).toBeInTheDocument();//Esperamos que o texto "SERVICOS" esteja na tela.
        expect(screen.getByText("Clientes")).toBeInTheDocument();//Esperamos que o texto "CLIENTES" esteja na tela.
    });

    test("Deve conter 4 links de navegação", () => {//Estamos descrevendo um teste que verifica se o componente Menu contém 4 links de navegação.
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );//Estamos renderizando o componente Menu dentro do ambiente do JEST.
        const links = screen.getAllByRole("link");//Estamos buscando todos os elementos que são links.
        expect(links).toHaveLength(4);//Esperamos que a quantidade de links seja igual a 4.
    });

    it("Deve conter um link para a Home", () => {//Estamos descrevendo um teste que verifica se o componente Menu contém um link para a Home.
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );//Estamos renderizando o componente Menu dentro do ambiente do JEST.
        const linkHome = screen.getByRole("link", { name: /home/i });//Estamos buscando um link que contenha a palavra Home.
        expect(linkHome).toBeInTheDocument();//Esperamos que o linkHome esteja na tela.
    });

    it("Deve conter um link para a Contato", () => {//Estamos descrevendo um teste que verifica se o componente Menu contém um link para o Contato.
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );//Estamos renderizando o componente Menu dentro do ambiente do JEST.
        const linkContato = screen.getByRole("link", { name: /contato/i });//Estamos buscando um link que contenha a palavra Contato.
        expect(linkContato).toBeInTheDocument();//Esperamos que o linkContato esteja na tela.
    });

    it("Deve conter um link para a Serviços", () => {//Estamos descrevendo um teste que verifica se o componente Menu contém um link para Serviços.
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );//Estamos renderizando o componente Menu dentro do ambiente do JEST.
        const linkServicos = screen.getByRole("link", { name: /serviços/i });//Estamos buscando um link que contenha a palavra Serviços.
        expect(linkServicos).toBeInTheDocument();//Esperamos que o linkServicos esteja na tela.
    });

    it("Deve conter um link para a Clientes", () => {//Estamos descrevendo um teste que verifica se o componente Menu contém um link para Clientes.
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );//Estamos renderizando o componente Menu dentro do ambiente do JEST.
        const linkClientes = screen.getByRole("link", { name: /clientes/i });//Estamos buscando um link que contenha a palavra Clientes.
        expect(linkClientes).toBeInTheDocument();//Esperamos que o linkClientes esteja na tela.
    });
    
})//Estamos descrevendo um caso de teste chamado de Menu, que vai englobar todos os testes relacionados ao componente Menu.

