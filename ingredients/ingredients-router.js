const express = require("express");

const Ingredients = require("./ingredients-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Ingredients.getIngredients()
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add ingredient to db" });
    });
});

router.post("/", (req, res) => {
  const ingredient = req.body;
  Ingredients.addIngredient(ingredient)
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add ingredient to db" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Ingredients.updateIngredients(changes, id)
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not update ingredient in db" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Ingredients.deleteIngredient(id)
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not delete ingredient from db" });
    });
});

module.exports = router;
