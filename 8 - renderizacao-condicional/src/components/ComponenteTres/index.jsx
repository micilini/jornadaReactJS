const ComponenteTres = () => {
    const quantidadeDeContatos = 10;
    return (
      <div>
        <h1>Plataforma de Contatos</h1>
        {quantidadeDeContatos > 0 ? <p>Você possui contatos cadastrados!</p> : <p>Você não possui contatos cadastrados!</p>}
      </div>
    );
  };
  
  export default ComponenteTres;