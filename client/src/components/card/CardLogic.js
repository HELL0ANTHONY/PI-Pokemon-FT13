import { titleCase } from "../../helpers/titleCase";

const CardLogic = _ => {
  return {
    printStats(stats) {
      return stats
        .map(({ name }) => titleCase(name))
        .join(", ");
    }
  };
};

export default CardLogic;
