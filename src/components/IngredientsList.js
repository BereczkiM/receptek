import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/**
 * `IngredientsList` felelős a hozzávalók megjelenítéséért egy stílusos listában.
 *
 * @param {Object} props - A komponens paraméterei.
 * @param {string} props.ingredients - Hozzávalók listája vesszővel elválasztva.
 * @returns {JSX.Element} Az `IngredientsList` megjelenítése.
 */
function IngredientsList({ ingredients }) {
  // A hozzávalók listájának generálása az input stringből.
  const ingredientsList = ingredients.split(",").map((ingredient, index) => (
    <Box
      key={index}
      sx={{
        display: "flex", // Sorba rendezi az ikonokat és a szöveget.
        alignItems: "center", // Függőlegesen középre igazítja az elemeket.
        marginBottom: "8px", // Alsó margó a lista elemek között.
      }}
    >
      {/* Pipa ikon a hozzávaló előtt */}
      <CheckCircleIcon sx={{ color: "white", marginRight: "8px" }} />
      {/* Hozzávaló szöveg */}
      <Typography variant="body1" sx={{ color: "white" }}>
        {ingredient.trim()} {/* Eltávolítja az esetleges felesleges szóközöket. */}
      </Typography>
    </Box>
  ));

  return (
    <Box
      sx={{
        position: "relative", // Elhelyezés a tartalom többi részéhez képest.
        top: "80px", // A doboz eltolása 80px-el lefelé.
        backgroundColor: "#b71c1c", // Háttérszín.
        padding: "20px", // Belső térköz.
        color: "white", // Szöveg színe.
        textAlign: "left", // Balra igazítja a szöveget.
        marginLeft: "20px", // Külső bal margó.
        borderRadius: "16px", // Lekerekített sarkok.
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Árnyék hozzáadása.
        width: "fit-content", // Méret igazítása a tartalomhoz.
        maxHeight: "calc(100vh - 160px)", // Maximális magasság a képernyőhöz viszonyítva.
        overflowY: "auto", // Görgethetővé teszi, ha a tartalom túllépi a magasságot.
      }}
    >
      {/* Hozzávalók cím */}
      <Typography
        variant="h4"
        gutterBottom // Alsó térköz a cím alatt.
        sx={{
          textAlign: "center", // Középre igazított cím.
          borderBottom: "2px solid white", // Fehér alsó vonal a cím alatt.
          paddingBottom: "10px", // Távolság a cím alá.
        }}
      >
        Hozzávalók
      </Typography>
      {/* A generált hozzávalók lista */}
      {ingredientsList}
    </Box>
  );
}

export default IngredientsList;
