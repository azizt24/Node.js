 
const express = require("express");
const router = express.Router();
const itemsController = require("../Controller/itemController")


router.get("/", itemsController.getAllItems)

router.get("/:id", itemsController.getItem)

router.post("/", itemsController.createItem)

router.put("/:id", itemsController.updateItem)

router.delete("/:id", itemsController.deleteItem);

module.exports = router;