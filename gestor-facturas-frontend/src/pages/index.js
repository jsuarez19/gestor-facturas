import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Formulario from './FacturaPage.jsx';


ReactDOM.render(
	<React.StrictMode>
		<div className="contenedor">
			<Formulario />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);