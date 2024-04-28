const Componente = () => {
    const nome = "Micilini";
    let rank = 10;
    var site = "https://www.micilini.com.br";
    return (
        <div>
            <p>{nome} - {rank} - {site}</p>
            <p>Calculo do Rank: {rank - 3}</p>
            <p>
                {
                    (() => {
                        if (rank > 5) {
                            return <p>Rank maior que 5</p>;
                        } else {
                            return <p>Rank menor que 5</p>;
                        }
                    })()
                }
            </p>
        </div>
    );
}

export default Componente;