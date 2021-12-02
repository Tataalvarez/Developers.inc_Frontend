import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { NEW_PROJECT } from "../../graphql/project";

function DataProyectos() {
  const [newProject] = useMutation(NEW_PROJECT);
  // const dataProyectos = [
  //   {
  //     titulo: "Persistencia Toxocara",
  //     objEspecifico: "Objetivo Especifico",
  //     presupuesto: "500000",
  //     nombreLider: "Pepe Ramirez",
  //     estado: "ACTIVO",
  //     fase: "ENDESARROLLO",
  //     fechaInicial: "02/15/2021",
  //   },
  // ];

  // const [proyecto, setProyecto] = useState(dataProyectos);
  // const [modalEditar, setModalEditar] = useState(false);
  // const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState({
    titulo: "",
    objEspecifico: "",
    presupuesto: "",
    nombreLider: "",
    identificacionLider: "",
    estado: "",
    fase: "",
    fechaInicial: "",
  });

  // const seleccionarProyecto = (elemento, caso) => {
  //   setProyectoSeleccionado(elemento);
  //   caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  // };

  // const handleChange = (e) => {
  //   const { _id, value } = e.target;
  //   setProyectoSeleccionado((prevState) => ({
  //     ...prevState,
  //     [_id]: value,
  //   }));
  // };

  // const editar = () => {
  //   var proyectoNuevo = proyecto;
  //   proyectoNuevo.map((proyecto) => {
  //     if (proyecto.titulo === proyectoSeleccionado.titulo) {
  //       proyecto.objEspecifico = proyectoSeleccionado.objEspecifico;
  //     }
  //   });
  //   setProyecto(proyectoNuevo);
  //   setModalEditar(false);
  // };

  // const eliminar = () => {
  //   setProyecto(
  //     proyecto.filter((proyecto) => proyecto.id !== proyectoSeleccionado.id)
  //   );
  //   setModalEliminar(false);
  // };

  const abrirModalInsertar = () => {
    setProyectoSeleccionado(null);
    setModalInsertar(true);
  };

  // const insertar = () => {
  //   var valorInsertar = proyectoSeleccionado;
  //   valorInsertar.id = proyecto.id;
  //   var proyectoNuevo = proyecto;
  //   proyectoNuevo.push(valorInsertar);
  //   setProyecto(proyectoNuevo);
  //   setModalInsertar(false);
  // };

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (values) => {
      const {
        titulo,
        objEspecifico,
        presupuesto,
        nombreLider,
        identificacionLider,
        estado,
        fase,
        fechaInicial,
      } = values;
      try {
        const { data } = await newProject({
          variables: {
            input: {
              titulo,
              objEspecifico,
              presupuesto,
              nombreLider,
              identificacionLider,
              estado,
              fase,
              fechaInicial,
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
    <div className="DataProyectos">
      <h2 className="text-3xl font-poppins text-blackTem">
        Proyectos Registrados
      </h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Inscribir Proyecto
      </button>
      <br />
      <br />
      {/* <table className="table table-bordered">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Objetivo Especifico</th>
            <th>Presupuesto</th>
            <th>Nombre Lider</th>
            <th>Estado</th>
            <th>Fase</th>
            <th>Fecha Inicial</th>
          </tr>
        </thead>
        <tbody>
          {proyecto.map((elemento) => (
            <tr>
              <td>{elemento.titulo}</td>
              <td>{elemento.objEspecifico}</td>
              <td>{elemento.presupuesto}</td>
              <td>{elemento.nombreLider}</td>
              <td>{elemento.estado}</td>
              <td>{elemento.fase}</td>
              <td>{elemento.fechaInicial}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => seleccionarProyecto(elemento, "Editar")}
                >
                  Ver
                </button>{" "}
                {"   "}
                <button
                  className="btn btn-danger"
                  onClick={() => seleccionarProyecto(elemento, "Eliminar")}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Proyecto</h3>
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
              type="date"
              name="fechaInicial"
              value={proyectoSeleccionado && proyectoSeleccionado.fechaInicial}
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
      </Modal> */}

      {/* <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el proyecto{" "}
          {proyectoSeleccionado && proyectoSeleccionado.titulo}
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
      </Modal> */}

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
}

export default DataProyectos;

function initialValues() {
  return {
    titulo: "",
    objEspecifico: "",
    presupuesto: "",
    nombreLider: "",
    identificacionLider: "",
    estado: "",
    fase: "",
    fechaInicial: "",
  };
}
