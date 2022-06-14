import * as S from "./styles"

interface Props {
	show1: boolean
	setShow1: (value: boolean) => void
	show2: boolean
	setShow2: (value: boolean) => void
	show3: boolean
	setShow3: (value: boolean) => void
	show4: boolean
	setShow4: (value: boolean) => void
}

const Buttons = ({
	setShow1,
	show1,
	setShow2,
	show2,
	setShow3,
	show3,
	setShow4,
	show4,
}: Props) => {
	return (
		<S.ModalButtonsContainer>
			<S.ModalButtonPrimary onClick={() => setShow1(!show1)}>
				Modal 1
			</S.ModalButtonPrimary>
			<S.ModalButtonPrimary onClick={() => setShow2(!show2)}>
				Modal 2
			</S.ModalButtonPrimary>
			<S.ModalButtonPrimary onClick={() => setShow3(!show3)}>
				Modal 3
			</S.ModalButtonPrimary>
			<S.ModalButtonPrimary onClick={() => setShow4(!show4)}>
				Modal 4
			</S.ModalButtonPrimary>
		</S.ModalButtonsContainer>
	)
}

export default Buttons
