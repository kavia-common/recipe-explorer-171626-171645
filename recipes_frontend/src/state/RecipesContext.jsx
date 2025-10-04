import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { getRecipes as apiGetRecipes, getRecipeById } from "../services/apiClient";
import { loadFavorites, saveFavorites } from "../utils/storage";

/**
 * PUBLIC_INTERFACE
 * RecipesContext provides recipe data, search/filters, favorites, and helpers.
 */
const RecipesContext = createContext({
  recipes: [],
  loading: true,
  search: "",
  setSearch: () => {},
  filters: { cuisine: null, difficulty: null },
  setFilters: () => {},
  favorites: [],
  toggleFavorite: () => {},
  getRecipe: async () => null
});

/**
 * PUBLIC_INTERFACE
 * useRecipes hook to access RecipesContext.
 */
export function useRecipes() {
  /** Reads RecipesContext values */
  return useContext(RecipesContext);
}

/**
 * PUBLIC_INTERFACE
 * RecipesProvider loads recipes, manages UI state, and persists favorites.
 */
export function RecipesProvider({ children }) {
  /** Provides state and actions for recipes module */
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ cuisine: null, difficulty: null });
  const [favorites, setFavorites] = useState(() => loadFavorites());

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGetRecipes().then((data) => {
      if (mounted) {
        setRecipes(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const getRecipe = useCallback(async (id) => {
    const existing = recipes.find((r) => String(r.id) === String(id));
    if (existing) return existing;
    return await getRecipeById(id);
  }, [recipes]);

  const value = useMemo(
    () => ({
      recipes,
      loading,
      search,
      setSearch,
      filters,
      setFilters,
      favorites,
      toggleFavorite,
      getRecipe
    }),
    [recipes, loading, search, filters, favorites, toggleFavorite, getRecipe]
  );

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}
