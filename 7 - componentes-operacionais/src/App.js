import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    const getAno = () => {
        return 2024;
    };
    return (
        <>
            <Header nome="Gabriel Solano" rank="88.9" />
            <Footer ano={getAno()} site="https://micilini.com/" />
        </>
    );
}