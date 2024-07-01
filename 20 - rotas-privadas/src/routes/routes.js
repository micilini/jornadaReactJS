import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

function RouterApp(){
    return(
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/profile" element={ <PrivateRoute><Profile /></PrivateRoute>} />
    </Routes>
    );
}

export default RouterApp;