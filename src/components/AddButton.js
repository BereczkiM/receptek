import React from "react";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

/**
 * `AddButton` egy funkcionális React komponens, amely egy "Hozzáadás" gombot jelenít meg.
 * 
 * @param {Object} props - A komponens propjai.
 * @param {function} props.onAddClick - Callback függvény, amely akkor hívódik meg, amikor a gombra kattintanak.
 * @returns {JSX.Element} A megjelenített `AddButton` komponens.
 */
function AddButton({ onAddClick }) {
  return (
    <Button
      variant="contained" // Teljesen kitöltött stílusú Material UI gomb.
      onClick={onAddClick} // Gombra kattintáskor meghívja az `onAddClick` függvényt.
      startIcon={<Add />} // A gomb bal oldalán megjelenő "+" ikon.
      sx={{
        backgroundColor: "white", // A gomb alapértelmezett háttérszíne.
        color: "#d32f2f", // A gomb szövegének színe.
      }}
    >
      Hozzáadás
    </Button>
  );
}

export default AddButton;
