import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Servicos from '../pages/Servicos';
import Error404 from '../pages/Error404';
import Clientes from '../pages/Clientes';

function RouterApp(){
    return(
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/servicos" element={ <Servicos /> } />
        <Route path="/contato" element={ <Contato /> } />
        <Route path="/clientes" element={ <Clientes /> } />
        <Route path="*" element={ <Error404 /> } />
    </Routes>
    );
}

export default RouterApp;