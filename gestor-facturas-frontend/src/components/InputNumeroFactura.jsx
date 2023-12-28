import React, { useState } from 'react';
import { useEffect } from 'react';


export default function InputNumeroFactura({ onChangeValue, value }) {
    const [inputState, setInputState] =  useState('');
    const buscando = (event) => {
        const textoInput = event.target.value;
        const textoInputToLowerCase = textoInput.toLowerCase();

        onChangeValue(textoInputToLowerCase);
        console.log(textoInputToLowerCase);
    };

    useEffect(() => {
        const valorAUsar = value || ''; // Valor predeterminado si value es nulo o indefinido
        
        if (valorAUsar !== inputState) {
            setInputState(valorAUsar);
        }
    }, [value]);

    return (
        <div className='contenido-inputs'>
            <input
                type='text'
                className='input-busqueda-factura'
                placeholder='Buscar N° Factura'
                value={value}
                onChange={buscando}
            />
        </div>
    );
}