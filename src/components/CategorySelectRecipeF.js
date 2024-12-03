import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

/**
 * `CategorySelect` egy kategória kiválasztására szolgáló komponens.
 * 
 * @param {Object} props - A komponens propjai.
 * @param {string} props.value - A jelenleg kiválasztott kategória értéke.
 * @param {function} props.onChange - Callback függvény, amely értesíti a szülő komponenst a kiválasztott kategória változásáról.
 * @returns {JSX.Element} A megjelenített `CategorySelect` komponens.
 */
function CategorySelect({ value, onChange }) {
  return (
    <FormControl fullWidth>
      {/* A kategória mező címkéje */}
      <InputLabel>Kategória</InputLabel>
      <Select
        value={value} // A jelenleg kiválasztott kategória értéke.
        onChange={(e) => onChange(e.target.value)} // Értesíti a szülő komponenst a kategóriaváltásról.
        label="Kategória" // A mező címkéje.
      >
        {/* Kategória opciók */}
        <MenuItem value="Desszert">Desszert</MenuItem>
        <MenuItem value="Főétel">Főétel</MenuItem>
        <MenuItem value="Leves">Leves</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CategorySelect;
