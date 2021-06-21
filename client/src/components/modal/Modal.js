import { handleCloseClick } from "./ModalLogic";
import Button from "../button/Button";
import "./modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleCloseClick}>
        <div className="modal-close">
          <Button
            buttonStyle="btn--danger--solid"
            buttonSize="btn--medium"
            onClick={closeModal}
          >
            close
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
