//import { useQuery } from "@apollo/client";
import React from 'react';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";
//import './InterfazInformacionVentas.css';



const GestionPerfil = () => {

    const [modalGestionPerfil, setmodalGestionPerfil] = React.useState(false);

    const handleChange = (e) => {
        // setProducto((prevState) => ({
        //     ...prevState,
        //     form: {
        //         ...prevState.form,
        //         [e.target.name]: e.target.value,
        //     }
        // }));
    };

    const mostrarModalGestionPerfil = () => {
        setmodalGestionPerfil(true);
    };

    const cerrarModalGestionPerfil = () => {
        setmodalGestionPerfil(false);
    };

    const ActualizarDatos = () => {
        // let CrearProducto = { ...producto.form };
        // CrearProducto.id = producto.data.length + 1;
        // let Diccionario_Productos = producto.data;
        // Diccionario_Productos.push(CrearProducto);
        // setProducto({
        //     ...producto,
        //     data: Diccionario_Productos
        // });
        setmodalGestionPerfil(false);
    }

    return (
        <>
            <Container>
                <br />
                <Button color="primary" onClick={mostrarModalGestionPerfil}>Gestionar Perfil</Button>
                <br />                
            </Container>
          
            <Modal isOpen={modalGestionPerfil}>
                <ModalHeader>
                    <div><h3>Gestión de perfil</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Nombre:
                        </label>

                        <input
                             className="form-control"
                             name="Nombre"
                             type="text"
                             onChange={handleChange}
                             required
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>
                            Apellido:
                        </label>
                        <input
                            className="form-control"
                            name="Apellido"
                            type="text"
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                        Identificación:
                        </label>
                        <input
                            className="form-control"
                            name="Identificación"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Email:
                        </label>
                        <input
                            className="form-control"
                            name="Email"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Rol:
                        </label>
                        <input
                            className="form-control"
                            name="Rol"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Constraseña:
                        </label>
                        <input
                            className="form-control"
                            name="Constraseña"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={ActualizarDatos}
                    >
                        Actualizar datos
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={cerrarModalGestionPerfil}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default GestionPerfil;
