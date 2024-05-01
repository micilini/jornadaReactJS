import Header from './components/Header';
import Footer from './components/Footer';
import BoasVindas from './components/BoasVindas';
import BoasVindasContador from './components/BoasVindasContador';

export default function App() {
    const getAno = () => {
        return 2024;
    };
    return (
        <>
            <Header nome="Gabriel Solano" rank="88.9" />
            <br />
            <BoasVindas />
            <br />
            <BoasVindasContador />
            <Footer ano={getAno()} site="https://micilini.com/" />
        </>
    );
}