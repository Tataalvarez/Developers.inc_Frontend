import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/tablaProyectos.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_INSCRIPTIONS } from "../../graphql/inscription";
import { UPDATE_INSCRIPTION } from "../../graphql/inscription";

const DataInscripciones = () => {
  const { data, error } = useQuery(GET_INSCRIPTIONS);
  const [editInscription] = useMutation(UPDATE_INSCRIPTION);

  useEffect(() => {
    console.log("data servidor", data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los proyectos");
    }
  }, [error]);

  const DataInscripciones = useState([]);

  const [inscripcion, setInscripcion] = useState(DataInscripciones);
  const [modalEditar, setModalEditar] = useState(false);
  const [inscripcionSeleccionada, setInscripcionSeleccionada] = useState({
    identificador_estudiante: "",
    identificador_proyecto: "",
    estado: "",
    fecha_ingreso: "",
    fecha_egreso: "",
  });

  const seleccionarInscripcion = (elemento, caso) => {
    setInscripcionSeleccionada(elemento);
    caso === "Editar" ? setModalEditar(true) : editar(true);
  };

  const handleChange = (e) => {
    const { _id, value } = e.target;
    setInscripcionSeleccionada((prevState) => ({
      ...prevState,
      [_id]: value,
    }));
  };

  const editar = () => {
    var inscripcionNueva = inscripcion;
    inscripcionNueva.map((inscripcion) => {
      if (inscripcion.id === inscripcionSeleccionada.id) {
      }
    });
    setInscripcion(inscripcionNueva);
    setModalEditar(false);
  };

  return (
    <div className="Projects">
      <h2 className="text-center text-3xl font-poppins text-blackTem">
        Inscripciones Registradas
      </h2>
      <br />
      <br />
      <br />
      <table className="tabla table-bordered">
        <thead>
          <tr>
          <th>Identificador del Estudiante</th>
            <th>Identificador del Proyecto</th>
            <th>Estado</th>
            <th>Fecha de Ingreso</th>
            <th>Fecha de Egreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getInscriptions.map((elemento) => (
              <tr key={elemento.id}>
               <td>{elemento.identificador_estudiante}</td>
                <td>{elemento.identificador_proyecto}</td>
                <td>{elemento.estado}</td>
                <td>{elemento.fecha_ingreso}</td>
                <td>{elemento.fecha_egreso}</td>
                <td>
                  <div>
                    <i
                      className="far fa-edit border-green-800"
                      onClick={() => seleccionarInscripcion(elemento, "Editar")}
                    ></i>
                  </div>
                  <div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Cambiar ESTADO-FASE inscripcion</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Identificador del Estudiante</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="titulo"
              value={inscripcionSeleccionada && inscripcionSeleccionada.identificador_estudiante}
            />
            <br />

            <label>Identificador del Proyecto</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="objEspecifico"
              value={inscripcionSeleccionada && inscripcionSeleccionada.identificador_proyecto}
              onChange={handleChange}
            />
            <br />


            <label>Estado</label>
            <input
              className="form-control"
              type="text"
              name="estado"
              value={inscripcionSeleccionada && inscripcionSeleccionada.estado}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de Ingreso</label>
            <input
              className="form-control"
              type="date"
              name="fechaInicial"
              value={inscripcionSeleccionada && inscripcionSeleccionada.fecha_ingreso}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de Egreso</label>
            <input
              className="form-control"
              type="date"
              name="fechaInicial"
              value={inscripcionSeleccionada && inscripcionSeleccionada.fecha_egreso}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      </div>
  );
};


export default DataInscripciones;
