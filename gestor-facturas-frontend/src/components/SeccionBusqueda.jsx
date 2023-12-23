import React, { useState, useEffect } from 'react'
import '../App.css';
import Refresh from '../assets/refresh.svg'
import Calendario from '../assets/calendar-outline.svg'
import EstatusFiltro from './EstatusFiltro'
import CanceladoFiltro from './CanceladoFiltro'
import FiltroFechas from './FiltroFechas'
import InputNumeroFactura from './InputNumeroFactura';

export default function SeccionBusqueda() {
    const [mostrarFiltroFechas, setMostrarFiltroFechas] = useState(true);  //state para mostrar el filtro por fechas
    const handeclick = () => {
        setMostrarFiltroFechas(!mostrarFiltroFechas);
    }

    // state para buscar el numero de factura
    const [numeroFactura, setNumeroFactura] = useState([]);
    const [buscarFactura, setBuscarFactura] = useState("");
    const [filtroNumeroFactura, setFiltroNumeroFactura] = useState([]);

    const URL = 'https://jolusuvi.pythonanywhere.com/api/documentos/?format=json';
    // funcion para obtener los datos de la API
    const showData = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setNumeroFactura(data);
            setFiltroNumeroFactura(data);
        } catch (error) {
            console.error('Error al obtener datos de la API:', error);
        }
    };

    useEffect(() => {
        showData();
    }, []);

    const manejarCambiarEntrada = (text) => {
        setBuscarFactura(text);
    }


    return (
        <div className='contenido-total-seccion-busqueda'>
            <div className='Contenido-seccion-busqueda'>
                <InputNumeroFactura onChangeValue={manejarCambiarEntrada} />
                <EstatusFiltro />
                <CanceladoFiltro />
                <img className='imagen-logo' src={Refresh} alt="" />
                <button>Actualizar Facturas</button>
                <button>Distribuciones</button>
                <img className='imagen-logo' onClick={handeclick} src={Calendario} alt="" />
            </div>
            <div className='total-filtro-fechas' style={mostrarFiltroFechas ? {} : { display: 'flex' }}>
                <FiltroFechas />
            </div>
            <table className='contenido-tabla'>
                
                <thead className='tabla-seccion-header'>
                    <tr>
                        <th>N° Factura</th>
                        <th>Fecha Emision</th>
                        <th>Estatus</th>
                        <th>Personal Asignado</th>
                        <th>Cliente</th>
                        <th>Fecha Entrega</th>
                        <th>Cancelado</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {numeroFactura
                        .filter((factura) => {
                            return buscarFactura ? factura.NUMERO_FACTURA.toLowerCase().includes(buscarFactura) : true;
                        })
                        .map((factura) => {
                            return (
                                <tr key={factura.NUMERO_FACTURA}>
                                    <td>{factura.NUMERO_FACTURA}</td>
                                    <td>{factura.FECHA_EMISION}</td>
                                    <td>{factura.ESTATUS}</td>
                                    <td>{factura.PERSONAL_ASIGNADO}</td>
                                    <td>{factura.NOMBRE_CLIENTE}</td>
                                    <td>{factura.FECHA_ENTREGA}</td>
                                    <td>{factura.CANCELADO}</td>
                                    <td>{factura.ESTADO}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
