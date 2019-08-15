const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get all recipes" });
    });
});

router.post("/", (req, res) => {
  const newRecipe = req.body;
  Recipes.addRecipe(newRecipe)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add recipe to the db" });
    });
});

router.put();

router.delete();

module.exports = router;
