import React, { useState, useEffect } from 'react'
import './form.css';

const EditarInscripcionForm = props => {
  const [ inscription, setInscription ] = useState(props.currentInscription)

  useEffect(
    () => {
      setInscription(props.currentInscription)
    },
    [ props ]
  )
 

  const handleInputChange = event => {
    const { name, value } = event.target

    setInscription({ ...inscription, [name]: value })
  }

  return (
    <form class= 'form-register'
      onSubmit={event => {
        event.preventDefault()

        props.updateInscription(inscription.id, inscription)
      }}
    >
      <h4>Información de las Incripciones </h4>
      <h6> Modificar la Incripción </h6>
      <input  className= 'controls' type="text" name="estado" value={inscription.estado} onChange={handleInputChange} placeholder= "Ingrese el estado"/>
			<input className= 'controls' type="text" name="egreso" value={inscription.egreso} onChange={handleInputChange} placeholder= "Ingrese la fecha de egreso"/>
			<input className= 'controls' type="text" name="proyecto" value={inscription.proyecto} onChange={handleInputChange} placeholder= "Ingrese el identificador del proyecto"/>
			<input className= 'controls' type="text" name="estudiante" value={inscription.estudiante} onChange={handleInputChange} placeholder= "Ingrese el identificador del estudiante"/>
      <button className="btn btn-warning" > Actualizar Incripción </button>
      
    </form>
  )
}

export default EditarInscripcionForm;