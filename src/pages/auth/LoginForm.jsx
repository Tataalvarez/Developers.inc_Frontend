import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/user";
import { setToken } from "../../utils/token";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [message, setMessage] = useState(null);
  const [authUser] = useMutation(LOGIN);

  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("Error, el email es requerido"),
      password: Yup.string()
        .required("Error, la contraseña es obligatoria")
        .min(6, "La contraseña debe tener almenos 6 caracteres"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const { data } = await authUser({
          variables: {
            input: {
              email,
              password,
            },
          },
        });
        const { token } = data.authUser;
        setToken(token);
        setUser(token);
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
    <form onSubmit={formik.handleSubmit}>     
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

      <div className="pb-0">
        <label
          className="block text-gray-700 text-sm font-bold mb-1"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          placeholder="Tu Password"
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

      <div>
        <input
          type="submit"
          className="bg-gray-800 w-full mt-4 p-2 text-white hover:bg-gray-900 cursor-pointer"
          value="Iniciar Sesión"
          onChange={formik.handleChange}
        />
      </div>
      {message && showMessage()}
    </form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}