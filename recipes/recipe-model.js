const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  addRecipe,
  deleteRecipe,
  updateRecipe,
  getShoppingList,
  getInstructions
};

//getRecipes should return a list of all recipes in the database.
function getRecipes() {
  return db("recipes");
}

function addRecipe(newRecipe) {
  return db("recipes").insert(newRecipe, "id");
}

function updateRecipe(changes, id) {
  return db("recipes")
    .update(changes)
    .where({ id });
}

function deleteRecipe(id) {
  return db("recipes")
    .del()
    .where({ id });
}

// getShoppingList should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
  return db("recipes as r")
    .select("r.name", "i.name", "ri.quantity")
    .innerJoin("recipes_ingredients as ri", "r.id", "=", "ri.recipe_id")
    .innerJoin("ingredients as i", "i.id", "=", "ri.ingredient_id")
    .where({ "r.id": id });
}

//getInstructions should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
  return db("recipes")
    .select("steps")
    .where({ id });
}
