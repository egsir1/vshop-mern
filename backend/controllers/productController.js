import Product from "../models/Product.js";

// add new product
const add_product = async (req, res) => {
  try {
    console.log(" POST=> contr/add_product");
    const data = req.body;
    const product = new Product();
    const result = await product.add_new_product_data(data);
    console.log(
      "🚀 ~ file: productController.js:9 ~ constadd_product= ~ result:",
      result
    );

    res.json({ state: "success", data: result });
  } catch (error) {
    {
      console.log(`Errorr: ${err}`);
      res.json({ state: "fail", message: err.message });
    }
  }
};

// get all products

const get_all_products = async (req, res) => {
  try {
    console.log("GET=> contr/ getAllProducts");
    const product = new Product();
    const result = await product.get_all_products_data();
    console.log(
      "🚀 ~ file: productController.js:31 ~ const get_all_products= ~ result:",
      result
    );

    res.json({ state: "success", data: result });
  } catch (error) {
    {
      console.log(`Errorr: ${err}`);
      res.json({ state: "fail", message: err.message });
    }
  }
};

// get single product

const get_single_product = async (req, res) => {
  try {
    console.log("GET=> contr/get_single_product");
    const product = new Product();

    const id = req.params.id;
    console.log(
      "🚀 ~ file: productController.js:53 ~ constget_single_product= ~ id:",
      id
    );
    const result = await product.get_single_product(id);
    console.log(
      "🚀 ~ file: productController.js:58 ~ constget_single_product= ~ result:",
      result
    );

    res.json({ state: "success", data: result });
  } catch (error) {
    {
      console.log(`Errorr: ${err}`);
      res.json({ state: "fail", message: err.message });
    }
  }
};

export { add_product, get_all_products, get_single_product };
