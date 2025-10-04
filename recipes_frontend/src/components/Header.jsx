import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";

/**
 * PUBLIC_INTERFACE
 * Header contains app brand, navigation, and theme toggle.
 */
export default function Header() {
  /** Header with nav links and accessible theme switcher */
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand" aria-label="Recipe Explorer">
          <span className="dot" aria-hidden="true" />
          <span>Recipe Explorer</span>
        </div>
        <nav aria-label="Primary">
          <div className="nav-actions">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              aria-current={location.pathname === "/favorites" ? "page" : undefined}
            >
              Favorites
            </NavLink>
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-pressed={theme === "dark"}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title="Toggle theme"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
