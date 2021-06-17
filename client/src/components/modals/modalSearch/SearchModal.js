import Modal from "../../modal/Modal";
import "./searchModal.css";

const SearchModal = ({ isOpen, closeModal, name, value, onChange, onSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <nav className="search-modal">
        <form className="search-container" onSubmit={onSubmit}>
          <input
            className="input-search"
            type="text"
            placeholder="Search..."
            name={name}
            value={value}
            onChange={onChange}
          />
        </form>
      </nav>
    </Modal>
  );
};

export default SearchModal;
