import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const Filters = () => {
  const { age, gender } = useSelector((state) => state.data);
  const [filter, setFilter] = useState({ age: age, gender: gender });
  const handleAgeChange = (event) => {
    const selectedAge = event.target.value;
    setFilter({ ...filter, age: selectedAge });
  };

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setFilter({ ...filter, gender: selectedGender });
  };

  return (
    <div className="flex gap-4 items-center justify-center px-4 pt-4 md:pt-2">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter.age}
          label="Age"
          onChange={handleAgeChange}
          className="w-28"
        >
          <MenuItem value="15-25">15-25</MenuItem>
          <MenuItem value=">25">{">25"}</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter.gender}
          label="Gender"
          onChange={handleGenderChange}
          className="w-28"
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
