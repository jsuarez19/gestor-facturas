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
    const [buscarEstado, setBuscarEstado] = useState("");
    const [buscarCancelado, setBuscarCancelado] = useState("");
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

    const manejarCambiarEntrada = (text, tipo) => {
        if (tipo === 'numeroFactura') {
            setBuscarFactura(text);
        } else if (tipo === 'estado') {
            setBuscarEstado(text);
        } else if (tipo === 'buscarCancelado') {
            setBuscarCancelado(text);
        }
    }


    return (
        <div className='contenido-total-seccion-busqueda'>
            <div className='Contenido-seccion-busqueda'>
                <InputNumeroFactura onChangeValue={(text) => manejarCambiarEntrada(text, 'numeroFactura')} />
                <EstatusFiltro onChangeValue={(text) => manejarCambiarEntrada(text, 'estado')} 
                />
                <CanceladoFiltro onChangeValue={(text) => manejarCambiarEntrada(text, 'buscarCancelado')} />
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
                            const contieneNumeroFactura = buscarFactura ? factura.NUMERO_FACTURA.toLowerCase().includes(buscarFactura) : true;
                            const contieneEstatus = buscarEstado ? factura.ESTATUS.toLowerCase().includes(buscarEstado) : true;
                            const contieneCancelado = buscarCancelado ? factura.CANCELADO.toLowerCase().includes(buscarCancelado) : true;
                            return contieneNumeroFactura && contieneEstatus && contieneCancelado
                        })

                        .map((factura) => {
                            // cambiar color y texto de si esta cancelado o no
                            let estadoTexto;
                            let estadoClase;

                            if (factura.ESTADO === 'ACT') {
                                //cambiar texto segun el valor que nos pase la base de datos
                                estadoTexto = 'ACTIVA';
                                // cambiar el background segun el valor que nos pase la base de datos
                                estadoClase = 'activa ultima-columna'
                            } else if (factura.ESTADO === 'ANU') {
                                estadoTexto = 'ANULADA'; 
                                estadoClase = 'anulada ultima-columna'
                            } else if (factura.ESTADO === 'NCA') {
                                estadoTexto = 'ANULADA CON NC';
                                estadoClase = 'anulada-con-nc ultima-columna'
                            }

                            // cambiar nombre de la clase segun si la factura esta cancelada o no
                            let canceladoClase;
                            if (factura.CANCELADO === 'S') {
                                canceladoClase = 'cancelado-si'
                            } else if (factura.CANCELADO === 'N') {
                                canceladoClase = 'cancelado-no'
                            }

                            // cambiar el nombre de la clase segun el estatus de la clase 
                            let estatusClase;
                            if(factura.ESTATUS === 'Emitido') {
                                estatusClase = 'estatus-emitido'
                            } else if (factura.ESTATUS === 'Programado') {
                                estatusClase = 'estatus-programado'
                            } else if (factura.ESTATUS === 'Ingresado') {
                                estatusClase = 'estatus-ingresado'
                            } else if (factura.ESTATUS === 'Rechazado') {
                                estatusClase = 'estatus-rechazado'
                            }

                            return (
                                <tr key={factura.NUMERO_FACTURA} className='fila-tabla'  >
                                    <td className='primera-columna'>{factura.NUMERO_FACTURA}</td>
                                    <td>{factura.FECHA_EMISION}</td>
                                    <td className={estatusClase}>{factura.ESTATUS}</td>
                                    <td>{factura.PERSONAL_ASIGNADO}</td>
                                    <td>{factura.NOMBRE_CLIENTE}</td>
                                    <td >{factura.FECHA_ENTREGA}</td>
                                    <td className={canceladoClase}>{factura.CANCELADO === 'S' ? 'SI' : 'NO'}</td>
                                    <td className={estadoClase}>{estadoTexto}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
