import { fetchDogs, fetchDogsByName } from "../../redux/allDogs/action";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import Card from "../../components/card/Card";
import Loading from "../../components/loader/Loading";

export const HomeLogic = () => {
  const [isOpenSearchModal, openSearchModal, closeSearchModal] = useModal(false);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const [wantedDog, setWantedDog] = useState("");
  const [isOpenModalFilter, openModalFilter, closeModalFilter] = useModal(false);
  const [filterBy, setFilterBy] = useState("");
  const [inputFilter, setInputFilter] = useState({
    filterByName       : "",
    filterByTemperament: ""
  });

  function handleSelect(event) {
    event.preventDefault();
    setFilterBy(event.target.value);
  }

  function handleFilter(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setInputFilter({
      ...inputFilter,
      [name]: value
    });
  }

  const handleOpenSearchModal = event => {
    event.preventDefault();
    openSearchModal();
  };

  const handleCloseSearchModal = event => {
    event.preventDefault();
    closeSearchModal();
  };

  const handleSearch = event => {
    event.preventDefault();
    setWantedDog(event.target.value);
  };

  return {
    paginate,
    currentPage,
    wantedDog,
    handleSearch,
    isOpenSearchModal,
    handleOpenSearchModal,
    handleCloseSearchModal,
    closeSearchModal,
    isOpenModalFilter,
    openModalFilter,
    closeModalFilter,
    filterBy,
    handleFilter,
    handleSelect,
    inputFilter
  };
};

export const printDogs = dogs => {
  return (dogs)
    ? dogs.map(({ id, name, image, temperaments }) =>
      <Card
        key={1}
        id={34}
        dogName={"Leandro"}
        image={"some image"}
        temperaments={["hello", "world", "wonderful day", "to eat a cookie"]}
      />)
    : <Loading />
};

export const mapStateToProps = state => ({
  dogsState: state.dogs
});

export const mapDispatchToProps = dispatch => ({
  fetchDogs      : page => dispatch(fetchDogs(page)),
  fetchDogsByName: dogName => dispatch(fetchDogsByName(dogName))
});
