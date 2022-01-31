import React from "react";
import ProductCard from "../components/ProductCard";
import IntroCard from "../components/IntroCard";
import test2 from "../shared/images/products/test2.png";
import testar4 from "../shared/images/products/testar4.png";
import styled from "styled-components";

export const HomeView = () => {
  return (
    <ProductCardWrapper>
      <CardContainer>
        <IntroCard image={testar4} text="lalalala" />
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
      <CardContainer>
        <ProductCard image={test2} text="blablabla" />
        <ProductCard image={test2} text="blablabla" />
      </CardContainer>
    </ProductCardWrapper>
  );
};
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1%;
`;

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr min-content;
  justify-self: stretch;
  grid-gap: 20px;
  width: 100%;
`;
