import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Box, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

/**
 * A `RecipeList` komponens felelős a receptek listázásáért, valamint a kedvenc státusz kezeléséért.
 * 
 * @param {Object} props - A komponens bemeneti paraméterei.
 * @param {Array} props.recipes - A megjelenítendő receptek tömbje.
 * @param {Array} props.favorites - A kedvenc receptek azonosítóinak listája.
 * @param {Function} props.toggleFavorite - Függvény, amely kezeli a kedvenc státusz váltását.
 * 
 * @returns {JSX.Element} A receptek listájának megjelenítése.
 */
function RecipeList({ recipes, favorites, toggleFavorite }) {
  // Animáció inicializálása a komponens betöltésekor
  useEffect(() => {
    animateRecipeCards();
  }, []);

  /**
   * A receptkártyák megjelenésének animálása.
   * A kártyák egyesével, enyhe késleltetéssel jelennek meg, ami dinamikusabbá teszi az oldalt.
   */
  const animateRecipeCards = () => {
    const cards = document.querySelectorAll(".recipe-card");
    cards.forEach((card, index) => {
      card.style.opacity = 0; // Kezdetben áttetszővé teszi
      card.style.transform = "translateY(20px)"; // Kezdetben lefelé tolja
      setTimeout(() => {
        requestAnimationFrame(() => {
          card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          card.style.opacity = 1; // Láthatóvá teszi
          card.style.transform = "translateY(0)"; // Visszaállítja az eredeti pozíciót
        });
      }, index * 100); // Az egyes kártyák között 100ms késleltetés
    });
  };

  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={recipe.id}
          className="recipe-card" // Az animációhoz szükséges CSS osztály
        >
          <Card
            component={Link}
            to={`/recipe/${recipe.id}`} // A recept részletekhez vezető link
            sx={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              backgroundColor: "#f9f9f9",
              "&:hover": { backgroundColor: "#f1f1f1" },
              padding: "10px",
            }}
          >
            {/* A recept képe */}
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            )}
            {/* Recept információk és kedvenc gomb */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box>
                <Typography variant="h6">{recipe.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.time} perc
                </Typography>
              </Box>
              <IconButton
                onClick={(e) => {
                  e.preventDefault(); // Megakadályozza az oldal újratöltését
                  toggleFavorite(recipe.id); // Kedvenc státusz váltása
                }}
                sx={{
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "#f1f1f1" },
                }}
              >
                {favorites.includes(recipe.id) ? (
                  <StarIcon sx={{ color: "#FFD700" }} />
                ) : (
                  <StarBorderIcon sx={{ color: "#FFD700" }} />
                )}
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
