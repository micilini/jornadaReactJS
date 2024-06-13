function App(){

    function mostraVariaveisDeAmbiente(){
        //Mostra todas as variáveis de ambiente
        console.log("Variáveis de ambiente: ", process.env);

        //Mostra variáveis de ambiente específicas
        console.log("Variável de ambiente REACT_APP_NOME: ", process.env.REACT_APP_NOME);
        console.log("Variável de ambiente REACT_APP_RANK: ", process.env.REACT_APP_RANK);
        console.log("Variável de ambiente REACT_APP_SECRET: ", process.env.REACT_APP_SECRET);
        console.log("Variável de ambiente REACT_APP_KEY: ", process.env.REACT_APP_KEY);
        console.log("Variável de ambiente REACT_APP_SITE: ", process.env.REACT_APP_SITE);

    }
    return(
        <>
            <h1>Variáveis de ambiente</h1>
            <button onClick={mostraVariaveisDeAmbiente}>Mostrar variáveis de ambiente no console</button>
        </>
    );
}

export default App;