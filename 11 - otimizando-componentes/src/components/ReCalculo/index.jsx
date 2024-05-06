import React, { useState, useMemo } from "react";

const ReCalculo = () => {
    const [nome, setNome] = useState("");
    const [level, setLevel] = useState(1);

    const rank = useMemo(() => {
        console.log(`Calculando Rank no nível ${level}...`);
        // Simulação de cálculo de rank com base no nível
        return level * 10; // Exemplo simples: o rank é 10 vezes o nível
    }, [level]); // Dependência apenas do level

    return (
        <>
            <input type="text" placeholder="Qual seu Nome?" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="number" placeholder="Nível" value={level} onChange={(e) => setLevel(Number(e.target.value))} />
            <p>Meu nome é {nome}, e sou rank {rank}</p>
        </>
    );
}

export default ReCalculo;
