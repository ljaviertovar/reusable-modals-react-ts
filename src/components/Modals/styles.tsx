import styled, { keyframes } from "styled-components"
import {
	ModalPositionX,
	ModalPositionY,
} from "../../ts/interfaces/modal.interface"

interface PropsOverlay {
	showOverlay: boolean
	positionX: ModalPositionX
	positionY: ModalPositionY
	show: boolean
}
interface PropsModalContainer {
	padding: string
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ModalButtonsContainer = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`
export const ModalButtonPrimary = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 3px;
	color: ${({ theme }) => theme.colors.btnText};
	border: 1px solid ${({ theme }) => theme.colors.main};
	background-color: ${({ theme }) => theme.colors.main};
	font-family: "Robot", sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadowMain};
	}
`
export const ModalButtonSecondary = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 3px;
	color: ${({ theme }) => theme.colors.main};
	border: 1px solid ${({ theme }) => theme.colors.main};
	background-color: transparent;
	font-family: "Robot", sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadowMain};
		color: ${({ theme }) => theme.colors.btnText};
	}
`

export const Overlay = styled.div<PropsOverlay>`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${props =>
		props.showOverlay ? "rgba(23, 23, 23, 0.8)" : "rgba(0, 0, 0, 0)"};
	display: flex;
	align-items: center;
	justify-content: ${props => (props.positionX ? props.positionX : "center")};
	align-items: ${props => (props.positionY ? props.positionY : "center")};
	padding: 40px;

	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${fadeIn};
		animation-fill-mode: backwards;
	}
`
export const ModalContainer = styled.div<PropsModalContainer>`
	width: 500px;
	min-height: 50px;
	background-color: ${({ theme }) => theme.body};
	position: relative;
	border-radius: 5px;
	padding: ${props => (props.padding ? props.padding : "20px")};
`
export const ModalHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.text};

	h3 {
		font-weight: 500;
		font-size: 16px;
		color: ${({ theme }) => theme.colors.main};
		margin: 0;
	}
`

export const Close = styled.button`
	position: absolute;
	top: 15px;
	right: 20px;
	width: 40px;
	height: 40px;
	border: none;
	background-color: transparent;
	transition: 0.3s ease all;
	border-radius: 3px;
	color: ${({ theme }) => theme.colors.main};

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}

	svg {
		width: 100%;
		height: 100%;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.text};

	h1 {
		font-size: 42px;
		font-weight: 700px;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`
export const ModalFooter = styled.footer`
	width: 100%;
	display: flex;
	gap: 2rem;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	padding-top: 20px;
	border-top: 1px solid ${({ theme }) => theme.text};
`
