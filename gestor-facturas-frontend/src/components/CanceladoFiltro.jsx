import React, { useEffect, useState } from 'react'
import imagenes from './imagenes';


export default function CanceladoFiltro({ onChangeValue, value }) {
    const [motrarListaCancelado, setMostrarListaCancelado] = useState(false);
    const [canceladoSeleccionado, setCanceladoSeleccionado] = useState('');

    const handeclick = () => {
        setMostrarListaCancelado(!motrarListaCancelado);
    }
    const ocultarSiempre = () => {
        setMostrarListaCancelado(false);
    }
    

    const BuscandoCancelado = (event) => {
        const textoInput = event.target.value;
        const textoInputToLowerCase = textoInput.toLowerCase();

        setCanceladoSeleccionado(textoInputToLowerCase);
        // onChangeValue(textoInputToLowerCase);
    }

    const filtratPorCancelado = (cancelado) => {
        setCanceladoSeleccionado(cancelado);
        onChangeValue(cancelado);
        ocultarSiempre();
    }

    const limpiarInputCancelado = () => {
        setCanceladoSeleccionado('');
        onChangeValue('');
    }

    // Actualiza el estado cuando el valor cambia desde las props
    useEffect(() => {
        setCanceladoSeleccionado(value);
    }, [value]);


    return (
        <div className='contenido-inputs'>
            <label>Cancelado:
                {canceladoSeleccionado && (<button className='clear-boton-cancelado' onClick={limpiarInputCancelado}>
                    <span>&times;</span>
                </button>)}
                <input 
                onChange={BuscandoCancelado}
                value={canceladoSeleccionado}
                className='estados'
                type="text"
                placeholder='Elegir Estado(s)' />
                <img className='imagen-flecha cancelado-flecha' onClick={handeclick} src={imagenes['img-flecha']} alt="Icono felcha abajo" />
            </label>
            <div className='lista-cancelado' style={motrarListaCancelado ? { display: 'block' } : {}}>
                <ul>
                    <li onClick={() => filtratPorCancelado('s')}>S</li>
                    <li onClick={() => filtratPorCancelado('n')}>N</li>
                </ul>
            </div>
        </div>
    )
}
