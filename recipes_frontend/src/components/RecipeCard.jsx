import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import TagChip from "./TagChip";

/**
 * PUBLIC_INTERFACE
 * RecipeCard shows image, title, rating, and quick details with favorite toggle.
 */
export default function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  /** Card summarizing a recipe with tags and favorite control */
  return (
    <article className="card" style={{ overflow: "hidden" }}>
      <Link to={`/recipe/${recipe.id}`} aria-label={`View ${recipe.title}`}>
        <div style={{ aspectRatio: "16/10", background: "#e5e7eb", overflow: "hidden" }}>
          <img
            src={recipe.image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      </Link>
      <div style={{ padding: 14, display: "grid", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 16 }}>{recipe.title}</h3>
          <button
            type="button"
            className="btn ghost"
            onClick={() => onToggleFavorite?.(recipe.id)}
            aria-pressed={!!isFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <RatingStars rating={recipe.rating} />
          <span className="helper">{recipe.time} • {recipe.difficulty}</span>
        </div>
        <div className="tags">
          {recipe.tags?.slice(0, 3).map((t) => <TagChip key={t} label={t} />)}
        </div>
      </div>
    </article>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    rating: PropTypes.number,
    time: PropTypes.string,
    difficulty: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  isFavorite: PropTypes.bool,
  onToggleFavorite: PropTypes.func
};
