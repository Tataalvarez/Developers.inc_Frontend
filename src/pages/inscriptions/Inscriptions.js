import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/tablaProyectos.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { NEW_INSCRIPTION } from "../../graphql/inscription";
import { GET_INSCRIPTIONS } from "../../graphql/inscription";
import { DELETE_INSCRIPTION } from "../../graphql/inscription";

const DataIncripciones = () => {
  const { data, error } = useQuery(GET_INSCRIPTIONS);

  useEffect(() => {
    console.log("data servidor", data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando las Incripciones");
    }
  }, [error]);

  const [newInscription] = useMutation(NEW_INSCRIPTION);
  const [deleteInscription] = useMutation(DELETE_INSCRIPTION);
  const DataIncripciones = useState([]);

  const [inscripcion, setInscripcion] = useState(DataIncripciones);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [inscripcionSeleccionada, setInscripcionSeleccionada] = useState({
    identificador_estudiante: "",
    identificador_proyecto: "",
    estado: "",
    fecha_ingreso: "",
    fecha_egreso: "",
  });

  const seleccionarInscripcion = (elemento, caso) => {
    setInscripcionSeleccionada(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
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

  const eliminar = () => {
    deleteInscription(
      //   inscripcion.filter((inscripcion) => inscripcion.id !== inscripcionSeleccionada.id)
      deleteInscription((id) => inscripcion.id !== inscripcionSeleccionada.id)
    );
    setModalEliminar(true);
  };

  const abrirModalInsertar = () => {
    setInscripcionSeleccionada(null);
    setModalInsertar(true);
  };

  //  const insertar = () => {
  //    var valorInsertar = inscripcionSeleccionada;
  //    valorInsertar.id = inscripcion.id;
  //   var inscripcionNueva = inscripcion;
  //  inscripcionNueva.push(valorInsertar);
  // setInscripcion(inscripcionNueva);
  //  setModalInsertar(false);
  //  };

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      const {
        identificador_estudiante,
        identificador_proyecto,
        estado,
        fecha_ingreso,
        fecha_egreso,
      } = values;
      try {
        const { data } = await newInscription({
          variables: {
            input: {
              identificador_estudiante,
              identificador_proyecto,
              estado,
              fecha_ingreso,
              fecha_egreso,
            },
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <div className="Projects">
      <h2 className="text-center text-3xl font-poppins text-blackTem">
        Inscripciones Realizadas
      </h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Nueva Inscripción
      </button>
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
            data.getProjects.map((elemento) => (
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
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => seleccionarInscripcion(elemento, "Eliminar")}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Inscripcion</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Identificador del Estudiante</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="identificador_estudiante"
              value={inscripcionSeleccionada && inscripcionSeleccionada.identificador_estudiante}
            />
            <br />

            <label>Identificador del Proyecto</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="identificador_proyecto"
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
              name="fecha_ingreso"
              value={inscripcionSeleccionada && inscripcionSeleccionada.fecha_ingreso}
              onChange={handleChange}
            />
            <br />
            <label>Fecha de Egreso</label>
            <input
              className="form-control"
              type="date"
              name="fecha_egreso"
              value={inscripcionSeleccionada && inscripcionSeleccionada.fecha_egreso}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Editar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el inscripcion{" "}
          {inscripcionSeleccionada && inscripcionSeleccionada.titulo}
        </ModalBody>
        <ModalFooter>
          <button
            onClick={() => {
              eliminar({
                variables: { data: inscripcion.id },
              });
              window.location.href = "/inscriptions";
            }}
            className="btn btn-primary"
          >
            {" "}
            Eliminar
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Nueva Inscripción</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Identificador del Estudiante</label>
              <input
                className="form-control"
                type="text"
                name="identificador_estudiante"
                value={formik.values.identificador_estudiante}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Identificador del Estudiante</label>
              <input
                className="form-control"
                type="text"
                name="identificador_proyecto"
                value={formik.values.identificador_proyecto}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Estado</label>
              <select
                name="estado"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Estado de la inscripcion" />
                <option value="ACEPTADA" label="Aceptada" />
                <option value="RECHAZADA" label="Rechazada" />
              </select>
              <br />

              <label>Fecha de Ingreso</label>
              <input
                className="form-control"
                type="date"
                name="fecha_ingreso"
                value={formik.values.fecha_ingreso}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Fecha de Egreso</label>
              <input
                className="form-control"
                type="date"
                name="fecha_egreso"
                value={formik.values.fecha_egreso}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
            <ModalFooter>
              <button
                onClick={() => {
                  setModalInsertar({
                    variables: { inscripcion: inscripcion.id },
                  });
                  window.location.href = "/inscriptions";
                }}
                className="btn btn-primary"
              >
                {" "}
                Inscribir
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setModalInsertar(false)}
              >
                Cancelar
              </button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DataIncripciones;

function initialValues() {
  return {
    identificador_estudiante: "",
    identificador_proyecto: "",
    estado: "",
    fecha_ingreso: "",
    fecha_egreso: "",
  };
}
