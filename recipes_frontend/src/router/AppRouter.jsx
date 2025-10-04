import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import RecipeDetail from "../pages/RecipeDetail";

/**
 * PUBLIC_INTERFACE
 * AppRouter defines all app routes.
 */
export default function AppRouter() {
  /** Maps application paths to page components */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
}
