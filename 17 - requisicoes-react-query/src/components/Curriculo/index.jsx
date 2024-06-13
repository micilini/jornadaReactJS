import React, {useEffect, useState} from 'react';

const Curriculo = ({ curriculo }) => {
    return (
        <div>
            <a href={curriculo} target="_blank">Download do Currículo</a>
        </div>
    );
}

export default Curriculo;