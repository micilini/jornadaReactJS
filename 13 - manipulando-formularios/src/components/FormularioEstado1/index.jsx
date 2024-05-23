import React, { useState } from 'react';

const FormularioClasse1 = () => {
    const [email, setEmail] = useState('meu@email.com');
    const [senha, setSenha] = useState('1234567890');

    const trocaEmail = (event) => {
        let valorDigitado = event.target.value;
        setEmail(valorDigitado);
    };

    return (
        <div>
            <h2>Faça seu Login:</h2>
            Email: <input type="email" name="email" value={email} onChange={trocaEmail} /><br />
            Senha: <input type="password" name="senha" value={senha} onChange={(event) => setSenha(event.target.value)} />

            <div>
                <p>Email: {email}</p>
                <p>Senha: {senha}</p>
            </div>
        </div>
    );
}

export default FormularioClasse1;