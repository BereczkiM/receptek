import React, { useState } from "react";
import { Box, Button, Snackbar, Alert, Modal } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import IngredientsList from "./IngredientsList";
import StepsList from "./StepsList";
import RecipeImageAndTitle from "./RecipeImageAndTitle";
import RecipeInfo from "./RecipeInfo";
import ActionButtons from "./ActionButtons";
import RecipeForm from "./RecipeForm";

/**
 * A `RecipeDetail` egy oldal, amely egy adott recept részleteit jeleníti meg.
 * A felhasználó megtekintheti a recept képét, címét, hozzávalóit, elkészítési idejét, kategóriáját és lépéseit.
 * Lehetőséget biztosít a recept szerkesztésére, törlésére és kedvencekhez adására.
 *
 * @param {Object} props - A komponens paraméterei.
 * @param {Array} props.recipes - Az elérhető receptek listája.
 * @param {function} props.onDelete - A recept törlését kezelő függvény.
 * @param {function} props.onUpdate - A recept frissítését kezelő függvény.
 * @param {function} props.toggleFavorite - A kedvencekhez adás/törlés kezelésére szolgáló függvény.
 * @param {Array} props.favorites - A kedvenc receptek ID-jainak listája.
 * @returns {JSX.Element} A `RecipeDetail` oldal megjelenítése.
 */
function RecipeDetail({ recipes, onDelete, onUpdate, toggleFavorite, favorites }) {
  // URL-ből azonosító kivonása
  const { id } = useParams();
  const navigate = useNavigate();

  // Az adott recept megtalálása az ID alapján
  const recipe = recipes.find((r) => r.id === parseInt(id));

  // Szerkesztés modal megnyitásához szükséges állapot
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Snackbar megjelenítése
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Ha a recept nem található, hibaüzenet jelenik meg
  if (!recipe) {
    return <Box>Recept nem található.</Box>;
  }

  /**
   * A szerkesztési modal megnyitásának kezelése.
   */
  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  /**
   * A recept frissítése az Edit modal bezárása után.
   * @param {Object} updatedRecipe - A frissített recept adatai.
   */
  const handleSaveEdit = (updatedRecipe) => {
    onUpdate({ ...recipe, ...updatedRecipe });
    setSnackbarMessage("Recept sikeresen módosítva!");
    setSnackbarOpen(true);
    setIsEditModalOpen(false);
  };

  /**
   * A recept törlése a felhasználó megerősítése után.
   */
  const handleDelete = () => {
    if (window.confirm("Biztosan törölni szeretnéd a receptet?")) {
      onDelete(recipe.id);
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 100px)", // Az oldal teljes magasságának beállítása.
        overflowY: "auto", // Görgethetőség az oldalon.
      }}
    >
      {/* Bal oldali rész */}
      <Box sx={{ flex: 3, padding: "20px" }}>
        {/* Vissza gomb */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{
            marginBottom: "20px",
            backgroundColor: "#d32f2f",
            color: "white",
            "&:hover": { backgroundColor: "#b71c1c" },
            maxWidth: "100px",
          }}
        >
          Vissza
        </Button>
        {/* Recept képe és címe */}
        <RecipeImageAndTitle image={recipe.image} title={recipe.name} />
        {/* Recept információ (kategória és elkészítési idő) */}
        <RecipeInfo category={recipe.category} time={recipe.time} />
        {/* Elkészítési lépések */}
        <Box sx={{ marginTop: "20px" }}>
          <StepsList steps={recipe.steps} />
        </Box>
      </Box>

      {/* Jobb oldali rész: Hozzávalók */}
      <IngredientsList ingredients={recipe.ingredients} />

      {/* Akciógombok (kedvencek, szerkesztés, törlés) */}
      <ActionButtons
        isFavorite={favorites.includes(recipe.id)} // Kedvenc-e a recept
        toggleFavorite={() => toggleFavorite(recipe.id)}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Szerkesztési modal */}
      <Modal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <RecipeForm
            onAddRecipe={handleSaveEdit} // A szerkesztési mentés kezelése.
            initialData={recipe} // A recept kezdeti adatai.
          />
        </Box>
      </Modal>

      {/* Snackbar üzenet */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default RecipeDetail;
