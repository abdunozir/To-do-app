import "./InputField.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function InputField({ showArr, setShowArr, arr, setArr }) {
  let [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const add = () => {
    if (inputValue !== "")
      setArr([
        ...arr,
        {
          text: inputValue,
          id: Math.random() * 10000,
          isTrue: false,
        },
      ]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setShowArr(
      arr.filter((el) => {
        if (e.target.value === "Complated") {
          return el.isTrue === true;
        } else if (e.target.value === "Uncomplated") {
          return el.isTrue !== true;
        } else {
          return el;
        }
      })
    );
  };
  return (
    <div className="inputs-container">
      <TextField
        id="standard-basic"
        onChange={inputHandler}
        label="Enter To-do"
        variant="standard"
        value={inputValue}
      />
      <Button onClick={add} variant="contained" size="large">
        Add
      </Button>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">All</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="All">
            <em>Select one of them</em>
          </MenuItem>
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Complated"}>Complated</MenuItem>
          <MenuItem value={"Uncomplated"}>Uncomplated</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default InputField;
