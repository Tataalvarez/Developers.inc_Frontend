// Modulos
import React, { useState } from "react";

// Componentes
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <>
      <div className="flex justify-center mt-52">
        <div className="w-full max-w-xs">
          <div className="bg-blue-200 rounded shadow-md px-6 pt-4 pb-4">
            <h2 className="text-center text-2xl text-black font-black mb-4">
              <span className="font-medium">Developers</span>.Inc
            </h2>
            {showLogin ? (
              <LoginForm />
            ) : (
              <RegisterForm setShowLogin={setShowLogin}/>
            )}
            <div className="mt-1">
              <p className="text-center text-xs">
                {showLogin ? (
                  <>
                    ¿No tienes cuenta?
                    <span
                      className="ml-1 cursor-pointer text-black hover:text-gray-800"
                      onClick={() => setShowLogin(!showLogin)}
                    >
                      Registrate
                    </span>
                  </>
                ) : (
                  <>
                    ¡Entra con tu cuenta!
                    <span
                      className="ml-1 cursor-pointer text-black hover:text-gray-800"
                      onClick={() => setShowLogin(!showLogin)}
                    >
                      Inicia Sesión
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
