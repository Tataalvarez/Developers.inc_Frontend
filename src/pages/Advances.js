import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../../styles/tablaProyectos.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { NEW_ADVANCE } from "../graphql/advances";
import { GET_ADVANCES } from "../graphql/advances";

const Advances = () => {
  const { data, error } = useQuery(GET_ADVANCES);

  useEffect(() => {
    console.log("data servidor", data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los avances");
    }
  }, [error]);

  const [newAdvance] = useMutation(NEW_ADVANCE);
  const Advance = useState([]);

  const [avance, setAvance] = useState(Advance);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [avanceSeleccionado, setAvanceSeleccionado] = useState({
    id: "",
    fecha: "",
    descripcion: "",
    observaciones: "",
    proyecto: "",
    creadoPor: "",
  });

  const seleccionarAvance = (elemento, caso) => {
    setAvanceSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { _id, value } = e.target;
    setAvanceSeleccionado((prevState) => ({
      ...prevState,
      [_id]: value,
    }));
  };

  const editar = () => {
    var avanceNuevo = avance;
    avanceNuevo.map((avance) => {
      if (avance.id === avanceSeleccionado.id) {
      }
    });
    setAvance(avanceNuevo);
    setModalEditar(false);
  };

  const eliminar = () => {
    setAvance(
      avance.filter((avance) => avance.id !== avanceSeleccionado.id)
    );
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setAvanceSeleccionado(null);
    setModalInsertar(true);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      const {
        id,
        fecha,
        descripcion,
        observaciones,
        proyecto,
        creadoPor,
      } = values;
      try {
        const { data } = await newAdvance({
          variables: {
            input: {
              id,
              fecha,
              descripcion,
              observaciones,
              proyecto,
              creadoPor,
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
        Proyectos Registrados
      </h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Inscribir Proyecto
      </button>
      <br />
      <br />
      <table className="tabla table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Observaciones</th>
            <th>Creado por</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getadvances.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.fecha}</td>
                <td>{elemento.descripcion}</td>
                <td>{elemento.observaciones}</td>
                <td>{elemento.proyecto}</td>
                <td>{elemento.creadopor}</td>
                <td>
                  <div>
                    <i
                      className="far fa-edit border-green-800"
                      onClick={() => seleccionarAvance(elemento, "Eliminar")}
                    ></i>
                  </div>
                  <div>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => seleccionarAvance(elemento, "Eliminar")}
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
            <h3>Editar Avance</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={avanceSeleccionado && avanceSeleccionado.id}
            />
            <br />

            <label>Fecha</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="fecha"
              value={avanceSeleccionado && avanceSeleccionado.fecha}
              onChange={handleChange}
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="number"
              name="descripcion"
              value={avanceSeleccionado && avanceSeleccionado.descripcion}
              onChange={handleChange}
            />
            <br />

            <label>Observaciones</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="nombrelider"
              value={avanceSeleccionado && avanceSeleccionado.nombreLider}
              onChange={handleChange}
            />
            <br />

            <label>Proyecto</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="estado"
              value={avanceSeleccionado && avanceSeleccionado.estado}
              onChange={handleChange}
            />
            <br />

            <label>Creado Por</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="fase"
              value={avanceSeleccionado && avanceSeleccionado.fase}
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

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el avance{" "}
          {avanceSeleccionado && avanceSeleccionado.id}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
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
            <h3>Inscribir Proyecto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Titulo</label>
              <input
                className="form-control"
                type="text"
                name="titulo"
                value={formik.values.titulo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Objetivo Especificos</label>
              <input
                className="form-control"
                type="text"
                name="objEspecifico"
                value={formik.values.objEspecifico}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Presupuesto</label>
              <input
                className="form-control"
                type="number"
                name="presupuesto"
                value={formik.values.presupuesto}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Nombre Lider</label>
              <input
                className="form-control"
                type="text"
                name="nombreLider"
                value={formik.values.nombreLider}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Identificacion del Lider</label>
              <input
                className="form-control"
                type="text"
                name="identificacionLider"
                value={formik.values.identificacionLider}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Estado</label>
              <input
                className="form-control"
                type="text"
                name="estado"
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Fase</label>
              <input
                className="form-control"
                type="text"
                name="fase"
                value={formik.values.fase}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />

              <label>Fecha Inicial</label>
              <input
                className="form-control"
                type="date"
                name="fechaInicial"
                value={formik.values.fechaInicial}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
            <div>
              <input
                type="submit"
                className="bg-blue-800 w-25 mt-4 p-2 mr-2 text-white hover:bg-gray-900 cursor-pointer rounded"
                value="Inscribir"
                onChange={formik.handleChange}
              />

              <input
                type="submit"
                className="bg-red-800 w-25 mt-4 p-2 text-white hover:bg-gray-900 cursor-pointer rounded"
                value="Cancelar"
                onClick={() => setModalInsertar(false)}
              />
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Advances;

function initialValues() {
  return {
    id: "",
    fecha: "",
    descripcion: "",
    observaciones: "",
    proyecto: "",
    creadoPor: "",
  };
}