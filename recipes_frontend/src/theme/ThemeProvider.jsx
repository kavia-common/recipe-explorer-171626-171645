import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { applyTheme, themes } from "./theme";

/**
 * PUBLIC_INTERFACE
 * ThemeContext provides current theme name and a toggle function.
 */
export const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

/**
 * PUBLIC_INTERFACE
 * useTheme hook to access theme context
 */
export function useTheme() {
  /** Access ThemeContext for current theme and toggler */
  return useContext(ThemeContext);
}

/**
 * PUBLIC_INTERFACE
 * AppThemeProvider persists and applies theme and exposes toggle.
 */
export function AppThemeProvider({ children }) {
  /** This provider manages the theme and writes CSS variables to :root */
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("app-theme");
    return saved || "light";
  });

  useEffect(() => {
    const t = themes[theme] || themes.light;
    applyTheme(t);
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("app-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
