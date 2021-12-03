import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { NEW_USER } from "../../graphql/user";

export default function Registro(props) {
  const { setShowLogin } = props;
  // estado para generar un mensaje de advertencia
  const [message, setMessage] = useState(null);
  const [newUser] = useMutation(NEW_USER);

  const formik = useFormik({
    initialValues: initialValues(),
    mapPropsToValues: () => ({ rol: '' }),
    validationSchema: Yup.object({
      nombre: Yup.string().required("Error, el nombre es obligatorio"),
      apellido: Yup.string().required("Error, el apellido es obligatorio"),
      identificacion: Yup.string().required(
        "Error, la identificación es obligatoria"
      ),
      email: Yup.string()
        .email("El email no es válido")
        .required("Error, el email es requerido"),
      password: Yup.string()
        .required("Error, la contraseña es obligatoria")
        .min(6, "La contraseña debe tener mas de 6 caracteres"),
      rol: Yup.string()
        .required('El rol es obligatorio'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const { nombre, apellido, identificacion, email, password, rol } = values;
      try {
        const { data } = await newUser({
          variables: {
            input: {
              nombre,
              apellido,
              identificacion,
              email,
              password,
              rol,
            },
          },
        });
        console.log(data);
        // Usuario creado correctamente
        setMessage(`El usuario: ${data.newUser.nombre} se creó correctamente`);
        setTimeout(() => {
          setMessage(null);
          setShowLogin(true);
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
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="nombre"
            placeholder="Nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.nombre && formik.errors.nombre ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.nombre}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="apellido"
          >
            Apellido
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="apellido"
            placeholder="Apellido"
            value={formik.values.apellido}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.apellido && formik.errors.apellido ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.apellido}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="identificacion"
          >
            Identificación
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="identificacion"
            placeholder="Identificacion"
            value={formik.values.identificacion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.identificacion && formik.errors.identificacion ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.identificacion}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Tu Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.email && formik.errors.email ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.email}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.password}</p>
          </div>
        ) : null}

        <div className="pb-3">
          <label
            htmlFor="rol"
            className="block text-gray-700 text-sm font-bold mb-1"
          >
            Tipo de Usuario
          </label>
          <select
            name="rol"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formik.values.rol}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" label="Selecciona tu rol" />
            <option value="ESTUDIANTE" label="Estudiante" />
            <option value="LIDER" label="Lider" />
            <option value="ADMINISTRADOR" label="Administrador" />
          </select>
        </div>

        {formik.touched.rol && formik.errors.rol ? (
          <div className="mt-1 mb-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="text-bold text-xs">{formik.errors.rol}</p>
          </div>
        ) : null}

        <div className="pb-0">
          <input
            type="submit"
            className="bg-gray-800 w-full mt-4 p-2 text-white hover:bg-gray-900 cursor-pointer"
            value="Regístrame"
            onChange={formik.handleChange}
          />
        </div>
      </form>
    </>
  );
}

function initialValues() {
  return {
    nombre: "",
    apellido: "",
    email: "",
    identificacion: "",
    password: "",
    rol: "",
  };
}
