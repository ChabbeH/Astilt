import { useState } from "react";
import Modal from "./Modal";
import { homeViewProducts } from "../data";
import ProductCard from "../components/ProductCard";
import IntroCard from "../components/IntroCard";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 1%;
  width: 100%;

  cursor: pointer;
`;

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr min-content;
  justify-self: stretch;
  grid-gap: 10px;
  width: 100%;
`;

export const ProductWrapper = styled.div`
  max-width: 40%;
`;

export const HomeViewComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

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
                  <IntroCard image={product?.image} text={product?.text} />
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
