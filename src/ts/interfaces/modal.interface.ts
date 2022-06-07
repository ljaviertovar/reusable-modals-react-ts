export interface ModalConfig {
	title: string
	showHeader: boolean
	showOverlay: boolean
	position: ModalPosition
	padding: string
}

export enum ModalPosition {
	center,
	end,
	start,
	right,
	left,
}
