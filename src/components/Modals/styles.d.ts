import { ModalPositionX, ModalPositionY } from "../../ts/interfaces/modal.interface";
interface PropsOverlay {
    showOverlay: boolean;
    positionX: ModalPositionX;
    positionY: ModalPositionY;
    show: boolean;
}
interface PropsModalContainer {
    padding: string;
}
export declare const ModalButtonsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalButtonPrimary: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalButtonSecondary: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const Overlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, PropsOverlay, never>;
export declare const ModalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, PropsModalContainer, never>;
export declare const ModalHeader: import("styled-components").StyledComponent<"header", import("styled-components").DefaultTheme, {}, never>;
export declare const Close: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalFooter: import("styled-components").StyledComponent<"footer", import("styled-components").DefaultTheme, {}, never>;
export {};
//# sourceMappingURL=styles.d.ts.map