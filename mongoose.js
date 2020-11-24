const DB_USER_PASS = process.env.DB_USER_PASS;
const ATLAS_CONNECTION = process.env.ATLAS_CONNECTION.replace(
  "<password>",
  DB_USER_PASS
);

const mongoose = require("mongoose");
mongoose.connect(ATLAS_CONNECTION, {
  useNewUrlParser: true,
});

module.exports = mongoose;
