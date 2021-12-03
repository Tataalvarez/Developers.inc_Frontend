import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { ModalNewProject } from "../components/Projects/ModalNewProject";


const ListProject = () => { 
  const abrirModalNewProject = () => {
//    ModalNewProject(true);
  };

  return (
    <div className="ListProject">
      <h2 className="text-3xl font-poppins text-blackTem">
        Proyectos Registrados
      </h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalNewProject()}>
        Inscribir Proyecto
      </button>
      <br />
      <br />
      </div>
  );
}

export default ListProject;