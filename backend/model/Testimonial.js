const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  author: String,
  content: String,
  position: String,
  company: String,
  imageUrl: String,
});

module.exports = mongoose.model("Testimonial", TestimonialSchema);
