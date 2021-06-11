import { titleCase } from "../../helpers/titleCase";

const CardLogic = _ => {
  return {
    printStats(stats) {
      return stats
        .map(({ name }) => titleCase(name))
        .join(", ");
    },
    titleCase
  };
};

export default CardLogic;
