import React from "react";
import "./App.css";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
import { AppThemeProvider } from "./theme/ThemeProvider";
import { RecipesProvider } from "./state/RecipesContext";

/**
 * PUBLIC_INTERFACE
 * App is the root component that composes providers, header, and router.
 * It wires ThemeProvider and RecipesProvider, renders the Header and routes.
 * Returns the full application shell as JSX.
 */
function App() {
  /** Root app shell leveraging theme and recipes providers */
  return (
    <AppThemeProvider>
      <RecipesProvider>
        <div className="app-shell">
          <Header />
          <main className="page">
            <div className="container">
              <AppRouter />
            </div>
          </main>
        </div>
      </RecipesProvider>
    </AppThemeProvider>
  );
}

export default App;
