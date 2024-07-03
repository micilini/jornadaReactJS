import wrapPromise from '../../utils/wrapPromise';
import getNomes from '../../services/getNomes';

const nomePromise = wrapPromise(getNomes());

const Nomes = () => {
    const nomes = nomePromise.read();

    return(
        <ul>
        {nomes.map((nome) => (
          <li key={nome.id}>{nome.name}</li>
        ))}
      </ul>
    );
}

export default Nomes;
