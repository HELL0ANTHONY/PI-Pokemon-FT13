import { useParams } from "react-router";

export const DetailsLogic = () => {
  const { id } = useParams();
  return { id };
};
