import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Modal from "./components/Modal";

/**
 * Az App komponens az alkalmazás fő komponense, amely a receptek kezelését, 
 * a kedvencek megjelölését, a szűrést és a keresést, valamint az oldalak közötti 
 * navigációt biztosítja.
 */
function App() {
  const location = useLocation(); // Az aktuális URL alapján dönti el a megjelenítendő tartalmat

  // Receptek állapota helyi tárolóval inicializálva
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // Kedvencek állapota helyi tárolóval inicializálva
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Kategória, keresési kifejezés, modal nyitva tartása és kedvencek mutatása
  const [filteredCategory, setFilteredCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  /**
   * Új recept hozzáadása.
   * @param {Object} recipe - Az új recept objektuma.
   */
  const handleAddRecipe = (recipe) => {
    const updatedRecipes = [...recipes, { ...recipe, id: Date.now() }];
    setRecipes(updatedRecipes);
    setIsModalOpen(false); // Modal bezárása a mentés után
  };

  /**
   * Recept törlése az ID alapján.
   * @param {number} id - A törlendő recept azonosítója.
   */
  const handleDeleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  /**
   * Recept frissítése.
   * @param {Object} updatedRecipe - A frissített recept objektuma.
   */
  const handleUpdateRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
  };

  /**
   * Kedvencek állapotának megváltoztatása.
   * @param {number} id - A recept azonosítója.
   */
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  /**
   * Receptek állapotának mentése a böngésző helyi tárolójába.
   */
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  /**
   * Kedvencek állapotának mentése a böngésző helyi tárolójába.
   */
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  /**
   * Receptek szűrése kategória, keresési kifejezés és kedvencek szerint.
   */
  const filteredRecipes = recipes.filter(
    (recipe) =>
      (!filteredCategory || filteredCategory === "Minden" || recipe.category === filteredCategory) &&
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!showFavorites || favorites.includes(recipe.id))
  );

  return (
    <>
      {/* Navigációs sáv */}
      <Navbar
        onAddClick={() => setIsModalOpen(true)}
        onCategoryChange={setFilteredCategory}
      />
      <div style={{ padding: "20px" }}>
        {/* Keresősáv és kedvencek gomb csak a főoldalon */}
        {location.pathname === "/" && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Keresés receptek között..."
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "70%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              style={{
                padding: "10px 15px",
                backgroundColor: showFavorites ? "#d32f2f" : "#f1f1f1",
                color: showFavorites ? "#fff" : "#333",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {showFavorites ? "ÖSSZES" : "KEDVENCEK"}
            </button>
          </div>
        )}
        <Routes>
          {/* Receptek listája */}
          <Route
            path="/"
            element={
              <RecipeList
                recipes={filteredRecipes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          {/* Recept részletei */}
          <Route
            path="/recipe/:id"
            element={
              <RecipeDetail
                recipes={recipes}
                onDelete={handleDeleteRecipe}
                onUpdate={handleUpdateRecipe}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </div>
      {/* Modal az új recept hozzáadásához */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RecipeForm onAddRecipe={handleAddRecipe} />
      </Modal>
    </>
  );
}

export default App;
