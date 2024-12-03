import React from "react";
import { Typography, Box } from "@mui/material";

/**
 * A `RecipeInfo` komponens megjeleníti a recept kategóriáját és elkészítési idejét.
 * 
 * @param {Object} props - A komponens paraméterei.
 * @param {string} props.category - A recept kategóriája (pl. Desszert, Főétel, Leves).
 * @param {number|string} props.time - A recept elkészítési ideje percben.
 * @returns {JSX.Element} Egy információs blokk a kategóriával és az idővel.
 */
function RecipeInfo({ category, time }) {
  return (
    <Box sx={{ marginBottom: "20px" }}> {/* Térköz a többi elem között */}
      <Typography variant="h5" sx={{ fontWeight: "bold" }}> {/* Kategória cím */}
        Kategória: <span style={{ fontWeight: "normal" }}>{category}</span>
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}> {/* Elkészítési idő cím */}
        Elkészítési idő: <span style={{ fontWeight: "normal" }}>{time} perc</span>
      </Typography>
    </Box>
  );
}

export default RecipeInfo;
