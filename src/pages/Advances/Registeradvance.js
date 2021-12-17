import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { NEW_ADVANCE } from "../../graphql/advances";


export default function Registeradvance(props) {
    const { setShowRegister } = props;
    const [message, setMessage] = useState(null);
    const [newAdvance] = useMutation(NEW_ADVANCE);
  
    const formik = useFormik({
      initialValues: initialValues(),
      mapPropsToValues: () => ({ rol: '' }),
      validationSchema: Yup.object({
          proyecto: Yup.string().required("Error, el proyecto es obligatorio"),
          fecha: Yup.string().required("Error, la fecha es obligatoria"),
          descripcion: Yup.string().required("Error, la descripción es obligatoria"),
      }),
      onSubmit: async (values, { setSubmitting }) => {
        const { proyecto, fecha, descripcion } = values;
        try {
          const { data } = await newAdvance({
            variables: {
              input: {
                proyecto,
                fecha,
                descripcion,
                
              },
            },
          });
          console.log(data);
          
          setMessage(`El avance del proyecto ${data.newAdvance.proyecto} se creó correctamente`);
          setTimeout(() => {
            setMessage(null);
            setSubmitting(false);
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
              htmlFor="proyecto"
            >
              Proyecto
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="proyecto"
              placeholder="proyecto"
              value={formik.values.proyecto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
  
          {formik.touched.proyecto && formik.errors.proyecto ? (
            <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="text-bold text-xs">{formik.errors.proyecto}</p>
            </div>
          ) : null}
  
          <div className="pb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="fecha"
            >
              Fecha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="fecha"
              placeholder="Fecha"
              value={formik.values.fecha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
  
          {formik.touched.fecha && formik.errors.fecha ? (
            <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="text-bold text-xs">{formik.errors.fecha}</p>
            </div>
          ) : null}
  
          <div className="pb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="descripcion"
            >
              Descripción
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="descripcion"
              placeholder="Descripcion"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
  
          {formik.touched.descripcion && formik.errors.descripcion ? (
            <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="text-bold text-xs">{formik.errors.descripcion}</p>
            </div>
          ) : null}
  
  
          
          <div className="pb-0">
            <input
              type="submit"
              className="bg-gray-800 w-full mt-4 p-2 text-white hover:bg-gray-900 cursor-pointer"
              value="Aceptar"
              onChange={formik.handleChange}
            />
          </div>
        </form>
      </>
    );
  }
  
  function initialValues() {
    return {
        proyecto: "",
        fecha: "",
        descripcion: "",
     
    };
  }