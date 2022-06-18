/// <reference types="react" />
import { ModalConfig } from "../../ts/interfaces/modal.interface";
import "../../styles/modal.css";
interface Props {
    show: boolean;
    config: ModalConfig;
    setShow: (value: boolean) => void;
    children: JSX.Element | JSX.Element[];
}
declare const Modal: ({ children, show, setShow, config }: Props) => JSX.Element;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map