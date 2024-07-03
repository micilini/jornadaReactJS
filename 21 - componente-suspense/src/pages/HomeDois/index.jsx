import { Suspense } from 'react';
import Nomes from '../../components/Nomes';
import { ErrorBoundary, ErrorFallback }  from '../../utils/errorBoundary';

const Home = () => {
  return (
    <div>
      <h1>Tela Principal (Dois)!</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {
        // Reseta o estado da sua aplicação para que o erro não seja exibido novamente!
      }}>
        <Suspense fallback={<div>Carregando nomes...</div>}>
          <Nomes />
        </Suspense>
       </ErrorBoundary>
    </div>
  );
};

export default Home;