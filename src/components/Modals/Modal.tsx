import { useCallback, useEffect, useRef } from "react"
import PortalModal from "./PortalModal"

import useOnClickOutside from "../../hooks/useOnClickOutside"

import { ModalConfig } from "../../ts/interfaces/modal.interface"

import * as S from "./styles"
import "../../styles/modal.css"

interface Props {
	show: boolean
	config: ModalConfig
	setShow: (value: boolean) => void
	children: JSX.Element | JSX.Element[]
}

const Modal = ({ children, show, setShow, config }: Props) => {
	const modalRef = useRef<HTMLDivElement>(null)

	// handle what happens on click outside of modal
	const handleClickOutside = () => setShow(false)

	// handle what happens on key press
	const handleKeyPress = useCallback((event: KeyboardEvent) => {
		if (event.key === "Escape") setShow(false)
	}, [])

	useOnClickOutside(modalRef, handleClickOutside)

	useEffect(() => {
		if (show) {
			// attach the event listener if the modal is shown
			document.addEventListener("keydown", handleKeyPress)
			// remove the event listener
			return () => {
				document.removeEventListener("keydown", handleKeyPress)
			}
		}
	}, [handleKeyPress, show])

	return (
		<>
			{show && (
				<PortalModal wrapperId='modal-portal'>
					<S.Overlay
						showOverlay={config.showOverlay}
						positionX={config.positionX}
						positionY={config.positionY}
						show={show}
						style={{
							animationDuration: "400ms",
							animationDelay: "0",
						}}
					>
						<S.ModalContainer padding={config.padding} ref={modalRef}>
							{config.showHeader && (
								<S.ModalHeader>
									<h3>{config.title}</h3>
								</S.ModalHeader>
							)}

							<S.Close onClick={() => setShow(!show)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-x'
									viewBox='0 0 16 16'
								>
									<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
								</svg>
							</S.Close>

							<S.Content>{children}</S.Content>
						</S.ModalContainer>
					</S.Overlay>
				</PortalModal>
			)}
		</>
	)
}

export default Modal
