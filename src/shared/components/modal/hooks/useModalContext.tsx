import { useContext } from "react";
import { ModalContext } from "../context/modal-context";

export const useModalContext = () => useContext(ModalContext);
