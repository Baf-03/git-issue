const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    full_name: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

const DoctorSchema = mongoose.model("doctor", schema);

module.exports = DoctorSchema;
