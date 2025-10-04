import React from "react";
import PropTypes from "prop-types";

/**
 * PUBLIC_INTERFACE
 * Filters provides dropdowns for cuisine and difficulty.
 */
export default function Filters({ cuisine, difficulty, onChange }) {
  /** Filter controls with accessible labels */
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} aria-label="Filters">
      <div>
        <label htmlFor="cuisine" className="visually-hidden">Cuisine</label>
        <select
          id="cuisine"
          value={cuisine || ""}
          onChange={(e) => onChange?.({ cuisine: e.target.value || null })}
          aria-label="Filter by cuisine"
        >
          <option value="">All Cuisines</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Indian</option>
          <option>American</option>
          <option>Japanese</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficulty" className="visually-hidden">Difficulty</label>
        <select
          id="difficulty"
          value={difficulty || ""}
          onChange={(e) => onChange?.({ difficulty: e.target.value || null })}
          aria-label="Filter by difficulty"
        >
          <option value="">All Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
    </div>
  );
}

Filters.propTypes = {
  cuisine: PropTypes.string,
  difficulty: PropTypes.string,
  onChange: PropTypes.func
};
