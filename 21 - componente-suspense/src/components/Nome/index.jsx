import wrapPromise from '../../utils/wrapPromise';

const getNome = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Micilini");
        }, 2000);
    });
}

const meuNome = wrapPromise(getNome());

const Nome = () => {
    const nome = meuNome.read();

    return(
        <div>
            <h1>{nome}</h1>
        </div>
    );
}

export default Nome;