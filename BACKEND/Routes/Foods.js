const express = require("express");
const foodController = require("../Controller/food")

const router = express.Router();

router
  .post("/", foodController.createFood)
  .get("/", foodController.readFood)
  .get("/:id", foodController.readFoodId)
  .put("/:id", foodController.replaceFood)
  .patch("/:id", foodController.updateFood)
  .delete("/:id", foodController.deleteFood);

exports.routes = router;
