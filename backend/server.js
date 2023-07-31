import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import router from "./router.js";

const app = express();

//////// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

dotenv.config();

const port = process.env.PORT || 8001;

connectDb(); //connect db

///// routing

app.use("/api", router);

app.listen(port, function () {
  console.log(`The server is running successfully on port: ${port}`);
});
