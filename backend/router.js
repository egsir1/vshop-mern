import express from "express";
import { signup } from "./controllers/UserController.js";
import {
  add_product,
  get_all_products,
  get_single_product,
} from "./controllers/productController.js";
const router = express.Router();

/************************
 *        REST API      *
 ***********************/

// create user
router.post("/signup", signup);

//create product

router.post("/products/create", add_product);
router.get("/products", get_all_products);
router.get("/products/:id", get_single_product);

export default router;
