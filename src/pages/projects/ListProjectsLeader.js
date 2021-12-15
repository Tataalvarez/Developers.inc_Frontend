import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/tablaProyectos.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { NEW_PROJECT } from "../../graphql/project";
import { GET_PROJECTS } from "../../graphql/project";
import { DELETE_PROJECT } from "../../graphql/project";

const DataProyectos = () => {
  const { data, error } = useQuery(GET_PROJECTS);

  

  const [newProject] = useMutation(NEW_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);
  const dataProyectos = useState([]);

  const [proyecto, setProyecto] = useState(dataProyectos);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [newdata, setNewData] = useState();
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
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { _id, value } = e.target;
    setProyectoSeleccionado((prevState) => ({
      ...prevState,
      [_id]: value,
    }));
  };

  const editar = () => {
    var proyectoNuevo = proyecto;
    proyectoNuevo.map((proyecto) => {
      if (proyecto.id === proyectoSeleccionado.id) {
      }
    });
    setProyecto(proyectoNuevo);
    setModalEditar(false);
  };

  const eliminar = () => {
    deleteProject(
      //   proyecto.filter((proyecto) => proyecto.id !== proyectoSeleccionado.id)
      deleteProject((id) => proyecto.id !== proyectoSeleccionado.id)
    );
    setModalEliminar(true);
  };

  const abrirModalInsertar = () => {
    setProyectoSeleccionado(null);
    setModalInsertar(true);
  };

  

  //  const insertar = () => {
  //    var valorInsertar = proyectoSeleccionado;
  //    valorInsertar.id = proyecto.id;
  //   var proyectoNuevo = proyecto;
  //  proyectoNuevo.push(valorInsertar);
  // setProyecto(proyectoNuevo);
  //  setModalInsertar(false);
  //  };

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      const {
        titulo,
        objEspecifico,
        presupuesto,
        nombreLider,
        identificacionLider,
        estado,
        fase,
        fechaInicial,
        fechaFinal,
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
              fechaFinal,
            },
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  useEffect(() => {
    console.log("data servidor", data);
    // setNewData(data.getProjects);
    setNewData(data);
    console.log(newdata);
    if (error) {
      toast.error("Error consultando los proyectos");
    }
  }, [data, error]);

  useEffect(() => {
    // console.log("data servidor", data);
    // if (error) {
    //   toast.error("Error consultando los proyectos");
    // }
  }, []);

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
                      className="far fa-edit border-green-800"
                      onClick={() => seleccionarProyecto(elemento, "Editar")}
                    ></i>
                  </div>
                  <div>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => seleccionarProyecto(elemento, "Eliminar")}
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
              type="text"
              name="estado"
              value={proyectoSeleccionado && proyectoSeleccionado.estado}
              onChange={handleChange}
            />
            <br />

            <label>Fase</label>
            <input
              className="form-control"
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
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el proyecto{" "}
          {proyectoSeleccionado && proyectoSeleccionado.titulo}
        </ModalBody>
        <ModalFooter>
          <button
            onClick={() => {
              eliminar({
                variables: { data: proyecto.id },
              });
              window.location.href = "/projects";
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
              <select
                name="estado"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Estado del proyecto" />
                <option value="ACTIVO" label="Activo" />
                <option value="INACTIVO" label="Inactivo" />
              </select>
              <br />

              <label>Fase</label>
              <select
                name="fase"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formik.values.fase}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Fase del proyecto" />
                <option value="NULL" label="Null" />
                <option value="INICIADO" label="Iniciado" />
                <option value="ENDESARROLLO" label="En desarrollo" />
                <option value="TERMINADO" label="Inactivo" />
              </select>
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

              <label>Fecha Final</label>
              <input
                className="form-control"
                type="date"
                name="fechaFinal"
                value={formik.values.fechaFinal}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
            </div>
            <ModalFooter>
              <button
                onClick={() => {
                  setModalInsertar({
                    variables: { proyecto: proyecto.id },
                  });
                  window.location.href = "/projects";
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
    fechaFinal: "",
  };
}
