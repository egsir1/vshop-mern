// import React, { useEffect, useState } from "react";
// import products from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import axios from "axios";

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  console.log(
    "🚀 ~ file: HomeScreen.jsx:10 ~ HomeScreen ~ products:",
    products
  );
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data.data);
  //     console.log(data);
  //   };

  //   fetchProducts();
  // }, []);
  // console.log("products:::", products);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.data.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
