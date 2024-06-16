import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Servicos from '../pages/Servicos';
import Error404 from '../pages/Error404';
import DetalhesDoProduto from '../pages/DetalhesDoProduto';

function RouterApp(){
    return(
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/servicos" element={ <Servicos /> } />
        <Route path="/contato" element={ <Contato /> } />
        <Route path="/produto/:id" element={<DetalhesDoProduto />} />
        <Route path="*" element={ <Error404 /> } />
    </Routes>
    );
}

export default RouterApp;