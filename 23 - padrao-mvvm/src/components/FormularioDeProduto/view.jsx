const FormularioDeProdutoView = ({ nome, preco, descricao, setNome, setPreco, setDescricao, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome do Produto:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="preco">Preço:</label>
        <input
          type="text"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioDeProdutoView;