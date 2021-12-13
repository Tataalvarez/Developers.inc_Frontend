import React, { useState } from "react";
import FormPerfilModal from "./FormPerfilModal";

export default function PerfilUserModal(props) {
  const { getUser } = props;
  // console.log(getUser)
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn-modal"
        type="button"
        onClick={() => setShowModal(true)}
      >
        editar perfil
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold capitalize">editar perfil de {getUser.nombre}</h3>
                </div>
                {/*body*/}
                <FormPerfilModal getUser={getUser}/>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="btn-danger mr-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn-success"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
