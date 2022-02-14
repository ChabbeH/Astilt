import styled from "styled-components";
import { useState } from "react";
import { mobile, tablet } from "../responsive";
import Modal from "./Modal";

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(autofill, 1fr);
  width: 25%;
  margin: 0.5rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  padding: 2%;
  box-shadow: #63707e 2px 4px 8px;
  ${mobile({ width: "100%" })}
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  ${tablet({ alignItems: "center" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  ${tablet({ alignSelf: "center" })}
`;

const ImageWrapper = styled.div`
  align-items: center;
  padding: 20px;
  ${mobile({ alignSelf: "center" })}
`;

const Image = styled.img`
  width: 100%;
  ${mobile({ maxWidth: "40vw" })}
`;

const ProductTitle = styled.h1`
  font-weight: 100;
  font-size: 14px;
  ${mobile({ fontSize: "10px" })}
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 12px;
  ${mobile({ fontSize: "8px" })};
`;

export const ClothesCard = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  return (
    <ProductCardWrapper>
      <Container
        onClick={() => {
          setOpenModal(true);
          setActiveProduct(item);
        }}
      >
        <ImageWrapper>
          <Image src={item?.image} />
        </ImageWrapper>
        <InfoContainer>
          <ProductTitle>{item?.text}</ProductTitle>
          <Price>{item?.price}</Price>
        </InfoContainer>
      </Container>
      {openModal && (
        <Modal product={activeProduct} setOpenModal={setOpenModal} />
      )}
    </ProductCardWrapper>
  );
};

export default ClothesCard;
