import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(autofill, 1fr);
  width: 100%;
  margin: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 2%;
  box-shadow: #63707e 2px 4px 8px;
  max-width: 15vw;
  cursor: pointer;
  ${mobile({ maxWidth: "7rem" })}
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const ProductTitle = styled.h1`
  font-weight: 100;
  font-size: 12px;
  ${mobile({ fontSize: "8px" })}
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 10px;
  ${mobile({ fontSize: "8px" })}
`;

export const Product = ({ item }) => {
  const navigate = useNavigate();

  return (
    <ProductCardWrapper>
      <Container
        onClick={() => {
          navigate("/Sneakers/Detail", { state: item });
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
    </ProductCardWrapper>
  );
};

export default Product;
