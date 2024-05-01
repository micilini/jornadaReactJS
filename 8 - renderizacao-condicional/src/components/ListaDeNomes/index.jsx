const ListaDeNomes = () => {
    const nomes = ["João", "Maria", "Pedro", "Ana"];
  
    return (
      <div>
        <h1>Lista de Nomes</h1>
        <ul>
          {nomes.map((nome, index) => (
            <li key={index}>
              <p>{nome}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};
  
export default ListaDeNomes;