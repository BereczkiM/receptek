import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { RestaurantMenu } from "@mui/icons-material";

/**
 * `HomeButton` egy gomb, amely a főoldalra navigál, és visszaállítja a kiválasztott kategóriát az alapértelmezett "Minden" értékre.
 * 
 * @param {Object} props - A komponens propjai.
 * @param {function} props.onCategoryChange - Callback függvény, amely értesíti a szülő komponenst a kategória alaphelyzetbe állításáról.
 * @returns {JSX.Element} A megjelenített `HomeButton` komponens.
 */
function HomeButton({ onCategoryChange }) {
  /**
   * Kategória visszaállítása az alapértelmezett "Minden" értékre.
   */
  const resetCategory = () => {
    onCategoryChange("Minden"); // Értesíti a szülő komponenst, hogy állítsa vissza a kategóriát.
  };

  return (
    <Link
      to="/" // Navigálás a főoldalra.
      onClick={resetCategory} // Kategória visszaállítás eseménykezelője.
      style={{ textDecoration: "none", color: "inherit" }} // Stílusok: nincs aláhúzás, örökölt szövegszín.
    >
      <Button
        startIcon={<RestaurantMenu />} // Ikon a gomb bal oldalán.
        sx={{
          color: "white", // Gomb színe.
          textTransform: "none", // Szöveg formázásának kikapcsolása.
          fontSize: "18px", // Szöveg mérete.
          fontWeight: "bold", // Szöveg vastagsága.
        }}
      >
        Recept App
      </Button>
    </Link>
  );
}

export default HomeButton;
