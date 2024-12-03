import React from "react";
import { Box } from "@mui/material";

/**
 * `Modal` felelős egy egyszerű modális ablak megjelenítéséért.
 *
 * @param {Object} props - A komponens paraméterei.
 * @param {boolean} props.isOpen - Meghatározza, hogy a modális ablak nyitva van-e.
 * @param {function} props.onClose - A modális ablak bezárásakor meghívandó függvény.
 * @param {React.ReactNode} props.children - A modális tartalma.
 * @returns {JSX.Element|null} A modális ablak, ha `isOpen` igaz, különben `null`.
 */
function Modal({ isOpen, onClose, children }) {
  // Ha a modális nincs nyitva, ne jelenítsen meg semmit (null).
  if (!isOpen) return null;

  return (
    // A modális átlátszó háttérrétege.
    <div style={overlayStyle}>
      {/* A modális doboz tartalma */}
      <Box sx={modalStyle}>
        {/* Bezáró gomb */}
        <button style={closeButtonStyle} onClick={onClose}>
          ×
        </button>
        {/* A modális gyermekelemek */}
        {children}
      </Box>
    </div>
  );
}

// Az átlátszó háttér (overlay) stílusai
const overlayStyle = {
  position: "fixed", // A képernyőhöz rögzített pozíció.
  top: 0,
  left: 0,
  width: "100%", // Teljes szélesség.
  height: "100%", // Teljes magasság.
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Félig átlátszó fekete háttér.
  display: "flex", // Flexbox elrendezés a középre igazításhoz.
  justifyContent: "center", // Vízszintesen középre igazítja a modált.
  alignItems: "center", // Függőlegesen középre igazítja a modált.
  zIndex: 1000, // Az ablak fölé helyezi.
};

// A modális ablak (doboz) stílusai
const modalStyle = {
  backgroundColor: "white", // Fehér háttérszín.
  padding: "20px", // Belső térköz.
  borderRadius: "8px", // Lekerekített sarkok.
  width: "90%", // Szélesség mobil nézetben.
  maxWidth: "900px", // Maximális szélesség asztali nézetben.
  maxHeight: "90vh", // Maximális magasság a képernyő méretéhez igazítva.
  overflowY: "auto", // Görgethetővé teszi a tartalmat, ha túl sok van.
  position: "relative", // A bezáró gomb helyzetének meghatározása miatt.
};

// A bezáró gomb stílusai
const closeButtonStyle = {
  position: "absolute", // Az elem pozíciója a modálhoz képest.
  top: "10px", // A felső szegélytől 10px.
  right: "10px", // A jobb szegélytől 10px.
  background: "none", // Nincs háttér.
  border: "none", // Nincs szegély.
  fontSize: "18px", // A gomb szövegmérete.
  cursor: "pointer", // Mutató kurzor a hover állapotban.
};

export default Modal;
