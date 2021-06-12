import Modal from "../../modal/Modal";
import Button from "../../button/Button";

const AddTypesModal = ({ 
  isOpen,
  closeModal,
  title,
  newInputs,
  setValue,
  removeInput,
  addNewInput 
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <h1 className="modal-title">{title}</h1>
      <div>
        {
          newInputs.map((newInput, index) => 
            <div key={index}>
              <input
                type="text"
                value={newInput}
                onChange={event => setValue(event, index)}
              />
              <Button
                buttonSize="btn--medium"
                buttonStyle="btn--danger--solid"
                onClick={e => removeInput(e, index)}
              >Remove</Button>
            </div>)
          }
        <hr />
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--success--solid"
          onClick={e => addNewInput(e)}
        >Add a new one</Button>
      </div>
    </Modal>
  );
};

export default AddTypesModal;
