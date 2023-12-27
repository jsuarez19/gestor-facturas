import React, { useState } from 'react'
import FlechaAbajo from '../assets/chevron-down.svg'
import '../App.css';

export default function CanceladoFiltro({onChangeValue}) {
    const [motrarListaCancelado, setMostrarListaCancelado] = useState(false);

    const handeclick = () => {
        setMostrarListaCancelado(!motrarListaCancelado);
    }
    const ocultarSiempre = () => {
        setMostrarListaCancelado(false);
    }
    const mostrarSiempre= () => {
        setMostrarListaCancelado(true);
    }

    const buscandoCancelado = (event) => {
        const textoInput =  event.target.value;
        const textoInputToLowerCase = textoInput.toLowerCase();

        onChangeValue(textoInputToLowerCase);
    }
   

    return (
        <div className='contenido-inputs'>
            <label onBlur={ocultarSiempre}>Cancelado:
                <input onChange={buscandoCancelado} onFocus={mostrarSiempre} className='estados' type="text" placeholder='Elegir Estado(s)' />
                <img className='imagen-flecha' onClick={handeclick} src={FlechaAbajo} alt="Icono felcha abajo" />
            </label>
            <div className='lista-cancelado' style={motrarListaCancelado ? {display: 'block'} : {}}>
                <ul>
                    <li>S</li>
                    <li>N</li>
                </ul>
            </div>
        </div>
    )
}
