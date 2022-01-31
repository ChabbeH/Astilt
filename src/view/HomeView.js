import React from "react";
import ProductCard from "../components/ProductCard";
import test2 from "../shared/images/products/test2.png";
import { CardContainer, ProductCardWrapper } from "../style/CardStyles";

export const HomeView = () => {
  return (
    <ProductCardWrapper>
      <CardContainer>
        <ProductCard image={test2} text="blablabla" />
        <ProductCard image={test2} text="blablabla" />
      </CardContainer>
      <CardContainer>
        <ProductCard image={test2} text="blablabla" />
        <ProductCard image={test2} text="blablabla" />
      </CardContainer>
      <CardContainer>
        <ProductCard image={test2} text="blablabla" />
        <ProductCard image={test2} text="blablabla" />
      </CardContainer>
      <CardContainer>
        <ProductCard image={test2} text="blablabla" />
        <ProductCard image={test2} text="blablabla" />
      </CardContainer>
    </ProductCardWrapper>
  );
};
