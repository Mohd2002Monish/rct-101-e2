import React, { useState, useEffect } from "react";
import axios from "axios";
const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:8080/products").then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    };
    fetchData();
  }, []);
  // TODO: Remove below const and instead import them from chakra
  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;

  return (
    <div>
      {data.map((user) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                width: "400px",
              }}
            >
              <div
                style={{
                  width: "400px",
                }}
              >
                <img src={user.imageSrc} alt="" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textTransform: "capitalize",
                  }}
                >
                  <p>{user.category}</p>
                  <p>{user.gender}</p>
                </div>
                <h2 style={{ textAlign: "center" }}>{user.title}</h2>
                <p style={{ textAlign: "center" }}>{user.price}/unit</p>
              </div>
            </div>
          </>
        );
      })}
      <Stack data-cy="product">
        <Image data-cy="product-image" />
        <Text data-cy="product-category"></Text>
        <Tag>
          <TagLabel data-cy="product-gender"></TagLabel>
        </Tag>
        <Heading data-cy="product-title"></Heading>
        <Box data-cy="product-price"></Box>
      </Stack>
    </div>
  );
};

export default Product;
