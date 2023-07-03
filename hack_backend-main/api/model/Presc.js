const mongoose = require("mongoose");

const Presc = new mongoose.Schema({
  path: {
    type: String,
    // required: true,
  },
  originalName: {
    type: String,
    // required: true,
  },
  diseaseName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  file:{
    type: String,
  }
});

module.exports = mongoose.model("Presc", Presc);
