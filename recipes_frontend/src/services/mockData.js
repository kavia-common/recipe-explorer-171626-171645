const placeholder = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop";

/**
 * PUBLIC_INTERFACE
 * mockRecipes is a small dataset used by apiClient during development.
 */
export const mockRecipes = [
  {
    id: "1",
    title: "Classic Spaghetti Bolognese",
    image: placeholder,
    rating: 4.5,
    time: "45 min",
    difficulty: "Medium",
    cuisine: "Italian",
    tags: ["pasta", "beef", "comfort"],
    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Olive oil", "Salt", "Pepper"],
    steps: [
      "Cook spaghetti according to package instructions.",
      "Sauté onion and garlic in olive oil.",
      "Add ground beef and brown.",
      "Stir in tomato sauce and simmer.",
      "Season to taste and serve over spaghetti."
    ]
  },
  {
    id: "2",
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1604908554007-027f3c0f8f52?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
    time: "60 min",
    difficulty: "Hard",
    cuisine: "Indian",
    tags: ["chicken", "spicy", "curry"],
    ingredients: ["Chicken", "Yogurt", "Tomato puree", "Cream", "Spices", "Onion", "Garlic", "Ginger"],
    steps: [
      "Marinate chicken in yogurt and spices.",
      "Grill or sear chicken until charred.",
      "Prepare masala sauce with tomato and cream.",
      "Combine chicken with sauce and simmer.",
      "Serve with rice or naan."
    ]
  },
  {
    id: "3",
    title: "Avocado Toast Deluxe",
    image: "https://images.unsplash.com/photo-1542691457-cbe4df041eb5?q=80&w=1600&auto=format&fit=crop",
    rating: 4.2,
    time: "10 min",
    difficulty: "Easy",
    cuisine: "American",
    tags: ["breakfast", "veggie", "quick"],
    ingredients: ["Bread", "Avocado", "Lemon", "Salt", "Pepper", "Chili flakes"],
    steps: [
      "Toast the bread.",
      "Mash avocado with lemon, salt, and pepper.",
      "Spread on toast and top with chili flakes."
    ]
  },
  {
    id: "4",
    title: "Sushi Bowl",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    rating: 4.3,
    time: "30 min",
    difficulty: "Medium",
    cuisine: "Japanese",
    tags: ["rice", "fish", "fresh"],
    ingredients: ["Sushi rice", "Salmon", "Avocado", "Cucumber", "Soy sauce", "Sesame seeds"],
    steps: [
      "Cook sushi rice and season.",
      "Prepare toppings: slice salmon, avocado, and cucumber.",
      "Assemble bowl and drizzle soy sauce."
    ]
  },
  {
    id: "5",
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1543340713-2c5f3b64bc2b?q=80&w=1600&auto=format&fit=crop",
    rating: 4.6,
    time: "25 min",
    difficulty: "Easy",
    cuisine: "Mexican",
    tags: ["tacos", "beef", "street-food"],
    ingredients: ["Taco shells", "Ground beef", "Cheese", "Lettuce", "Tomato", "Salsa"],
    steps: [
      "Brown beef with spices.",
      "Warm taco shells.",
      "Assemble with toppings and serve."
    ]
  }
];
