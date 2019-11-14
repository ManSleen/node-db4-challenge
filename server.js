const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./recipes/recipe-router.js");
const IngredientsRouter = require("./ingredients/ingredients-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientsRouter);

module.exports = server;
