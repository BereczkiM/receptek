import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import HomeButton from "./HomeButton";
import CategorySelect from "./CategorySelect";
import AddButton from "./AddButton";

/**
 * `Navbar` egy navigációs sáv, amely lehetővé teszi az alkalmazás alapvető funkcióinak elérését:
 * - Vissza a főoldalra (`HomeButton`).
 * - Receptkategóriák szűrése (`CategorySelect`).
 * - Új recept hozzáadása (`AddButton`).
 *
 * @param {Object} props - A komponens paraméterei.
 * @param {function} props.onAddClick - Az új recept hozzáadására meghívandó függvény.
 * @param {function} props.onCategoryChange - A kategóriák változásakor meghívandó függvény.
 * @returns {JSX.Element} A navigációs sáv megjelenítése.
 */
function Navbar({ onAddClick, onCategoryChange }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d32f2f" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Visszatérés a főoldalra */}
        <HomeButton onCategoryChange={onCategoryChange} />

        {/* Kategóriaválasztó és hozzáadás gomb */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Kategóriák szűrése */}
          <CategorySelect onCategoryChange={onCategoryChange} />

          {/* Új recept hozzáadása */}
          <AddButton onAddClick={onAddClick} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
