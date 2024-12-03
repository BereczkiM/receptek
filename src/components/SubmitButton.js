import React from "react";
import Button from "@mui/material/Button";

/**
 * A `SubmitButton` komponens egy szabványos "Mentés" gombot jelenít meg,
 * amelyet űrlapok beküldésére használnak.
 *
 * @returns {JSX.Element} - Egy Material-UI `Button` komponens "Mentés" felirattal.
 */
function SubmitButton() {
  return (
    <Button
      variant="contained"
      color="primary" 
      type="submit"
    >
      Mentés
    </Button>
  );
}

export default SubmitButton;
