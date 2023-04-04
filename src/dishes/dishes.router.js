const express = require("express");
const router = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/methodNotAllowed");
const dishesController = require("./dishes.controller");
const ordersRouter = require("../orders/orders.router");
// TODO: Implement the /dishes routes needed to make the tests pass

router.use("/:dishId/orders", dishesController.dishExists, ordersRouter);

router
  .route("/:dishId")
  .get(dishesController.read)
  .put(dishesController.update)
  .all(methodNotAllowed);

router
  .route("/")
  .get(dishesController.list)
  .post(dishesController.create)
  .all(methodNotAllowed);

module.exports = router;
