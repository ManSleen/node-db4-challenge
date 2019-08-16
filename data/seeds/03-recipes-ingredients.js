exports.seed = function(knex) {

  return knex("table_name").insert([
    { "recipe_id": 1, "ingredient_id": 1, quantity: 1 }
    { "recipe_id": 1, "ingredient_id": 2, quantity: 1 }
    { "recipe_id": 1, "ingredient_id": 3, quantity: 1 }
    { "recipe_id": 2, "ingredient_id": 1, quantity: 1 }
    { "recipe_id": 2, "ingredient_id": 2, quantity: 1 }
    { "recipe_id": 2, "ingredient_id": 3, quantity: 1 }
    { "recipe_id": 3, "ingredient_id": 1, quantity: 1 }
    { "recipe_id": 3, "ingredient_id": 2, quantity: 1 }
    { "recipe_id": 3, "ingredient_id": 3, quantity: 1 }
    { "recipe_id": 4, "ingredient_id": 1, quantity: 1 }
    { "recipe_id": 4, "ingredient_id": 2, quantity: 1 }
    { "recipe_id": 4, "ingredient_id": 3, quantity: 1 }
    { "recipe_id": 5, "ingredient_id": 1, quantity: 1 }
    { "recipe_id": 5, "ingredient_id": 2, quantity: 1 }
    { "recipe_id": 5, "ingredient_id": 3, quantity: 1 }
    { "recipe_id": 5, "ingredient_id": 4, quantity: 1 }
    { "recipe_id": 6, "ingredient_id": 1, quantity: 1 }
    { "recipe_id": 6, "ingredient_id": 2, quantity: 1 }
    { "recipe_id": 6, "ingredient_id": 3, quantity: 1 }
    { "recipe_id": 6, "ingredient_id": 4, quantity: 1 }
    { "recipe_id": 6, "ingredient_id": 5, quantity: 1 }
    { "recipe_id": 6, "ingredient_id": 6, quantity: 1 }
  ]);
};
