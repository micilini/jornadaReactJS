const ComponenteCinco = () => {
    const status = 1;
    return(
        <div>
            {status ?//Colocamos um código Javascript de modo a verificar se o status é TRUE
            <div>
                <h2>O status é TRUE</h2>
            </div> ://Esses dois pontos representa uma espécie de ELSE do operador ternário
            <div>
                <h2>O status é FALSE</h2>
            </div>
            }
            <p>Eu vou aparecer, independentemente se o usuário estiver logado ou não...</p>
        </div>
    );
};
  
export default ComponenteCinco;