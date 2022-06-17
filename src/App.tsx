// @ts-ignore
import { FC, useState } from "react"
import Header from "./components/layout/Header"
import { Buttons, Modal } from "./components/modals"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme"

import * as S from "./components/modals/styles"
import { INITIAL_CONFIG } from "./config-dummy"

import imgModal from "./assets/images/imgModal.jpg"

const App: FC = () => {
	const [theme, setTheme] = useState("dark")
	const [show1, setShow1] = useState<boolean>(false)
	const [show2, setShow2] = useState<boolean>(false)
	const [show3, setShow3] = useState<boolean>(false)
	const [show4, setShow4] = useState<boolean>(false)

	const isDarkTheme = theme === "dark"

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				<Header isDarkTheme={isDarkTheme} setTheme={setTheme} />
				<main>
					<Buttons
						show1={show1}
						setShow1={setShow1}
						show2={show2}
						setShow2={setShow2}
						show3={show3}
						setShow3={setShow3}
						show4={show4}
						setShow4={setShow4}
					/>

					<Modal show={show1} setShow={setShow1} config={INITIAL_CONFIG.modal1}>
						<h1>My Modal 1</h1>
						<p>Reusable Modal with options to customize.</p>

						<S.ModalFooter>
							<S.ModalButtonSecondary onClick={() => setShow1(!show1)}>
								Cancel
							</S.ModalButtonSecondary>
							<S.ModalButtonPrimary>Acept</S.ModalButtonPrimary>
						</S.ModalFooter>
					</Modal>

					<Modal show={show2} setShow={setShow2} config={INITIAL_CONFIG.modal2}>
						<p>Reusable Modal with options to customize.</p>
						<input type='email' placeholder='Email' />
						<S.ModalFooter>
							<S.ModalButtonPrimary>Send</S.ModalButtonPrimary>
						</S.ModalFooter>
					</Modal>

					<Modal show={show3} setShow={setShow3} config={INITIAL_CONFIG.modal3}>
						<img src={imgModal} alt='My Modal' />
					</Modal>

					<Modal show={show4} setShow={setShow4} config={INITIAL_CONFIG.modal4}>
						<h1>My Modal 4</h1>
						<p>Reusable Modal with options to customize.</p>
					</Modal>
				</main>
			</>
		</ThemeProvider>
	)
}

export default App
