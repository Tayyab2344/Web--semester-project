const express = require("express");
const TeamMember = require("../model/TeamMember");
const Testimonial = require("../model/Testimonial");

const router = express.Router();

// Get all testimonials
router.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonisl.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new testimonial
router.post("/testimonials", async (req, res) => {
  const testimonial = new Testimonial(req.body);
  try {
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all team members
router.get("/team", async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new team member
router.post("/team", async (req, res) => {
  const teamMember = new TeamMember(req.body);
  try {
    const newTeamMember = await teamMember.save();
    res.status(201).json(newTeamMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
