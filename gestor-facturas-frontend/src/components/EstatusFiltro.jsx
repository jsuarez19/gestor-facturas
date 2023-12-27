import React, { useState } from 'react';
import FlechaAbajo from '../assets/chevron-down.svg';
import '../App.css';

export default function EstatusFiltro({ onChangeValue }) {
    const [mostrarListaEstatus, setMostrarListaEstatus] = useState(false);
    const [estadoSeleccionado, setEstadoSeleccionado] = useState('');

    const handleClick = () => {
        setMostrarListaEstatus(!mostrarListaEstatus);
    };
    const ocultarSiempre = () => {
        setMostrarListaEstatus(false);
    }
    const mostrarSiempre = () => {
        setMostrarListaEstatus(true);
    }

    const BuscandoEstatus = (event) => {
        console.log(event.target.value, 'estado')
        const textoInput = event.target.value;
        const textoInputToLowerCase = textoInput.toLowerCase();

        onChangeValue(textoInputToLowerCase);
    };

    const filtrarPorEstatus = (estado) => {
        console.log(estado, 'estados')
        setEstadoSeleccionado(estado);
        onChangeValue(estado);
        ocultarSiempre();
    }

    return (
        <div className='contenido-inputs'>
            <label htmlFor="Estatus">
                Estatus N° 1
                <input
                    onChange={BuscandoEstatus}
                    onFocus={mostrarSiempre}
                    value={estadoSeleccionado}
                    className='estados'
                    type="text"
                    id='Estatus'
                    placeholder='Elegir Estado(s)'
                />
                <img className='imagen-flecha' onClick={handleClick} src={FlechaAbajo} alt="icono flecha abajo" />
            </label>
            <div className='lista-estatus' style={mostrarListaEstatus ? { display: 'block' } : { display: 'none' }}>
                <ul>
                    <li onClick={() => filtrarPorEstatus('emitido')}>Emitido</li>
                    <li onClick={() => filtrarPorEstatus('programado')}>Programado</li>
                    <li onClick={() => filtrarPorEstatus('ingresado')}>Ingresado</li>
                    <li onClick={() => filtrarPorEstatus('rechazado')}>Rechazado</li>
                </ul>
            </div>
        </div>
    );
}