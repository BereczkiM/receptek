import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * A `RecipeImageAndTitle` komponens megjeleníti a recepthez tartozó képet és címet.
 * 
 * @param {Object} props - A komponens paraméterei.
 * @param {string} props.image - A recepthez tartozó kép URL-je.
 * @param {string} props.title - A recept címe.
 * @returns {JSX.Element} Egy dobozban (box) megjelenített kép és cím.
 */
function RecipeImageAndTitle({ image, title }) {
  return (
    <Box sx={{ textAlign: "center" }}> {/* A tartalom középre igazítása */}
      <img
        src={image} // A kép URL-jének megadása
        alt={title} // Alternatív szöveg a képen, ha nem tölthető be
        style={{
          maxWidth: "100%", // A kép szélessége nem lépi túl a konténer szélességét
          maxHeight: "500px", // Maximális magasság a megfelelő méretezéshez
          objectFit: "cover", // A kép kitöltése a keret arányai szerint
          marginBottom: "20px", // Térköz a kép és a cím között
          border: "2px solid black", // Fekete keret a kép körül
        }}
      />
      <Typography variant="h3" sx={{ fontWeight: "bold" }}> {/* A recept címe vastagon szedve */}
        {title}
      </Typography>
    </Box>
  );
}

export default RecipeImageAndTitle;
