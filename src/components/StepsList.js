import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * A `StepsList` komponens felelős egy recept lépéseinek megjelenítéséért.
 * A lépések vizuálisan elkülönítve, sorszámozva és stílusosan jelennek meg.
 *
 * @param {Object} props - A bemeneti paraméterek objektuma.
 * @param {string} props.steps - A lépések szövege, új sorokkal elválasztva.
 *
 * @returns {JSX.Element} - A lépések listájának megjelenítése.
 */
function StepsList({ steps }) {
  // A lépések listájának feldolgozása és megjelenítése
  const stepsList = steps.split("\n").map((step, index) => (
    <Box
      key={index} // Egyedi kulcs minden lépéshez a React optimalizáció érdekében
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#b71c1c", // Sötét piros háttérszín
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px", // Lekerekített sarkok
        color: "#ffffff", // Fehér szöveg
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginRight: "10px",
          backgroundColor: "#d32f2f", // Világosabb piros szín a sorszámnak
          padding: "5px 10px",
          borderRadius: "50%", // Kör alakú sorszám
        }}
      >
        {index + 1} {/* Lépés sorszáma */}
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff" }}>
        {step.trim()} {/* A lépés szövegének megjelenítése, felesleges szóközök eltávolítása */}
      </Typography>
    </Box>
  ));

  return (
    <Box>
      {/* Cím: Lépések */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Lépések
      </Typography>
      {/* A lépések listájának renderelése */}
      {stepsList}
    </Box>
  );
}

export default StepsList;
