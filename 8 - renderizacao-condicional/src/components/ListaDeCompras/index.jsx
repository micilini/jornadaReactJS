const ListaDeCompras = () => {
    const listaDeCompras = {
      "João": ["Maçã", "Chiclete", "Leite"],
      "Paula": ["Feijão", "Arroz", "Carne"]
    };
  
    return (
      <div>
        <h1>Lista de Compras</h1>
        <ul>
          {Object.entries(listaDeCompras).map(([pessoa, itens]) => (
            <li key={pessoa}>
              <h3>{pessoa}</h3>
              <ul>
                {itens.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
};
  
export default ListaDeCompras;