import { lazy } from 'react';

const Idade = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          default: () => <div>Idade: 30</div> // Simula a definição do componente Idade
        });
      }, 2000);
    });
});

export default Idade;