import { useState } from "react";
import { useModal } from "../../hooks/useModal";

const HomeLogic = () => {
  const [searchByName, setSearchByName] = useState("");
  const [isOpenSearchModal, openSearchModal, closeSearchModal] = useModal();

  return {
    modalSearchAttributes
  }

  function modalSearchAttributes() {
    return {
      name: "pokemonName",
      value: searchByName,
      isOpen: isOpenSearchModal,
      openModal: event => {
        event.preventDefault();
        openSearchModal();
      },
      closeModal: event => {
        event.preventDefault();
        closeSearchModal();
        setSearchByName("");
      },
      onChange: event => {
        event.preventDefault();
        setSearchByName(event.target.value);
      }
    };
  }
};

export default HomeLogic;

