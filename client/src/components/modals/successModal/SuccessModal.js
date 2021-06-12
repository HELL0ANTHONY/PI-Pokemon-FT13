import Modal from "../../modal/Modal";
import Card from "../../card/Card";
import "./modalSuccess.css";

const ModalSuccess = ({ isOpen, closeModal, newDog }) => {
  return (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    >
    <div className="success">
    {/*Change it for the printCards function*/}
    { 
      newDog
      ? <Card
        id={}
        dogName={}
        image={}
        types={}
      />
      : <h1>Loading...</H1>
    }
    </div>
    </Modal>
  );
};

export default ModalSuccess;
