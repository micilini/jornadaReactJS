import React, { useState } from 'react';

const LimiteComBug = () => {
    const [limiteDoCartao, setLimiteDoCartao] = useState(2700);
    const [valorCompra, setValorCompra] = useState(0);
    const [foiComprado, setFoiComprado] = useState(false);
    const [limiteUltrapassado, setLimiteUltrapassado] = useState(false);

    function handleChange(event){
        if(event.target.value === 57426983223){
            setLimiteDoCartao(7800);
            alert('Limite aumentado para R$ 7.800,00');
        }
        setValorCompra(event.target.value);
        if(event.target.value > limiteDoCartao){
            setFoiComprado(false);
            setLimiteUltrapassado(true);
            return;
        }
        setFoiComprado(true);
        setLimiteUltrapassado(false);
        console.log('Limite do Cartão: ' + limiteDoCartao);
    }

    return(
        <div>
            <p>Qual é o valor da compra do produto que você está querendo comprar? (Seu limite de crédito é de R${limiteDoCartao})</p>
            <input type="number" placeholder="Digite o valor da compra" value={valorCompra} onChange={handleChange} />

            {valorCompra <= 0 && <p style={{ color: 'gray' }}>Insira o valor de compra no campo acima!</p>}

            {foiComprado && <p style={{ color: 'green' }}>Você acabou de comprar um produto no valor de R$ {valorCompra}</p>}

            {limiteUltrapassado && <p style={{ color: 'red' }}>O valor do produto ultrapassa o limite de compra! (R$ {valorCompra}/{limiteDoCartao})</p>}

        </div>
    );
}

export default LimiteComBug;
