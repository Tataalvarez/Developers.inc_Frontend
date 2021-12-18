import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Tableleader from "./../../components/Advances/Table/Tableleader"
import Registeradvance from "./Registeradvance"



export default function Leader() {
    const [modalRegister, setModalRegister] = useState(false);

    const openModalRegister = () => {
        setModalRegister(true);
    };


    return (
        <div className="Avances">
            <h2 className="text-center text-3xl font-poppins text-blackTem">
                Avances
                
            </h2>
            <br />
            <button className="btn btn-success" onClick={() => openModalRegister()}>
                Nuevo Avance
            </button>

            <button>
                <Modal isOpen={modalRegister}>

                    <button type="button" class="btn-close ml-auto" aria-label="Close" onClick={() => {

                        window.location.href = "/avances";
                    }} ></button>

                    <ModalHeader>
                        <div>
                            <h3>Nuevo Avance</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <Registeradvance />
                    </ModalBody>
                </Modal>
            </button>

            <div>
            <Tableleader/>
            </div>

        </div>
    )

}
