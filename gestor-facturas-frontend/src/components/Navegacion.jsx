import React from 'react'
import { Outlet } from 'react-router-dom'
import Titulo from './Titulo'
import Bienvenido from './Bienvenido'
import Exclude from '../assets/Exclude.svg'
import Persona from '../assets/persona-sin-foto.svg'
import Logo from '../assets/logo-empresa.svg'
import '../App.css';

export default function Navegacion() {
    return (
        <div>
            <header className='contenido-header'>
                <img className="icono-regreso" src={Exclude} alt="Icono de regreso" />
                <Titulo
                    texto='Facturaciones App Distribuciones'
                />
                <Bienvenido />
                <img className='icono-persona-sin-foto' src={Persona} alt="imagen de persona sin foto" />
                <img className='logo-empresa' src={Logo} alt="logo de la empressa SURGICORP" />
            </header>

            <Outlet></Outlet>
        </div>
    )
}
