# Recipe Explorer — React Frontend

A modern, responsive React app for browsing, searching, and saving recipes. This frontend uses a clean component structure, Ocean Professional theme, client-side routing, and a mock API so it runs without a backend.

## Features
- Ocean Professional theme (primary #2563EB, secondary #F59E0B)
- Routing: "/", "/favorites", "/recipe/:id"
- RecipesContext: search, filters, favorites (with localStorage persistence)
- Mock API with artificial latency
- Accessible controls: labeled inputs, aria-pressed on favorites, focus rings
- Responsive grid layout, subtle shadows, rounded corners
- Minimal dependencies: react-router-dom, prop-types

## Getting Started
- Install dependencies (handled automatically in CI). If running locally:
  - npm install
- Start the development server:
  - npm start
- Open http://localhost:3000 to preview.

No backend is required. The app uses mock data under src/services/mockData.js.

## Environment Variables
Create a .env file if needed based on .env.example.

- REACT_APP_API_BASE_URL: Optional. Reserved for future backend integration.

## Project Structure (key parts)
- src/theme: CSS variable theme and ThemeProvider
- src/router/AppRouter.jsx: route definitions
- src/state/RecipesContext.jsx: app state and favorites persistence
- src/components: reusable UI components
- src/pages: Home, Favorites, RecipeDetail
- src/services: mockData and apiClient with artificial delay

## Accessibility
- Descriptive labels, aria-pressed for favorite toggles
- Keyboard focus rings via CSS focus styles

## Scripts
- npm start: Run dev server
- npm test: Run tests
- npm run build: Build production bundle
