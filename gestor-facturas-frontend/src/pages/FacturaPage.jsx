import {useState} from 'react';

export const Formulario = () => {
	const [inputNumero] = useState('');
	const [inputFecha] = useState('');
  const [inputNombre] = useState('');
	const [inputCondicion] = useState('')
	

  return (
		<>
			<form action="" className="formulario">
				<div>
					<label htmlFor="numero">Numero de Factura</label>
					<input type="text" name="numero"/>
					<label htmlFor="fecha">Fecha de emision</label>
					<input type="date" name="fecha"/>
					<label htmlFor="nombre">Nombre del Cliente</label>
					<input type="text" name="nombre"/>
        </div>
        <div>
          <label htmlFor="condicion">Condicion de pago</label>
					<input type="text" name="condicion"/>
					<label htmlFor="estado">Estado</label>
					<input type="text" name="estado"/>
          <label htmlFor="cancelado">Cancelado</label>
					<input type="text" name="cancelado"/>
				</div>
        <div>
          <label htmlFor="representante">Representante</label>
					<input type="text" name="representante"/>
        </div>
        <div>
          <label htmlFor="fecha">Fecha de entrega</label>
					<input type="text" name="fechae"/>
					<label htmlFor="estatus">Estatus</label>
					<select>
            <option value="Option1">Emitido</option>
            <option value="Option2">No emitido</option>
            <option value="Option3">Anulado</option>
          </select>
          <label htmlFor="auxiliar">Auxiliar Asignado</label>
					<select>
            <option value="Option1">Asignado</option>
            <option value="Option2">Sin asignar</option>
          </select>
				</div>
        <div>
          <label htmlFor="comment">Comentarios</label>
					<input type="text" name="comment"/>
        </div>
			</form>
		</>
	);
};

export default Formulario;