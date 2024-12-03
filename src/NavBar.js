import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import HomeButton from "./HomeButton";
import CategorySelect from "./CategorySelect";
import AddButton from "./components/AddButton";

function Navbar({ onAddClick, onCategoryChange }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d32f2f" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <HomeButton onCategoryChange={onCategoryChange} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <CategorySelect onCategoryChange={onCategoryChange} />
          <AddButton onAddClick={onAddClick} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
