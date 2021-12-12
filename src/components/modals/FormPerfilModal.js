import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormPerfilModal(props) {
  const { getUser } = props;
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(),
      newPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("repitNewPassword")]),
      repitNewPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("newPassword")]),
    }),
    onSubmit: async (values) => {
      console.log(values);
      console.log("Formulario enviado");
    },
  });

  const showMessage = () => {
    return (
      <div className="show-message">
        <p>{message}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="relative p-4 flex-auto bg-blue-200">
        <p className="my-1 text-blue-500 text-lg leading-relaxed">
          <form onSubmit={formik.handleSubmit}>
            <div className="pb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="password"
              >
                Contraseña actual
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="currentPassword"
                placeholder="Contraseña actual"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                error={formik.errors.currentPassword && true}
              />
            </div>
            <div className="pb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="password"
              >
                Nueva contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="newPassword"
                placeholder="Nueva contraseña"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={formik.errors.newPassword && true}
              />
            </div>
            <div className="pb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="password"
              >
                Repite tu contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="repitNewPassword"
                placeholder="Repite tu contraseña"
                value={formik.values.repitNewPassword}
                onChange={formik.handleChange}
                error={formik.errors.repitNewPassword && true}
              />
            </div>
          </form>
        </p>
      </div>
    </div>
  );
}

function initialValues() {
  return {
    currentPassword: "",
    newPassword: "",
    repitNewPassword: "",
  };
}
