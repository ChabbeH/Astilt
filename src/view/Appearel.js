import React from "react";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { Slider } from "../components/Slider";

export const Appearel = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};
