import React, { Component } from 'react';

class Feed extends Component{
    render(){
        return(
            <div key={this.props.key}>
                    <h3><strong>Nome:</strong> {this.props.username}</h3>
                    <a><strong>{this.props.curtidas <= 1 ? 'Curtida' : 'Curtidas'}:</strong> {this.props.curtidas} | <strong>{this.props.comentarios <= 1 ? 'Comentário' : 'Comentários'}:</strong> {this.props.comentarios}</a>
            </div>
        );
    }
}

export default Feed;