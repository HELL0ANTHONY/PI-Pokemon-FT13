import Modal from "../../modal/Modal";
import Checkbox from "../../checkbox/Checkbox"; 
import "./checkboxModal.css";

const CheckboxModal = ({ list, isOpen, closeModal, title, onChange, name: func }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <h1 className="modal-title">{title}</h1>
      {
        list 
        ? list.data.map(({ id, name }) =>
          <Checkbox
            key={id}
            name={func}
            onChange={onChange}
            value={name}
            label={name}
          />)
        : <h1>Loading...</h1>
      }
    </Modal>
  );
};

export default CheckboxModal;
