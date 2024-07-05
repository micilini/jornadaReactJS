import FoneJBL from './assets/fone-jbl.png';
import TecladoGamer from './assets/teclado-gamer.webp';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <>
      <ProductCard
        tag="Novo"
        imageSrc={TecladoGamer}
        title="Teclado Gamer (Redragon)"
        status="Disponível"
        price={200.00}
        inStock={true}
      />
      <ProductCard
        imageSrc={FoneJBL}
        title="Fone JBL (Bluetooth)"
        status="Fora de Estoque"
        price={127.00}
        inStock={false}
      />
    </>
  );
};

export default App;
