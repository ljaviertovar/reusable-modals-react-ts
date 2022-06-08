import { FC, useState } from "react"
import { Buttons, Modal } from "./components/Modals"

import GlobalStyle from "./styles/gobal"
import { ModalButton } from "./components/Modals/styles"
import { ModalConfig, ModalPosition } from "./ts/interfaces/modal.interface"

const INITIAL_CONFIG: ModalConfig = {
	title: "Modal Header",
	showHeader: true,
	showOverlay: true,
	position: ModalPosition.center,
	padding: "20px",
}

const App: FC = () => {
	const [show, setShow] = useState<boolean>(false)

	return (
		<>
			<Buttons show={show} setShow={setShow} />
			<Modal show={show} setShow={setShow} config={INITIAL_CONFIG}>
				<h1>My Modal</h1>
				<p>Reusable Modal with options to customize.</p>
				<ModalButton>Acept</ModalButton>
			</Modal>
		</>
	)
}

export default App
