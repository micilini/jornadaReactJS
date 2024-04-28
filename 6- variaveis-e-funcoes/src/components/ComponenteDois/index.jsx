const ComponenteDois = () => {
    let nome = "Micilini";

    const mudaNome = () => {
        nome = "Micilini Roll";
        mostraNome();
    }

    const mostraNome = () => {
        console.log(nome);
    }

    return(
        <>
            <h1>Nome: {nome}</h1>
            <p>{mudaNome()}</p>
        </>
    )
}

export default ComponenteDois;