import React, { useMemo } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../state/RecipesContext";

/**
 * PUBLIC_INTERFACE
 * Home page listing recipes with search and filters.
 */
export default function Home() {
  /** The homepage fetches recipes and shows filterable results */
  const {
    recipes,
    search,
    setSearch,
    filters,
    setFilters,
    favorites,
    toggleFavorite,
    loading
  } = useRecipes();

  const filtered = useMemo(() => {
    let list = recipes;
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.ingredients.join(",").toLowerCase().includes(q)
      );
    }
    if (filters.cuisine) list = list.filter((r) => r.cuisine === filters.cuisine);
    if (filters.difficulty) list = list.filter((r) => r.difficulty === filters.difficulty);
    return list;
  }, [recipes, search, filters]);

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <SearchBar initial={search} onSearch={setSearch} />
        <Filters
          cuisine={filters.cuisine}
          difficulty={filters.difficulty}
          onChange={(patch) => setFilters({ ...filters, ...patch })}
        />
      </div>

      {loading ? (
        <p className="helper">Loading recipes…</p>
      ) : filtered.length === 0 ? (
        <p className="helper">No recipes match your criteria.</p>
      ) : (
        <section
          className="recipe-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))"
          }}
          aria-live="polite"
        >
          {filtered.map((r) => (
            <RecipeCard
              key={r.id}
              recipe={r}
              isFavorite={favorites.includes(r.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      )}
    </div>
  );
}
