import React, {useState} from 'react'
import FlechaAbajo from '../assets/chevron-down.svg'

export default function EstatusFiltro() {
    const [mostrarListaEstatus, setMostrarListaEstatus] = useState(true);

    const handeclick = () => {
        setMostrarListaEstatus(!mostrarListaEstatus);
    }

    return (
        <div className='contenido-inputs'>
            <label htmlFor="Estatus">Estatus N° 1
                <input className='estados' type="text" id='Estatus' placeholder='Elegir Estado(s)' />
                <img className='imagen-flecha' onClick={handeclick} src={FlechaAbajo} alt="icono flecha abajo" /> {/* click para mostrar la lista de estatus */}
            </label>
            <div className='lista-estatus' style={mostrarListaEstatus ? {} : { display: 'block' }}>
                <ul>
                    <li>Emitido</li>
                    <li>Programado</li>
                    <li>Ingresado</li>
                    <li>Rechazado</li>
                </ul>
            </div>
        </div>
    )
}
