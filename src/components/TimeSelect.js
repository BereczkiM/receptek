import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

/**
 * A `TimeSelect` komponens lehetővé teszi a felhasználók számára,
 * hogy egy legördülő menüből kiválasszanak egy elkészítési időt (percben).
 *
 * @param {number} value - Az aktuálisan kiválasztott érték.
 * @param {function} onChange - Eseménykezelő, amely az új értéket adja vissza, amikor a felhasználó kiválaszt egy opciót.
 * @returns {JSX.Element} - Egy Material-UI `Select` komponens az időintervallumokkal.
 */
function TimeSelect({ value, onChange }) {
  return (
    <FormControl fullWidth>
      {/* Az űrlapelem címkéje */}
      <InputLabel>Elkészítési idő (perc)</InputLabel>
      
      {/* Legördülő menü az idő kiválasztásához */}
      <Select
        value={value} // Az aktuális kiválasztott érték
        onChange={(e) => onChange(e.target.value)} // Az eseménykezelő meghívása új értékkel
        label="Elkészítési idő (perc)" // Címke az érthetőség érdekében
      >
        {/* Az opciók dinamikus létrehozása percenkénti lépésekben */}
        {[15, 30, 45, 60, 75, 90, 105, 120].map((t) => (
          <MenuItem value={t} key={t}>{`${t} perc`}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TimeSelect;
