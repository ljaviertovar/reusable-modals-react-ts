import * as S from "./styles"

interface Props {
	show: boolean
	setShow: (value: boolean) => void
}

const Buttons = ({ setShow, show }: Props) => {
	return (
		<S.ModalButtonsContainer>
			<S.ModalButton onClick={() => setShow(!show)}>Modal 1</S.ModalButton>
		</S.ModalButtonsContainer>
	)
}

export default Buttons
