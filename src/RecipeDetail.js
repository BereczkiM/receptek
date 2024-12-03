import React, { useState } from "react";
import { Box, Button, Snackbar, Alert, Modal } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import IngredientsList from "./IngredientsList";
import StepsList from "./StepsList";
import RecipeImageAndTitle from "./RecipeImageAndTitle";
import RecipeInfo from "./RecipeInfo";
import ActionButtons from "./components/ActionButtons";
import RecipeForm from "./RecipeForm";

function RecipeDetail({ recipes, onDelete, onUpdate, toggleFavorite, favorites }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  if (!recipe) {
    return <Box>Recept nem található.</Box>;
  }

  // Edit gomb eseménykezelője
  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  // Recept szerkesztésének mentése
  const handleSaveEdit = (updatedRecipe) => {
    onUpdate({ ...recipe, ...updatedRecipe });
    setSnackbarMessage("Recept sikeresen módosítva!");
    setSnackbarOpen(true);
    setIsEditModalOpen(false);
  };

  // Recept törlése
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
        height: "calc(100vh - 100px)",
        overflowY: "auto",
      }}
    >
      {/* Bal oldali rész */}
      <Box sx={{ flex: 3, padding: "20px" }}>
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
        <RecipeImageAndTitle image={recipe.image} title={recipe.name} />
        <RecipeInfo category={recipe.category} time={recipe.time} />
        <Box sx={{ marginTop: "20px" }}>
          <StepsList steps={recipe.steps} />
        </Box>
      </Box>
      <IngredientsList ingredients={recipe.ingredients} />
      <ActionButtons
        isFavorite={favorites.includes(recipe.id)}
        toggleFavorite={() => toggleFavorite(recipe.id)}
        onEdit={handleEdit} // Az Edit gomb működéséhez szükséges
        onDelete={handleDelete}
      />

      {/* Modal az Edit funkcióhoz */}
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
            onAddRecipe={handleSaveEdit} // Az Edit mentése
            initialData={recipe} // Kezdeti adatok átadása
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
