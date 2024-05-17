"use client";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <h3 key={item.id}>
          Name:{item.title}, Price: {item.price}
        </h3>
      ))}
    </div>
  );
};

export default ProductList;
