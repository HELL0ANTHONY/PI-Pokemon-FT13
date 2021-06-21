import Card from "../components/card/Card";

export const printCards = (dataSets) => {
  return dataSets.map(({ id, ...data }) => <Card key={id} id={id} {...data} />);
};
