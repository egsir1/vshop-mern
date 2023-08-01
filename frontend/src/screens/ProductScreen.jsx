// import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import axios from "axios";

const ProductScreen = () => {
  // const [product, setProduct] = useState({});

  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(productId);
  console.log(
    "🚀 ~ file: ProductScreen.jsx:14 ~ ProductScreen ~  data,:",
    product
  );

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const data = await axios.get(`/api/products/${productId}`);
  //     setProduct(data.data.data);
  //     console.log(
  //       "🚀 ~ file: ProductScreen.jsx:16 ~ fetchProduct ~ data:",
  //       data
  //     );
  //   };

  //   fetchProduct();
  // }, [productId]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.data.image} alt={product.data.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.data.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.data.rating}
                  text={`${product.data.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.data.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.data.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.data.countInStock > 0
                          ? "In Stock"
                          : "Out Of Stocks"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: "center" }}>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.data.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
