import Card from "../components/card/Card";

export const printCards = data => {
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
