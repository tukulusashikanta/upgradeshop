import { createContext, useContext, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

const sortFilters = [
  { label: "Default", sort: 'default'},
  { label: "Price high to low", sort: 'price_high'},
  { label: "Price low to high", sort: 'price_low'},
  { label: "Newest", sort: 'new'},
];

function FilterComponent() {
  const [age, setAge] = useState('');
  const { setFilter } = useFilter();

  const handleChange = (event) => {
    setAge(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div>
      <div>Sort by:</div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select...</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Select..."
        >
          {sortFilters.map((item, index) => {
            return (<MenuItem key={index} value={item.sort}>{item.label}</MenuItem>);
          })
          }
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterComponent;