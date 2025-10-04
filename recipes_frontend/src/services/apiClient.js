import { mockRecipes } from "./mockData";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// PUBLIC_INTERFACE
export async function getRecipes() {
  /** Returns all recipes with a small artificial delay */
  await sleep(250);
  return [...mockRecipes];
}

// PUBLIC_INTERFACE
export async function getRecipeById(id) {
  /** Returns a single recipe by id after a small delay */
  await sleep(200);
  return mockRecipes.find((r) => String(r.id) === String(id)) || null;
}

// Example for future backend integration using API_BASE_URL
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";
