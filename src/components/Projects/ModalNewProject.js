import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader,  } from "reactstrap";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { NEW_PROJECT } from "../../graphql/project";

export default function ModalNewProject () {
const [newProject] = useMutation(NEW_PROJECT);

    const [modalInsertar, setModalInsertar] = useState(true);

      const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: async (values, {resetForm}) => {
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

      <div className="ModalNewProject">     
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
}
}
};     