import React, { Component } from 'react';
import './footer.css';
import Site from '../Site';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>© {this.props.ano} - Todos os Direitos Reservados! <Site site={this.props.site} /></p>
      </footer>
    );
  }
}

export default Footer;