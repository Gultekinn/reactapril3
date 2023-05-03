import React, { useState } from "react";
import List from "./List";

function Content() {
  const [bestSeller, setBestSeller] = useState();

  const products = [
    { id: 1, name: "Product 1", price: 10, model: "Model 1", brand: "Brand 1" },
    { id: 2, name: "Product 2", price: 20, model: "Model 2", brand: "Brand 2" },
    { id: 3, name: "Product 3", price: 30, model: "Model 3", brand: "Brand 3" },
    { id: 4, name: "Product 4", price: 40, model: "Model 4", brand: "Brand 4" },
    { id: 5, name: "Product 5", price: 50, model: "Model 5", brand: "Brand 5" },
  ];

  const Click = (id) => {
    setBestSeller(id);
  };

  return (
    <main>
      <h1>Products</h1>
      <List
        products={products}
        onProductClick={Click}
        bestSeller={bestSeller}
      />
    </main>
  );
}

export default Content;
