import React, { useState } from 'react'
import './form.css';

const AñadirInscripcionForm = props => {
	const initialFormState = { id: "", estado: '', ingreso: '', egreso:"", proyecto:"", estudiante: ""}
	const [ inscription, setInscription ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setInscription({ ...inscription, [name]: value })
	}

	return (
		
		<form className= 'form-register'
			onSubmit={event => {
				event.preventDefault()
				if (!inscription.id || !inscription.estado || !inscription.ingreso || !inscription.egreso || !inscription.proyecto || !inscription.estudiante) return

				props.addInscription(inscription)
				setInscription(initialFormState)
			}}
		>
			<h4>Información de las Inscripciones</h4>
			<h6> Registrar un Inscripción </h6>
			<input className= 'controls' type="text" name="id" value={inscription.id} onChange={handleInputChange}  placeholder= "Ingrese el id"/>
			<input  className= 'controls' type="text" name="estado" value={inscription.estado} onChange={handleInputChange} placeholder= "Ingrese el estado"/>
			<input className= 'controls' type="text" name="ingreso" value={inscription.ingreso} onChange={handleInputChange}  placeholder= "Ingrese la fecha de incripción"/>
			<input className= 'controls' type="text" name="egreso" value={inscription.egreso} onChange={handleInputChange} placeholder= "Ingrese la fecha de egreso"/>
			<input className= 'controls' type="text" name="proyecto" value={inscription.proyecto} onChange={handleInputChange} placeholder= "Ingrese el identificador del proyecto"/>
			<input className= 'controls' type="text" name="estudiante" value={inscription.estudiante} onChange={handleInputChange} placeholder= "Ingrese el identificador del estudiante"/>
			<button className="btn btn-success" > Agregar </button>
		</form>
	)
}

export default AñadirInscripcionForm;