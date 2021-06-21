import { useState } from "react";
import { useModal } from "../../hooks/useModal";

import { useDispatch } from "react-redux";
import {
  setSortBy,
  changeOrder,
  filterByType,
} from "../../redux/actions/actions";

export const HomeLogic = () => {
  const [searchByName, setSearchByName] = useState("");
  const [isOpenSearchModal, openSearchModal, closeSearchModal] = useModal();
  const dispatch = useDispatch();

  return {
    modalSearchAttributes,
    handleOrder,
    handleSortOption,
    handleFilter,
  };

  function handleOrder(event) {
    event.preventDefault();
    dispatch(changeOrder(event.target.value));
  }

  function handleSortOption(event) {
    event.preventDefault();
    dispatch(setSortBy(event.target.value));
  }

  function handleFilter(event) {
    event.preventDefault();
    dispatch(filterByType(event.target.value));
  }

  function modalSearchAttributes() {
    return {
      name: "pokemonName",
      value: searchByName,
      isOpen: isOpenSearchModal,
      openModal: (event) => {
        event.preventDefault();
        openSearchModal();
      },
      closeModal: (event) => {
        event.preventDefault();
        closeSearchModal();
        setSearchByName("");
      },
      onChange: (event) => {
        event.preventDefault();
        setSearchByName(event.target.value);
      },
    };
  }
};
