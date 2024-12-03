import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";

/**
 * `CategorySelect` egy kategória kiválasztására szolgáló komponens.
 * 
 * @param {Object} props - A komponens propjai.
 * @param {function} props.onCategoryChange - Callback függvény, amely értesíti a szülő komponenst a kiválasztott kategória változásáról.
 * @returns {JSX.Element} A megjelenített `CategorySelect` komponens.
 */
function CategorySelect({ onCategoryChange }) {
  // Állapot a kiválasztott kategória tárolására.
  const [selectedCategory, setSelectedCategory] = useState("Minden");

  /**
   * Kezeli a kategóriaváltást.
   * 
   * @param {string} value - Az új kategória értéke.
   */
  const handleCategoryChange = (value) => {
    setSelectedCategory(value); // Beállítja az új kategóriát a helyi állapotban.
    onCategoryChange(value); // Értesíti a szülő komponenst a változásról.
  };

  return (
    <Select
      value={selectedCategory} // A Select komponens jelenlegi értéke.
      onChange={(e) => handleCategoryChange(e.target.value)} // Hívja a handleCategoryChange függvényt az új értékkel.
      sx={{
        color: "white", // A szöveg színe.
        borderColor: "white", // A szegély színe.
        "& .MuiSvgIcon-root": { color: "white" }, // Az ikon színe.
        marginRight: "10px", // Margó a jobb oldalon.
      }}
    >
      {/* Kategória opciók */}
      <MenuItem value="Minden">Minden</MenuItem>
      <MenuItem value="Desszert">Desszert</MenuItem>
      <MenuItem value="Főétel">Főétel</MenuItem>
      <MenuItem value="Leves">Leves</MenuItem>
    </Select>
  );
}

export default CategorySelect;
