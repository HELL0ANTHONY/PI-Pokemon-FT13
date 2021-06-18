import { titleCase } from "../helpers/titleCase"; 

const Select = ({initialValue, onChange, values}) => {
  return (
    <select value={initialValue} onChange={onChange}>
      {
        values.map((value, index) => 
          <option 
            key={index}
            value={value}
          >
            {titleCase(value)}
          </option>
        )
      }
    </select>
  );
};

export default Select;
