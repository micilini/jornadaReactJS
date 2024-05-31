import React from 'react';

const Amostrador = (props) => {
    return (
        <>
            <h2>Amostrador: {props.contador}</h2>
        </>
    );
}

export default React.memo(Amostrador);