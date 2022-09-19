///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const RecipeSchema = new mongoose.Schema({
  name: String,
  instructions: String,
  image: String,
},{timestamps: true});

const Recipe = mongoose.model("Recipes", RecipeSchema);

module.exports = Recipe
