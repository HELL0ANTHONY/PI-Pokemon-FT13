import Card from "../../components/card/Card";

const HomeLogic = () => {
  const printCards = data => {
    return data.map(({ id, name, image, types }) => 
      <Card 
        key={id}
        id={id}
        name={name}
        image={image}
        stats={types}
      />
    );
  };
  return {
    printCards
  }
};

export default HomeLogic;
