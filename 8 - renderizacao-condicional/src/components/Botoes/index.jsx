import React, { Component } from 'react';

class Botoes extends Component{

    constructor(props){
        super(props)
        this.state = {
            status: false//Setamos inicialmente como FALSE para simular que o usuário esta sempre deslogado quando entramos nessa tela pela primeira vez
        }
        
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({status: true})
    }

    sair(){
        this.setState({status: false})
    }

    render(){
        return(
            <div>
                {this.state.status ?
                <div>
                    <h2>Você está logado no sistema</h2>
                    <button onClick={this.sair}>Sair do Sistema</button>
                </div>
                :
                <div>
                    <h2>Você está deslogado do sistema</h2>
                    <button onClick={this.entrar}>Entrar no Sistema</button>
                </div>
                }   
            </div>
        );
    }
}

export default Botoes;