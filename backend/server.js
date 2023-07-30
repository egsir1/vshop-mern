import express from "express";

import dotenv from "dotenv";
import products from "./data/products.js";
import connectDb from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 8001;

connectDb(); //connect db
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, function () {
  console.log(`The server is running successfully on port: ${port}`);
});