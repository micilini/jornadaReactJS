import React from 'react';

class ComponenteSete extends React.Component {
  render() {
    const status = 1;
    return (
      <div>
        {status === 1 && (
          <div>
            <h1>Você está logado!</h1>
            <p>Pode fazer o que quiser dentro da plataforma =)</p>
          </div>
        )}
        <p>Eu vou aparecer, independentemente se o usuário estiver logado ou não...</p>
      </div>
    );
  }
}

export default ComponenteSete;
