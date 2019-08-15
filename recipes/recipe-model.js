const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  addRecipe,
  deleteRecipe,
  updateRecipe
};

function addRecipe(newRecipe) {
  return db("recipes").insert(newRecipe, "id");
}

function updateRecipe(changes, id) {
  return db("recipes")
    .update(changes)
    .where({ id });
}

function deleteRecipe(recipe, id) {}

//getRecipes should return a list of all recipes in the database.
function getRecipes() {
  return db("recipes");
}

// getShoppingList should return a list of all ingredients and quantities for a given recipe
function getShoppingList() {
  return db("recipes");
}

//getInstructions should return a list of step by step instructions for preparing a recipe
function getInstructions() {}
