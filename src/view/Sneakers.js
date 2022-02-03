import React from "react";
import ProductDetailPage from "../components/ProductDetailPage";
import ShoppingCart from "../components/ShoppingCart";
import Products from "../components/Products";

export const Sneakers = () => {
  return (
    <div>
      <ShoppingCart />
      <ProductDetailPage />
      <Products />
    </div>
  );
};
