import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMutation } from "@apollo/client";
import { NEW_PROJECT } from "../../graphql/project";


export default function NewProject() {
  // estado para generar un mensaje de advertencia
  const [message, setMessage] = useState(null);
  const [newProject] = useMutation(NEW_PROJECT);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      titulo: Yup.string().required("Error, el titulo es obligatorio"),
      nombreLider: Yup.string().required("Error, el nombre del lider es obligatorio"),
      identificacionLider: Yup.string().required(
        "Error, la identificación del lider es obligatoria"
      ),
      presupuesto: Yup.number()
        .required("Error, el presupuesto es requerido"),
    }),
    onSubmit: async (values) => {
      const { titulo, nombreLider, identificacionLider, presupuesto, estado } =
        values;
      try {
        const { data } = await newProject({
          variables: {
            input: {
              titulo,
              nombreLider,
              identificacionLider,
              presupuesto,
              estado,
            },
          },
        });
        console.log(data);
        // Usuario creado correctamente
        setMessage(
          `El proyecto: ${data.newProject.titulo} se creó correctamente`
        );
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } catch (error) {
        setMessage(error.message);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    },
  });

  const showMessage = () => {
    return (
      <div className="bg-red-100 border-red-500 border-l-4 text-red-700 text-xs py-2 px-3 w-full my-3">
        <p>{message}</p>
      </div>
    );
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {message && showMessage()}
        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="titulo"
          >
            Titulo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="titulo"
            placeholder="Titulo del proyecto"
            value={formik.values.titulo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.titulo && formik.errors.titulo ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.titulo}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="nombreLider"
          >
            Nombre del Lider
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="nombreLider"
            placeholder="Nombre del Lider"
            value={formik.values.nombreLider}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.nombreLider && formik.errors.nombreLider ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.nombreLider}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="identificacionLider"
          >
            Identificación del Lider
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="identificacionLider"
            placeholder="Identificacion del Lider"
            value={formik.values.identificacionLider}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.identificacionLider &&
        formik.errors.identificacionLider ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">
              {formik.errors.identificacionLider}
            </p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="presupuesto"
          >
            Presupuesto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="presupuesto"
            placeholder="Presupuesto"
            value={formik.values.presupuesto}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.presupuesto && formik.errors.presupuesto ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.presupuesto}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="estado"
          >
            Estado
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="estado"
            placeholder="Estado"
            value={formik.values.estado}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.estado && formik.errors.estado ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.estado}</p>
          </div>
        ) : null}

        <div className="pb-0">
          <input
            type="submit"
            className="bg-gray-800 w-full mt-4 p-2 text-white hover:bg-gray-900 cursor-pointer"
            value="Crear Proyecto"
            onChange={formik.handleChange}
          />
        </div>
      </form>

    </>
  );
}

function initialValues() {
  return {
    titulo: "",
    nombreLider: "",
    identificacionLider: "",
    presupuesto: "",
    estado: "",
  };
}
