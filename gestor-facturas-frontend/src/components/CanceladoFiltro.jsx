import React, { useState } from 'react'
import FlechaAbajo from '../assets/chevron-down.svg'

export default function CanceladoFiltro() {
    const [motrarListaCancelado, setMostrarListaCancelado] = useState(true);

    const handeclick = () => {
        setMostrarListaCancelado(!motrarListaCancelado);
    }

    return (
        <div className='contenido-inputs'>
            <label htmlFor="Cancelado">Cancelado:
                <input className='estados' type="text" id='cancelado' placeholder='Elegir Estado(s)' />
                <img className='imagen-flecha' onClick={handeclick} src={FlechaAbajo} alt="Icono felcha abajo" />
            </label>
            <div className='lista-cancelado' style={motrarListaCancelado ? {} : {display: 'block'}}>
                <ul>
                    <li>S</li>
                    <li>N</li>
                </ul>
            </div>
        </div>
    )
}
