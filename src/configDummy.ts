import {
	ModalConfigDummy,
	ModalPositionX,
	ModalPositionY,
} from "./ts/interfaces/modal.interface"

export const INITIAL_CONFIG: ModalConfigDummy = {
	modal1: {
		title: "Modal Header",
		showHeader: true,
		showOverlay: true,
		positionX: ModalPositionX.center,
		positionY: ModalPositionY.center,
		padding: "20px",
	},
	modal2: {
		title: "Modal Header",
		showHeader: false,
		showOverlay: true,
		positionX: ModalPositionX.center,
		positionY: ModalPositionY.center,
		padding: "20px",
	},
	modal3: {
		title: "Modal Header",
		showHeader: false,
		showOverlay: true,
		positionX: ModalPositionX.left,
		positionY: ModalPositionY.start,
		padding: "0",
	},
	modal4: {
		title: "Modal Header",
		showHeader: false,
		showOverlay: true,
		positionX: ModalPositionX.right,
		positionY: ModalPositionY.end,
		padding: "0",
	},
}
