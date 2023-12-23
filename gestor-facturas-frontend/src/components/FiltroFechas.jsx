import React from 'react'
import Check from '../assets/chek.svg'
import FlechaAbajo from '../assets/flecha-abajo.svg'
import Recarga from '../assets/refresh-two.svg'

export default function FiltroFechas() {
    return (
        <div className='contenido-filtro-fechas'>
            <div className='filtro-fechas'>
                <label htmlFor="fecha-inicio"> Fecha Inicio:
                    <input type="date" id='fecha-inicio' />
                </label>
            </div>
            <div className='filtro-fechas'>
                <label htmlFor="fecha-final"> Fecha Final:
                    <input type="date" id='fecha-final' />
                </label>
            </div>
            <div className='contenido-imagenes-fechas'>
                <img className='imagen-check' src={Check} alt="" />
                <img className='imagen-recarga' src={Recarga} alt="" />
                <img className='imagen-flecha-abajo' src={FlechaAbajo} alt="" />
            </div>
        </div>
    )
}
