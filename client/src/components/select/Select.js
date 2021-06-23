import { titleCase } from "../../helpers/titleCase";
import { SelectStyles } from "./Select.styles.js";

const Select = ({ initialValue, onChange, values }) => {
  return (
    <SelectStyles value={initialValue} onChange={onChange}>
      {values.map((value, index) => (
        <option key={index} value={value}>
          {titleCase(value)}
        </option>
      ))}
    </SelectStyles>
  );
};

export default Select;
