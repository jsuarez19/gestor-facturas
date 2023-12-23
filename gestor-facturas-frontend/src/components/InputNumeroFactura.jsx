import React from 'react';
import '../App.css';

export default function InputNumeroFactura({ onChangeValue }) {
    const buscando = (event) => {
        const textoInput = event.target.value;
        const textoInputToLowerCase = textoInput.toLowerCase();

        onChangeValue(textoInputToLowerCase);
    };

    return (
        <div className='contenido-inputs'>
            <input
                type='text'
                className='input-busqueda-factura'
                placeholder='Buscar N° Factura'
                onChange={buscando}
            />
        </div>
    );
}