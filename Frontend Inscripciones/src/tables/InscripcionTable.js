import React from 'react';
import './InscripcionTable.css';


const InscripcionTable = props => (
  < div className = "container" >
    <h4>Tabla de Inscripciones </h4>
    <div className="barraBusqueda">
      <input 
      type= "text"
      placeholder="Buscar Inscripción"
      className="textField"
      name= "busqueda"/>
      <button type="button" className="btnBuscar"> Buscar </button>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th> ID </th>
          <th> Estado </th>
          <th> Fecha de Ingreso </th>
          <th> Fecha de Egreso </th>
          <th> Identificador del Proyecto </th>
          <th> Identificador del Estudiante </th>
          <th> Acciones </th>
        </tr>
      </thead>
      <tbody>
        {props.inscriptions.length > 0 ? (
          props.inscriptions.map(inscription => (
            <tr>
              <td>{inscription.id}</td>
              <td>{inscription.estado}</td>
              <td>{inscription.ingreso}</td>
              <td>{inscription.egreso}</td>
              <td>{inscription.proyecto}</td>
              <td>{inscription.estudiante}</td>
              <td>
                <button onClick={() => {
                    props.editRow(inscription)
                  }}
                  className="btn btn-info"
                >
                  Editar
                </button>
                <button
                  onClick={() => props.deleteInscription(inscription.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}> No hay datos en la tabla </td>
          </tr>
        )}
      </tbody>
    </table>
  </div >


)

export default InscripcionTable;