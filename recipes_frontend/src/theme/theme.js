export const themes = {
  light: {
    name: "light",
    primary: "#2563EB",
    secondary: "#F59E0B",
    success: "#F59E0B",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827"
  },
  dark: {
    name: "dark",
    primary: "#60A5FA",
    secondary: "#FBBF24",
    success: "#FBBF24",
    error: "#F87171",
    background: "#0b1220",
    surface: "#0f172a",
    text: "#e5e7eb"
  }
};

/**
 * PUBLIC_INTERFACE
 * applyTheme sets CSS variables on :root based on a theme object.
 */
export function applyTheme(theme) {
  /** Apply CSS variables for the app */
  const root = document.documentElement;
  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-success", theme.success);
  root.style.setProperty("--color-error", theme.error);
  root.style.setProperty("--color-bg", theme.background);
  root.style.setProperty("--color-surface", theme.surface);
  root.style.setProperty("--color-text", theme.text);
}
