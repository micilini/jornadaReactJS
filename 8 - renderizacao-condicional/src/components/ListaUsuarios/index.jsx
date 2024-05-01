import React, { Component } from 'react';
import Feed from '../Feed';

class ListaUsuarios extends Component{

    constructor(props){
        super(props)
        this.state = {
            feed:[
               {id: 1, username: 'Micilini', curtidas: 10, comentarios: 2},
               {id: 2, username: 'Minar', curtidas: 120, comentarios: 21},
               {id: 3, username: 'Roger', curtidas: 130, comentarios: 22},
               {id: 4, username: 'Gauzo', curtidas: 0, comentarios: 1},
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.feed.map((item) => {
                    return(
                        <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
                    );
                })}
            </div>
        );
    }
}

export default ListaUsuarios;