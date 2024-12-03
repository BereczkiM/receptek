import React, { useState } from "react";
import { TextField, IconButton, List, ListItem, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * A `StepManager` felelős a recept lépéseinek kezeléséért.
 * Lehetővé teszi új lépések hozzáadását, meglévők szerkesztését, sorrendjük változtatását és törlésüket.
 *
 * @param {Object} props - A komponens bemeneti paraméterei.
 * @param {Array} props.steps - A jelenlegi lépések tömbje.
 * @param {Function} props.setSteps - Függvény a lépések állapotának frissítésére.
 * 
 * @returns {JSX.Element} A lépések kezelő komponens megjelenítése.
 */
function StepManager({ steps, setSteps }) {
  const [stepInput, setStepInput] = useState(""); // Új lépés hozzáadásához használt input állapota

  /**
   * Új lépés hozzáadása a listához.
   * Az input mező értékét a lépések tömbjéhez adja, majd kiüríti az inputot.
   */
  const addStep = () => {
    if (stepInput.trim() !== "") {
      setSteps([...steps, stepInput.trim()]);
      setStepInput(""); // Input mező törlése
    }
  };

  /**
   * Lépés áthelyezése a listán belül.
   * @param {number} index - A lépés indexe.
   * @param {number} direction - Az elmozdulás iránya (-1: felfelé, 1: lefelé).
   */
  const moveStep = (index, direction) => {
    const updatedSteps = [...steps];
    const [movedStep] = updatedSteps.splice(index, 1); // Lépés eltávolítása az eredeti helyéről
    updatedSteps.splice(index + direction, 0, movedStep); // Lépés beszúrása az új helyre
    setSteps(updatedSteps);
  };

  /**
   * Lépés törlése a listából.
   * @param {number} index - A törlendő lépés indexe.
   */
  const deleteStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index)); // Az adott indexű lépés eltávolítása
  };

  return (
    <div>
      {/* Új lépés hozzáadása */}
      <TextField
        label="Lépés hozzáadása"
        variant="outlined"
        value={stepInput}
        fullWidth
        onChange={(e) => setStepInput(e.target.value)} // Input mező állapot frissítése
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addStep())} // Enter lenyomására lépés hozzáadása
      />
      <List>
        {steps.map((step, index) => (
          <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
            {/* Lépés sorszáma */}
            <Typography sx={{ marginRight: "10px" }}>{index + 1}.</Typography>
            {/* Lépés szövegének szerkesztése */}
            <TextField
              variant="outlined"
              value={step}
              onChange={(e) => {
                const updatedSteps = [...steps];
                updatedSteps[index] = e.target.value; // Lépés szövegének frissítése
                setSteps(updatedSteps);
              }}
              sx={{ flex: 1, marginRight: "10px" }}
            />
            {/* Lépés felfelé mozgatása */}
            <IconButton
              onClick={() => moveStep(index, -1)}
              disabled={index === 0} // Ha az első elem, akkor letiltva
              color="primary"
            >
              <ArrowUpwardIcon />
            </IconButton>
            {/* Lépés lefelé mozgatása */}
            <IconButton
              onClick={() => moveStep(index, 1)}
              disabled={index === steps.length - 1} // Ha az utolsó elem, akkor letiltva
              color="primary"
            >
              <ArrowDownwardIcon />
            </IconButton>
            {/* Lépés törlése */}
            <IconButton onClick={() => deleteStep(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default StepManager;
