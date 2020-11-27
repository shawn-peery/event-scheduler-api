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
  Event.findById(req.params.id, function (err, event) {
    if (err) {
      res.status(400).json(err);
      return;
    }

    res.status(200).json(event);
  });
};

exports.update = (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    // Somehow Object.keys/entires and logging event object shows completely different properties
    // Using JSON Parse to get accurate depection of event object
    const eventJSON = JSON.parse(JSON.stringify(event));

    for (let key of Object.keys(eventJSON)) {
      if (key === "_id" || key === "__v") {
        continue;
      }

      event[key] = req.body[key];
    }

    res.status(200).json(event);

    event.save();
  });
};

exports.del = (req, res) => {};
