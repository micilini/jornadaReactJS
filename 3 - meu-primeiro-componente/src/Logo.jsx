import './cabecalho.css';
import LogoMicilini from './logo-micilini.svg';

const Logo = () => {
    return(
        <>
            <img src={LogoMicilini} alt="Logo Micilini" style={{ width: 'auto', height: '52px' }} />
        </>
    )
}

export default Logo;