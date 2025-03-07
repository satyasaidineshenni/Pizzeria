const mongoose = require("mongoose");
const IngredientSchema = mongoose.Schema(
  {
    id: Number,
    tname: String,
    price: Number,
    image: String,
  },
  {
    collection: "Ingredients",
  }
);
const Ingredients = new mongoose.model("Ingredients", IngredientSchema);
module.exports = Ingredients;
