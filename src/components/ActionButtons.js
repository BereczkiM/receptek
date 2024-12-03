import React from "react";
import { Box, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * `ActionButtons` egy funkcionális React komponens, amely rögzített pozíciójú
 * akciógombokat jelenít meg (kedvenc beállítás, szerkesztés, törlés).
 *
 * @param {Object} props - A komponens propjai.
 * @param {boolean} props.isFavorite - Meghatározza, hogy az elem kedvenc-e.
 * @param {function} props.toggleFavorite - Callback a kedvenc állapot váltására.
 * @param {function} props.onEdit - Callback a szerkesztési esemény kezelésére.
 * @param {function} props.onDelete - Callback a törlési esemény kezelésére.
 * @returns {JSX.Element} A megjelenített `ActionButtons` komponens.
 */
function ActionButtons({ isFavorite, toggleFavorite, onEdit, onDelete }) {
  return (
    <Box
      sx={{
        position: "fixed", // A gombok mindig a képernyő adott pozícióján maradnak.
        top: "100px", // Függőleges elhelyezkedés a képernyő tetejétől számítva.
        right: "50px", // Vízszintes elhelyezkedés a képernyő jobb szélétől.
        display: "flex", // A gombok egymás mellett helyezkednek el.
        gap: "10px", // Távolság a gombok között.
      }}
    >
      {/* Kedvenc állapot váltó gomb */}
      <IconButton
        onClick={toggleFavorite} // Hívja a kedvenc állapotot váltó függvényt.
        sx={{
          backgroundColor: "white", // Alapértelmezett háttérszín.
          "&:hover": { backgroundColor: "#f1f1f1" }, // Hover effektus.
        }}
      >
        {isFavorite ? (
          <StarIcon sx={{ color: "#FFD700" }} /> // Kedvenc ikon.
        ) : (
          <StarBorderIcon sx={{ color: "#FFD700" }} /> // Üres kedvenc ikon.
        )}
      </IconButton>

      {/* Szerkesztés gomb */}
      <IconButton
        color="primary"
        onClick={onEdit} // Hívja a szerkesztési eseményt kezelő függvényt.
        sx={{
          backgroundColor: "white", // Alapértelmezett háttérszín.
          "&:hover": { backgroundColor: "#f1f1f1" }, // Hover effektus.
        }}
      >
        <EditIcon /> {/* Szerkesztés ikon */}
      </IconButton>

      {/* Törlés gomb */}
      <IconButton
        color="error"
        onClick={onDelete} // Hívja a törlési eseményt kezelő függvényt.
        sx={{
          backgroundColor: "white", // Alapértelmezett háttérszín.
          "&:hover": { backgroundColor: "#f1f1f1" }, // Hover effektus.
        }}
      >
        <DeleteIcon /> {/* Törlés ikon */}
      </IconButton>
    </Box>
  );
}

export default ActionButtons;
