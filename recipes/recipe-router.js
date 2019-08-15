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

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  Recipes.updateRecipe(changes, id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not update the  recipe in the db" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.deleteRecipe(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not delete recipe from the db" });
    });
});

module.exports = router;
