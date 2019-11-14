const db = require("../data/db-config.js");

module.exports = {
  getIngredients,
  addIngredient,
  updateIngredients,
  deleteIngredient
};

function getIngredients() {
  return db("ingredients");
}

function addIngredient(ingredient) {
  return db("ingredients").insert(ingredient, "id");
}

function updateIngredients(changes, id) {
  return db("ingredients")
    .update(changes)
    .where({ id });
}

function deleteIngredient(id) {
  return db("ingredients")
    .del()
    .where({ id });
}
