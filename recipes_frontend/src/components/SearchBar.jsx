import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

/**
 * PUBLIC_INTERFACE
 * SearchBar captures search text and emits onSearch.
 */
export default function SearchBar({ initial = "", onSearch }) {
  /** Controlled search input with submit */
  const [value, setValue] = useState(initial);

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(value.trim());
  };

  return (
    <form onSubmit={submit} role="search" aria-label="Search recipes" style={{ display: "flex", gap: 8 }}>
      <label htmlFor="search" className="visually-hidden">Search recipes</label>
      <input
        id="search"
        type="search"
        value={value}
        placeholder="Search by name or ingredient..."
        onChange={(e) => setValue(e.target.value)}
        aria-label="Search text"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

SearchBar.propTypes = {
  initial: PropTypes.string,
  onSearch: PropTypes.func
};
