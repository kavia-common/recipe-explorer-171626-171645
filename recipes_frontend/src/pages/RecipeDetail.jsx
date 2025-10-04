import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipes } from "../state/RecipesContext";
import RatingStars from "../components/RatingStars";
import Button from "../components/Button";

/**
 * PUBLIC_INTERFACE
 * RecipeDetail shows in-depth information for a single recipe.
 */
export default function RecipeDetail() {
  /** Loads a single recipe by id and shows full detail view */
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecipe, favorites, toggleFavorite } = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fav = favorites.includes(String(id));

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getRecipe(id).then((r) => {
      if (mounted) {
        setRecipe(r);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [id, getRecipe]);

  if (loading) return <p className="helper">Loading recipe…</p>;
  if (!recipe) return <p className="helper">Recipe not found.</p>;

  return (
    <article className="card" style={{ overflow: "hidden" }}>
      <div style={{ aspectRatio: "16/6", background: "#e5e7eb" }}>
        <img src={recipe.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ padding: 16, display: "grid", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <h1 style={{ margin: 0, fontSize: 24 }}>{recipe.title}</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="ghost" onClick={() => navigate(-1)}>Back</Button>
            <Button
              variant="secondary"
              aria-pressed={fav}
              aria-label={fav ? "Remove from favorites" : "Add to favorites"}
              onClick={() => toggleFavorite(recipe.id)}
            >
              {fav ? "❤️ Favorited" : "🤍 Favorite"}
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <RatingStars rating={recipe.rating} />
          <span className="helper">{recipe.time} • {recipe.difficulty} • {recipe.cuisine}</span>
        </div>

        <section>
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Steps</h2>
          <ol>
            {recipe.steps.map((s, idx) => <li key={idx} style={{ marginBottom: 6 }}>{s}</li>)}
          </ol>
        </section>
      </div>
    </article>
  );
}
