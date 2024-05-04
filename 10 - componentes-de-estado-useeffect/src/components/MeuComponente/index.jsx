import React, { useEffect } from 'react';

const MeuComponente = () => {

    useEffect(() => {
        console.log("useEffect um");
    }, []);

    useEffect(() => {
        console.log("useEffect dois");
    }, []);

    useEffect(() => {
        console.log("useEffect tres");
    }, []);
    
    return(
      <>
        <h1>Meu Componente</h1>
      </>
    )
}
  
export default MeuComponente;