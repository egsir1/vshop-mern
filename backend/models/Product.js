import assert from "assert";
import ProductModel from "../schema/productModel.js";
import { shapeIntoMongooseObjectId } from "../config/config.js";

class Product {
  constructor() {}

  // add new product

  async add_new_product_data(data) {
    try {
      const new_product = new ProductModel(data);
      const result = await new_product.save();

      assert.ok(result, "att: product creation failed!");
      return result;
    } catch (error) {
      throw error;
    }
  }

  //get all products
  async get_all_products_data() {
    try {
      const all_products = await ProductModel.find();
      console.log(
        "🚀 ~ file: Product.js:26 ~ Product ~ get_all_products_data ~ all_products:",
        all_products
      );
      return all_products;
    } catch (error) {
      throw error;
    }
  }

  //get single product

  async get_single_product(id) {
    try {
      id = shapeIntoMongooseObjectId(id);

      const result = await ProductModel.findById({ _id: id });
      console.log(
        "🚀 ~ file: Product.js:43 ~ Product ~ get_single_product ~ result:",
        result
      );
      assert.ok(result, "att: something went wrong!");
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default Product;
