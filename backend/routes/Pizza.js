var express = require("express");
var router = express.Router();
const pizzaData = require("../models/pizza.model");
const IngredientsData = require("../models/ingredient.model");
const api = require("./PizzaMethods");
/* GET users listing. */
router.get("/getData", api.PizzaData);

router.get("/getIngredients", async function (req, res, next) {
  const data = await IngredientsData.find();
  console.log(data);
  res.send(data);
});
module.exports = router;
