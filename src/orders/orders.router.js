const express = require("express")
const router = require("express").Router({mergeParams: true});

const methodNotAllowed = require("../errors/methodNotAllowed")
const ordersController = require("./orders.controller");

// TODO: Implement the /orders routes needed to make the tests pass

router.route("/:orderId")
    .get(ordersController.read)
    .put(ordersController.update)
    .delete(ordersController.delete)
    .all(methodNotAllowed);


router.route("/")
    .get(ordersController.list)
    .post(ordersController.create)
    .all(methodNotAllowed);






module.exports = router;
