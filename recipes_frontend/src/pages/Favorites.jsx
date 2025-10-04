import React, { useMemo } from "react";
import { useRecipes } from "../state/RecipesContext";
import RecipeCard from "../components/RecipeCard";

/**
 * PUBLIC_INTERFACE
 * Favorites page shows user's saved recipes.
 */
export default function Favorites() {
  /** Lists recipes that are marked favorite */
  const { recipes, favorites, toggleFavorite } = useRecipes();

  const favList = useMemo(
    () => recipes.filter((r) => favorites.includes(r.id)),
    [recipes, favorites]
  );

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Your Favorites</h2>
      {favList.length === 0 ? (
        <p className="helper">You haven’t added any favorites yet.</p>
      ) : (
        <section
          className="recipe-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))"
          }}
          aria-live="polite"
        >
          {favList.map((r) => (
            <RecipeCard
              key={r.id}
              recipe={r}
              isFavorite
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      )}
    </div>
  );
}
