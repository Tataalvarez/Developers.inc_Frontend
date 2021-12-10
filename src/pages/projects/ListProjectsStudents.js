import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/tablaProyectos.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../graphql/project";

const DataProyectos = () => {
  const { data, error } = useQuery(GET_PROJECTS);

  useEffect(() => {
    console.log("data servidor", data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los proyectos");
    }
  }, [error]);

  const dataProyectos = useState([]);

  const [proyecto, setProyecto] = useState(dataProyectos);
  const [modalVer, setModalVer] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState({
    titulo: "",
    objEspecifico: "",
    presupuesto: "",
    nombreLider: "",
    identificacionLider: "",
    estado: "",
    fase: "",
    fechaInicial: "",
    fechaFinal: "",
  });

  const seleccionarProyecto = (elemento, caso) => {
    setProyectoSeleccionado(elemento);
    caso = "ver" ? setModalVer(true) : ver(true);
  };

  const handleChange = (e) => {
    const { _id, value } = e.target;
    setProyectoSeleccionado((prevState) => ({
      ...prevState,
      [_id]: value,
    }));
  };

  const ver = () => {
    var proyectoNuevo = proyecto;
    proyectoNuevo.map((proyecto) => {
      if (proyecto.id === proyectoSeleccionado.id) {
      }
    });
    setProyecto(proyectoNuevo);
    setModalVer(false);
  };

  return (
    <div className="Projects">
      <h2 className="text-center text-3xl font-poppins text-blackTem">
        Proyectos Registrados
      </h2>
      <br />
      <table className="tabla table-bordered">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Objetivo Especifico</th>
            <th>Presupuesto</th>
            <th>Nombre Lider</th>
            <th>Identificacion Lider</th>
            <th>Estado</th>
            <th>Fase</th>
            <th>Fecha Inicial</th>
            <th>Fecha Final</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getProjects.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.titulo}</td>
                <td>{elemento.objEspecifico}</td>
                <td>{elemento.presupuesto}</td>
                <td>{elemento.nombreLider}</td>
                <td>{elemento.identificacionLider}</td>
                <td>{elemento.estado}</td>
                <td>{elemento.fase}</td>
                <td>{elemento.fechaInicial}</td>
                <td>{elemento.fechaFinal}</td>
                <td>
                  <div>
                    <i
                      className="far fa-eye border-green-800"
                      onClick={() => seleccionarProyecto(elemento, "Ver")}
                    ></i>
                  </div>
                  <div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal isOpen={modalVer}>
        <ModalHeader>
          <div>
            <h3>Ver Proyecto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Titulo</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="titulo"
              value={proyectoSeleccionado && proyectoSeleccionado.titulo}
            />
            <br />

            <label>Objetivo Especifico</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="objEspecifico"
              value={proyectoSeleccionado && proyectoSeleccionado.objEspecifico}
              onChange={handleChange}
            />
            <br />

            <label>Presupuesto</label>
            <input
              className="form-control"
              readOnly
              type="number"
              name="presupuesto"
              value={proyectoSeleccionado && proyectoSeleccionado.presupuesto}
              onChange={handleChange}
            />
            <br />

            <label>Nombre Lider</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="nombrelider"
              value={proyectoSeleccionado && proyectoSeleccionado.nombreLider}
              onChange={handleChange}
            />
            <br />

            <label>Estado</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="estado"
              value={proyectoSeleccionado && proyectoSeleccionado.estado}
              onChange={handleChange}
            />
            <br />

            <label>Fase</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="fase"
              value={proyectoSeleccionado && proyectoSeleccionado.fase}
              onChange={handleChange}
            />
            <br />

            <label>Fecha Inicial</label>
            <input
              className="form-control"
              readOnly
              type="date"
              name="fechaInicial"
              value={proyectoSeleccionado && proyectoSeleccionado.fechaInicial}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => ver()}>
            Inscribirse
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalVer(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DataProyectos;
