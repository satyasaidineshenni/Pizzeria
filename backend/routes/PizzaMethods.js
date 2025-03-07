const pizzaData = require("../models/pizza.model");
const IngredientsData = require("../models/ingredient.model");
async function PizzaData(req, res, next) {
  const data = await pizzaData.find();
  console.log(data);
  res.send(data);
}

module.exports = { PizzaData };
