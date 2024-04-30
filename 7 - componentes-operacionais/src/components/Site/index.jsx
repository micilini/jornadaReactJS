import React, { Component } from 'react';
import './site.css';

class Site extends Component {
  render() {
    return (
      <>
        <small>{this.props.site}</small>
      </>
    );
  }
}

export default Site;