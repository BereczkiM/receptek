import React from "react";
import { Box } from "@mui/material";
import NameInput from "./NameInput";
import CategorySelect from "./CategorySelectRecipeF";
import IngredientManager from "./IngredientManager";
import StepManager from "./StepManager";
import TimeSelect from "./TimeSelect";
import ImageInput from "./ImageInput";
import SubmitButton from "./SubmitButton";

/**
 * A `RecipeForm` egy űrlap, amely lehetővé teszi a felhasználók számára egy recept adatainak megadását vagy szerkesztését.
 * Tartalmaz mezőket a recept nevéhez, kategóriájához, hozzávalóihoz, elkészítési idejéhez, lépéseihez és kép URL-jéhez.
 * 
 * @param {Object} props - A komponens paraméterei.
 * @param {function} props.onAddRecipe - A függvény, amelyet az űrlap beküldésekor meghívunk.
 * @param {Object} [props.initialData={}] - Az alapértelmezett értékek a form kitöltéséhez (pl. szerkesztéskor).
 * @returns {JSX.Element} Az űrlap megjelenítése.
 */
function RecipeForm({ onAddRecipe, initialData = {} }) {
  // Recept mezők állapotainak inicializálása
  const [name, setName] = React.useState(initialData.name || ""); // Recept neve
  const [ingredients, setIngredients] = React.useState(
    initialData.ingredients ? initialData.ingredients.split(",") : []
  ); // Hozzávalók tömbként
  const [category, setCategory] = React.useState(initialData.category || "Desszert"); // Kategória
  const [time, setTime] = React.useState(initialData.time || "15"); // Elkészítési idő
  const [steps, setSteps] = React.useState(
    initialData.steps ? initialData.steps.split("\n") : []
  ); // Elkészítési lépések tömbként
  const [image, setImage] = React.useState(initialData.image || ""); // Kép URL

  /**
   * Az űrlap beküldésének kezelése.
   * Az összegyűjtött adatokat továbbítja a `onAddRecipe` függvénynek.
   * 
   * @param {Event} e - Az esemény objektum.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe({
      name,
      ingredients: ingredients.join(","), // Hozzávalók tömbből stringgé alakítása
      category,
      time,
      steps: steps.join("\n"), // Lépések tömbből stringgé alakítása
      image,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit} // Az űrlap beküldésének eseménykezelője
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxHeight: "80vh", // Maximális magasság a görgethetőséghez
        overflowY: "auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Árnyék a jobb vizuális megjelenésért
      }}
    >
      {/* Egyéni komponensek az űrlap egyes mezőihez */}
      <NameInput value={name} onChange={setName} /> {/* Recept neve */}
      <CategorySelect value={category} onChange={setCategory} /> {/* Kategória kiválasztása */}
      <IngredientManager ingredients={ingredients} setIngredients={setIngredients} /> {/* Hozzávalók kezelése */}
      <StepManager steps={steps} setSteps={setSteps} /> {/* Lépések kezelése */}
      <TimeSelect value={time} onChange={setTime} /> {/* Elkészítési idő kiválasztása */}
      <ImageInput value={image} onChange={setImage} /> {/* Kép URL megadása */}
      <SubmitButton /> {/* Beküldés gomb */}
    </Box>
  );
}

export default RecipeForm;
