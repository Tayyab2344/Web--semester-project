require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const aboutRoutes = require("./routes/aboutRoutes");
const shopRoutes = require("./routes/shop");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_END_POINT)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/api/", (req, res) => {
  res.status(200).send("i am root route");
});
app.use("/api/about", aboutRoutes);
app.use("/api/shop", shopRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
