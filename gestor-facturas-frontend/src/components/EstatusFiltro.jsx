import React, { useState,useEffect } from 'react';
import imagenes from './imagenes';


export default function EstatusFiltro({ onChangeValue, value }) {
    const [mostrarListaEstatus, setMostrarListaEstatus] = useState(false);
    const [estadoSeleccionado, setEstadoSeleccionado] = useState('');

    const handleClick = () => {
        setMostrarListaEstatus(!mostrarListaEstatus);
    };

    const ocultarSiempre = () => {
        setMostrarListaEstatus(false);
    }

    const BuscandoEstatus = (event) => {
        const textoInput = event.target.value;
        const textoInputToLowerCase = textoInput.toLowerCase();

        setEstadoSeleccionado(textoInputToLowerCase);
        onChangeValue(textoInputToLowerCase);
    };

    
    const filtrarPorEstatus = (estado) => {
        setEstadoSeleccionado(estado);
        onChangeValue(estado);
        ocultarSiempre();
    }
    // Actualiza el estado cuando el valor cambia desde las props
    useEffect(() => {
        setEstadoSeleccionado(value);
    }, [value]);

    
    const limpiarInput = () => {
        setEstadoSeleccionado('');
        onChangeValue('');
    };
    return (
        <div className='contenido-inputs'>
            <label htmlFor="Estatus">
                Estatus N° 1
                    {estadoSeleccionado && (
                        <button className='clear-button' onClick={limpiarInput}>
                            <span>&times;</span>
                        </button>
                    )}
                <div className='input-container'>
                    <input
                        onChange={BuscandoEstatus}
                        value={estadoSeleccionado}
                        className='estados'
                        type="text"
                        id='Estatus'
                        placeholder='Elegir Estado(s)'
                    />
                </div>
                <img className='imagen-flecha estatus-flecha' onClick={handleClick} src={imagenes['img-flecha']} alt="icono flecha abajo" />
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