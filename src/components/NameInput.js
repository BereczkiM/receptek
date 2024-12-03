import React from "react";
import TextField from "@mui/material/TextField";

/**
 * `NameInput` felelős a recept nevének beviteléért egy szövegmezőn keresztül.
 *
 * @param {Object} props - A komponens paraméterei.
 * @param {string} props.value - A bevitt szöveg jelenlegi értéke.
 * @param {function} props.onChange - A szöveg változásakor meghívandó függvény.
 * @returns {JSX.Element} A név bevitelére szolgáló szövegmező.
 */
function NameInput({ value, onChange }) {
  return (
    <TextField
      label="Recept neve" // A mező címkéje.
      variant="outlined" // Outlined stílusú TextField.
      value={value} // Az aktuális érték megjelenítése a mezőben.
      onChange={(e) => onChange(e.target.value)} // A mező értékének változásakor meghívandó függvény.
      required // A mező kitöltése kötelező.
    />
  );
}

export default NameInput;
