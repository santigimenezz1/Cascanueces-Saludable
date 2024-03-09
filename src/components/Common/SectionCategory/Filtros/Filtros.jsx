import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Filtros({ mayorMenor, menorMayor, newData }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Precio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem onClick={() => mayorMenor(newData)} value={10}>
            Menor a mayor
          </MenuItem>
          <MenuItem onClick={() => menorMayor(newData)} value={20}>
            Mayor a menor
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
