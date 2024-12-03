import React, { useState } from "react";
import { TextField, IconButton, List, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * `IngredientManager` felelős a hozzávalók kezeléséért: hozzáadás, szerkesztés és törlés.
 *
 * @param {Object} props - A komponens paraméterei.
 * @param {Array<string>} props.ingredients - A jelenlegi hozzávalók listája.
 * @param {function} props.setIngredients - Callback függvény a hozzávalók frissítésére.
 * @returns {JSX.Element} Az `IngredientManager` megjelenítése.
 */
function IngredientManager({ ingredients, setIngredients }) {
  // Állapot a felhasználó által beírt hozzávaló szövegéhez.
  const [ingredientInput, setIngredientInput] = useState("");

  /**
   * Új hozzávaló hozzáadása a listához.
   */
  const addIngredient = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  /**
   * Hozzávaló szerkesztése egy adott indexnél.
   *
   * @param {number} index - A szerkesztendő hozzávaló indexe.
   * @param {string} newValue - Az új érték.
   */
  const editIngredient = (index, newValue) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = newValue;
    setIngredients(updatedIngredients);
  };

  /**
   * Hozzávaló törlése a listából egy adott index alapján.
   *
   * @param {number} index - A törlendő hozzávaló indexe.
   */
  const deleteIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Új hozzávaló hozzáadása input mező */}
      <TextField
        label="Hozzávaló hozzáadása" // Mező címkéje.
        variant="outlined" // Material Design stílus.
        value={ingredientInput} // Az aktuális input értéke.
        fullWidth // A mező kitölti a rendelkezésre álló szélességet.
        onChange={(e) => setIngredientInput(e.target.value)} // Frissíti az állapotot a felhasználói bevitel alapján.
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addIngredient())} // Enter billentyűvel történő hozzáadás.
      />
      {/* Hozzávalók listája */}
      <List>
        {ingredients.map((ingredient, index) => (
          <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
            {/* Hozzávaló szerkesztése */}
            <TextField
              variant="outlined"
              value={ingredient} // Az aktuális hozzávaló értéke.
              onChange={(e) => editIngredient(index, e.target.value)} // Frissíti az adott hozzávalót.
              sx={{ flex: 1, marginRight: "10px" }} // Stílus: kitöltés és távolság.
            />
            {/* Hozzávaló törlés gomb */}
            <IconButton onClick={() => deleteIngredient(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default IngredientManager;
