import { FC, useState } from "react"
import { Buttons, Modal } from "./components/Modals"

import GlobalStyle from "./styles/gobal"
import { ModalButton } from "./components/Modals/styles"

const App: FC = () => {
	const [show, setShow] = useState<boolean>(true)

	return (
		<>
			<Buttons />
			<Modal show={show} setShow={setShow}>
				<h1>Modal window</h1>
				<p>Reusable Modal with options to customize.</p>
				<ModalButton>Acept</ModalButton>
			</Modal>
		</>
	)
}

export default App
