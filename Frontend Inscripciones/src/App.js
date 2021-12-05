import React, { useState, Fragment } from 'react';
import AñadirInscripcionForm from '../src/form/AñadirInscripcionForm';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import EditarInscripcionForm from './form/EditarInscripcionForm';
import InscripcionTable from './tables/InscripcionTable';

const App = () => {
	// Data
	const InscriptionsData = [
		{ id: "1", estado: "Rechazado", ingreso: "25-11-2002", egreso: "25-11-2002", proyecto: "1234455", estudiante: "1313131" },
	]

	const initialFormState = { id: null, estado: '', ingreso: '', egreso:"", proyecto:"", estudiante: ""}

	// Setting state
	const [ inscriptions, setInscriptions ] = useState(InscriptionsData)
	const [ currentInscription, setCurrentInscription ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addInscription = inscription => {
		inscription.id = inscriptions.length + 1
		setInscriptions([ ...inscriptions, inscription ])
	}

	const deleteInscription = id => {
		setEditing(false)

		setInscriptions(inscriptions.filter(inscription => inscription.id !== id))
	}

	const updateInscription = (id, updatedInscription) => {
		setEditing(false)

		setInscriptions(inscriptions.map(inscription => (inscription.id === id ? updatedInscription : inscription)))
	}

	const editRow = inscription => {
		setEditing(true)

		setCurrentInscription({ id: inscription.id, estado: inscription.estado, ingreso: inscription.ingreso, egreso: inscription.egreso, proyecto: inscription.proyecto, estudiante: inscription.estudiante })
	}

	return (
		<div class="container">
				<div>
					{editing ? (
						<Fragment>
							
							<EditarInscripcionForm
								editing={editing}
								setEditing={setEditing}
								currentInscription={currentInscription}
								updateInscription={updateInscription}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AñadirInscripcionForm addInscription={addInscription} />
						</Fragment>
					)}
				</div>
				<div>
					<InscripcionTable inscriptions={inscriptions} editRow={editRow} deleteInscription={deleteInscription} />
				</div>
			</div>
	)
}

export default App;