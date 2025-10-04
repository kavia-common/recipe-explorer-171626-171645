const FAVORITES_KEY = "recipe-favorites";

/**
 * PUBLIC_INTERFACE
 * loadFavorites reads favorites from localStorage.
 */
export function loadFavorites() {
  /** Safely parse favorites array */
  try {
    const raw = window.localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * PUBLIC_INTERFACE
 * saveFavorites writes favorites to localStorage.
 */
export function saveFavorites(ids) {
  /** Persist favorites to localStorage */
  try {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  } catch {
    // ignore quota or privacy errors
  }
}
