import './header.css';
import Rank from '../Rank';

const Header = (props) => {
  return (
    <header>
      <h1>Olá {props.nome} - <Rank rank={props.rank} /></h1>
    </header>
  );
}

export default Header;