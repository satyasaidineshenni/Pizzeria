const mongoose = require("mongoose");
const pizzaSchema = mongoose.Schema(
  {
    id: String,
    type: String,
    price: Number,
    name: String,
    image: String,
    description: String,
    ingredients: Array,
    topping: Array,
  },
  {
    collection: "Pizza",
  }
);
const Pizza = new mongoose.model("Pizza", pizzaSchema);
module.exports = Pizza;
