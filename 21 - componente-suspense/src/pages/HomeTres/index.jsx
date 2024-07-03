import { Suspense } from 'react';
import Idade from '../../components/Idade';

const Home = () => {
  return (
    <div>
      <h1>Tela Principal!</h1>
      <Suspense fallback={<div>Carregando idade...</div>}>
        <Idade />
      </Suspense>
    </div>
  );
};

export default Home;