const mongoose = require("mongoose");
const Event = mongoose.model("Event");

exports.create = (req, res) => {
  Event.create(req.body)
    .then((response) => {
      res.status(200).send("Success!");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.readAll = (req, res) => {
  Event.find({})
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.readOne = (req, res) => {
  Event.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.update = (req, res) => {};

exports.del = (req, res) => {};
