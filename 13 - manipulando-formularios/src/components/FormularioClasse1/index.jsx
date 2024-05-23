import React, { Component } from 'react';

class FormularioClasse1 extends Component{

    constructor(props){
        super(props)
        this.state = {
            email: 'meu@email.com',
            senha: '1234567890'
        }

        this.trocaEmail = this.trocaEmail.bind(this);
    }

    trocaEmail(event){
        let valorDigitado = event.target.value;
        this.setState({email: valorDigitado});
    }

    render(){
        return(
            <div>
                <h2>Faça seu Login:</h2>
                Email: <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail} /><br/>
                Senha: <input type="password" name="senha" value={this.state.senha} onChange={ (event) => this.setState({senha: event.target.value}) } />

                <div>
                    <p>Email: {this.state.email}</p>
                    <p>Senha: {this.state.senha}</p>
                </div>
            </div>
        );
    }
}

export default FormularioClasse1;