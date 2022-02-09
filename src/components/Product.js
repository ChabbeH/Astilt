import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(autofill, 1fr);
  width: 20%;
  margin: auto;
  padding: 1%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  border-radius: 25px;
`;

const InfoContainer = styled.div`
  flex: 1;
  align-self: center;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 20vw;
  width: 100%;
`;

const ProductTitle = styled.h1`
  font-weight: 100;
  font-size: 14px;
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 12px;
`;

export const Product = ({ item }) => {
  return (
    <ProductCardWrapper>
      <Container>
        <ImageWrapper>
          <Image src={item.image} />
        </ImageWrapper>
        <InfoContainer>
          <ProductTitle>{item.text}</ProductTitle>
          <Price>{item.price}</Price>
        </InfoContainer>
      </Container>
    </ProductCardWrapper>
  );
};

export default Product;
