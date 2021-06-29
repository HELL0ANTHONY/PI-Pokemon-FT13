import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import {
  setSortBy,
  changeOrder,
  filterByType,
  filterForDB,
} from "../../redux/actions/actions";

export const HomeLogic = () => {
  const [searchByName, setSearchByName] = useState("");
  const [isOpenSearchModal, openSearchModal, closeSearchModal] = useModal();
  const dispatch = useDispatch();
  const { sortBy, order, pokemonFrom } = useSelector(state => state);

  return {
    handleFilter,
    selectAttributes,
    modalSearchAttributes,
  };

  function handleFilter(event) {
    event.preventDefault();
    dispatch(filterByType(event.target.value));
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
      },
    };
  }

  function selectAttributes() {
    return [
      {
        id: 1,
        title: "Sort:",
        initialValue: sortBy,
        values: ["default", "name", "force"],
        onChange(event) {
          event.preventDefault();
          dispatch(setSortBy(event.target.value));
        }
      },
      {
        id: 2,
        title: "Order:",
        initialValue: order,
        values: ["asc", "desc"],
        onChange(event) {
          event.preventDefault();
          dispatch(changeOrder(event.target.value));
        }
      },
      {
        id: 3,
        title: "From:",
        initialValue: pokemonFrom,
        values: ["all", "database", "api"],
        onChange(event) {
          event.preventDefault();
          dispatch(filterForDB(event.target.value));
        }
      },
    ];
  }
};
