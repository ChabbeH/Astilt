import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { homeViewProducts } from "../data";

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
  flex-wrap: wrap;
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

export const ProductWrapper = styled.div`
  max-width: 50%;
`;

export const HomeViewComponent = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  console.log("data", homeViewProducts);

  return (
    <ProductCardWrapper>
      <CardContainer>
        {homeViewProducts &&
          homeViewProducts.map((product, i) => (
            <>
              {i === 0 ? (
                <CardContainer
                  onClick={() => {
                    setOpenModal(true);
                    setActiveProduct(product);
                  }}
                >
                  <IntroCard image={product.image} text={product.text} />
                </CardContainer>
              ) : (
                <ProductWrapper
                  onClick={() => {
                    setOpenModal(true);
                    setActiveProduct(product);
                  }}
                >
                  <ProductCard image={product?.image} text={product?.text} />
                </ProductWrapper>
              )}
            </>
          ))}
      </CardContainer>

      {openModal && (
        <Modal product={activeProduct} setOpenModal={setOpenModal} />
      )}
    </ProductCardWrapper>
  );
};

export default HomeViewComponent;
