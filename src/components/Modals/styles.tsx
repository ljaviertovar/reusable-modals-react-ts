import styled, { keyframes } from "styled-components"
import { ModalPosition } from "../../ts/interfaces/modal.interface"

interface PropsOverlay {
	showOverlay: boolean
	position: ModalPosition
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
export const ModalButton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background-color: #1766dc;
	cursor: pointer;
	font-family: "Robot", sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;

	&:hover {
		background-color: #0066ff;
	}
`
export const Overlay = styled.div<PropsOverlay>`
	/* opacity: ${props => (props.show ? 1 : 0)};
	transition: opacity 600ms ease; */
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${props =>
		props.showOverlay ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
	display: flex;
	align-items: center;
	justify-content: ${props => (props.position ? props.position : "center")};
	padding: 40px;

	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${fadeIn};
		animation-fill-mode: backwards;
	}
`
export const ModalContainer = styled.div<PropsModalContainer>`
	width: 500px;
	min-height: 100px;
	background-color: #fff;
	position: relative;
	border-radius: 5px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: ${props => (props.padding ? props.padding : "20px")};
`
export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #e8e8e8;

	h3 {
		font-weight: 500;
		font-size: 16px;
		color: #1766dc;
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
	cursor: pointer;
	transition: 0.3s ease all;
	border-radius: 5px;
	color: #1766dc;

	&:hover {
		background-color: #f2f2f2;
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
