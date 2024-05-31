import logo from '../../assets/logo_micilini_github.svg';
import React from 'react';

const LogoMicilini = () => {
    return (
        <>
        <br />
        <img src={logo} alt="Logo Micilini" width="120" />
        </>
    );
}

export default React.memo(LogoMicilini);