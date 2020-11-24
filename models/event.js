module.exports = function createModel(mongoose) {
  const eventSchema = new mongoose.Schema({
    name: String,
    desecription: String,
    date: Date,
    type: String,
  });

  mongoose.model("Event", eventSchema);
};
