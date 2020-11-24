const express = require("express");
const router = express.Router();

const {
  create,
  readAll,
  readOne,
  update,
  del,
} = require("../../controllers/events.controller");

// CREATE
router.post("/", create);

// READ ALL
router.get("/", readAll);

// READ ONE
router.get("/:id", readOne);

// UPDATE
router.put("/:id", update);

// DELETE
router.delete("/:id", del);

module.exports = router;
