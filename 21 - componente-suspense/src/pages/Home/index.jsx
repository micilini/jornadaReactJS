import { Suspense } from 'react';
import Nomes from '../../components/Nomes';

const Home = () => {
  return (
    <div>
      <h1>Tela Principal!</h1>
      <Suspense fallback={<div>Carregando nomes...</div>}>
        <Nomes />
      </Suspense>
    </div>
  );
};

export default Home;