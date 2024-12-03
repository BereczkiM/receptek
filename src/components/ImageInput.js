import React from "react";
import TextField from "@mui/material/TextField";

/**
 * `ImageInput` egy bemeneti mező, amely lehetővé teszi a felhasználó számára, hogy egy kép URL-jét adja meg.
 * 
 * @param {Object} props - A komponens propjai.
 * @param {string} props.value - Az aktuális érték, amelyet a mező megjelenít.
 * @param {function} props.onChange - Callback függvény, amely frissíti a szülő komponens állapotát az új értékkel.
 * @returns {JSX.Element} A megjelenített `ImageInput` komponens.
 */
function ImageInput({ value, onChange }) {
  return (
    <TextField
      label="Kép URL" // A bemeneti mező címkéje.
      variant="outlined" // Az anyagtervezési (Material Design) stílus beállítása.
      value={value} // A mező aktuális értéke.
      onChange={(e) => onChange(e.target.value)} // Eseménykezelő, amely frissíti a szülő komponens állapotát.
      placeholder="https://example.com/image.jpg" // Helykitöltő szöveg, amely példaértéket mutat.
    />
  );
}

export default ImageInput;
