export interface ModalConfigDummy {
    modal1: ModalConfig;
    modal2: ModalConfig;
    modal3: ModalConfig;
    modal4: ModalConfig;
}
export interface ModalConfig {
    title: string;
    showHeader: boolean;
    positionX: ModalPositionX;
    positionY: ModalPositionY;
    padding: string;
    showOverlay: boolean;
}
export declare enum ModalPositionX {
    center = "center",
    right = "right",
    left = "left"
}
export declare enum ModalPositionY {
    center = "center",
    start = "start",
    end = "end"
}
//# sourceMappingURL=modal.interface.d.ts.map