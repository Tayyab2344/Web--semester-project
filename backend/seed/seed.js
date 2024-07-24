require("dotenv").config();
const mongoose = require("mongoose");
const Shop = require("../model/Shop");


const DB_URI = process.env.MONGO_DB_END_POINT || "mongodb://localhost:27017/tayyabweb"


mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Data to be inserted
const products = [
  {
    name: "Nordic Chair",
    price: 50,
    imgUrl: "images/product-1.png",
  },
  {
    name: "Kruzo Aero Chair",
    price: 100,
    imgUrl: "images/product-2.png",
  },
  {
    name: "Ergonomic Chair",
    price: 130,
    imgUrl: "images/product-3.png",
  },
  {
    name: "Sofa Chair",
    price: 120,
    imgUrl: "images/sofa.png",
  },
  {
    name: "Couch Chair",
    price: 160,
    imgUrl: "images/couch.png",
  },
  {
    name: "Post 1",
    price: 190,
    imgUrl: "images/post-1.jpg",
  },  {
    name: "Post 2",
    price: 190,
    imgUrl: "images/post-2.jpg",
  },  {
    name: "Post 3",
    price: 190,
    imgUrl: "images/post-3.jpg",
  },{
    name: "Design  1",
    price: 190,
    imgUrl: "images/img-grid-1.jpg",
  },{
    name: "Design 2",
    price: 190,

    imgUrl: "images/img-grid-2.jpg",
  },
{
    name: "Design 3",
    price: 190,
    imgUrl: "images/img-grid-3.jpg",
  },
];

Shop.deleteMany({})
  .then(() => {
    console.log("Data deleted successfully");
  })
  .catch((err) => {
    console.error("Error deleting data:", err);
  });

Shop.insertMany(products)
  .then(() => {
    console.log("Data inserted successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting data:", err);
  });
