import React from "react";
// import { useLocation, useParams } from "react-router";

export default function Usuario({ nombre, apellido, setDataToEdit, deleteData}) {
  // let { name } = useParams();
  // let location = useLocation();
  // console.log(location);

  return (
    <div>
      <h2 className="text-xl text-gray-800">Perfil del Usuario</h2>
      <p>Nombre: {nombre} <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i> </p>
      <p>Apellido: {apellido}</p>
    <div>
      <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
      <i className="fas fa-trash-alt" onClick={() => deleteData(id)}></i>
    </div>
          <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteData(id)}></i>
      
    </div>
  );
}
