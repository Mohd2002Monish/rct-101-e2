import React, { useState, useEffect } from "react";
import Product from "./Product";

function Products() {
  // TODO: Remove below const and instead import them from chakra

  // const Flex = styled.flex`
  //   display: flex;
  // `;
  // const Grid = styled.grid`
  //   display: grid;
  //   grid-template-columns: repeat(1fr, 200px);
  //   grid-template-row: repeat(1fr, 200px);
  // `;

  return (
    <div>
      {/*  AddProduct */}
      <div style={{ border: "1px solid green", display: "flex" }}>
        <Product />
      </div>
      {/* Pagination */}
    </div>
  );
}

export default Products;
