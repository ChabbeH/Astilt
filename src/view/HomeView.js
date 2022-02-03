import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import IntroCard from "../components/IntroCard";
import yeezybeluga from "../shared/images/shoes/Yeezy -  350 V2 - Beluga.png";
import jordan1 from "../shared/images/shoes/Jordan 1 - High -Black Metallic Gold.png";
import nikeairmax from "../shared/images/shoes/Nike - Air max 1-97 - Sean Wotherspoon.png";
import nikestussy from "../shared/images/shoes/Nike - Stussy -Air force 1 Low - Black.png";
import nikedunk from "../shared/images/shoes/OFF WHITE - Nike - Rubber dunk - UNC.png";
import nikeair90 from "../shared/images/shoes/OFF WHITE - Nike -Air max 90 - Black.png";
import yeezy450dark from "../shared/images/shoes/Yeezy - 450 - Dark slate.png";
import yeezy450white from "../shared/images/shoes/Yeezy - 450 - Cloud white.png";
import yeezyyellow from "../shared/images/shoes/Yeezy - 350 V2 - Semi Frozen Yellow.png";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1%;
  cursor: pointer;
`;

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr min-content;
  justify-self: stretch;
  grid-gap: 20px;
  width: 100%;
`;

export const HomeView = () => {
  const navigate = useNavigate();
  return (
    <ProductCardWrapper>
      <CardContainer
        onClick={() => {
          navigate("/AppearelDetailPage");
        }}
      >
        <IntroCard image={yeezybeluga} text="Yeezy -  350 V2 - Beluga" />
      </CardContainer>

      <CardContainer
        onClick={() => {
          navigate("/AppearelDetailPage");
        }}
      >
        <ProductCard
          image={jordan1}
          text="Jordan 1 - High -Black Metallic Gold"
        />
        <ProductCard
          image={nikeairmax}
          text="Nike - Air max 1-97 - Sean Wotherspoon"
        />
      </CardContainer>
      <CardContainer
        onClick={() => {
          navigate("/AppearelDetailPage");
        }}
      >
        <ProductCard
          image={nikestussy}
          text="Nike - Stussy -Air force 1 Low - Black"
        />
        <ProductCard
          image={nikedunk}
          text="OFF WHITE - Nike - Rubber dunk - UNC"
        />
      </CardContainer>
      <CardContainer
        onClick={() => {
          navigate("/AppearelDetailPage");
        }}
      >
        <ProductCard
          image={nikeair90}
          text="OFF WHITE - Nike -Air max 90 - Black"
        />
        <ProductCard image={yeezy450dark} text="Yeezy - 450 - Dark slate" />
      </CardContainer>
      <CardContainer
        onClick={() => {
          navigate("/AppearelDetailPage");
        }}
      >
        <ProductCard image={yeezy450white} text="Yeezy - 450 - Cloud white" />
        <ProductCard
          image={yeezyyellow}
          text="Yeezy - 350 V2 - Semi Frozen Yellow"
        />
      </CardContainer>
    </ProductCardWrapper>
  );
};
