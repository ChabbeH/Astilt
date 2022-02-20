import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import styled from "styled-components";
import { mobile } from "../responsive";

import { useLocation } from "react-router-dom";

const SneakerContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

const SneakersWrapper = styled.div`
  display: flex;
  padding: 1rem;
  max-width: 80%;

  ${mobile({ flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-right: 7rem;
  margin-top: 4rem;
  align-self: flex-start;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100vh;
`;
const SneakerInfoContainer = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 1rem;
`;
const ProductTitle = styled.h1`
  line-height: 48px;
`;
const Price = styled.p`
  line-height: 48px;
`;
const Condition = styled.p``;
const FilterContainer = styled.div``;
const Filter = styled.div``;
const FilterSize = styled.select`
  padding: 0.6rem;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  margin-top: 2rem;
`;
const Button = styled.button`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 8px !important;
  background-color: white;
  cursor: pointer;
  font-family: neuropolitical;
  font-size: 12px;
  display: inline-block;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #f8f4f4;
  }
  ${mobile({ fontSize: "8px" })}
`;

const ProductDesc = styled.p`
  margin-bottom: 10rem;
  font-size: 14px;
  line-height: 21px;
`;

const SneakerDetailPage = () => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);

  return (
    <SneakerContainer>
      <SneakersWrapper>
        <ImageContainer>
          <Image src={location.state.image} />
        </ImageContainer>

        <SneakerInfoContainer>
          <ProductTitle>{location.state.text}</ProductTitle>
          <h1>Price</h1>
          <Price>{location.state.price}</Price>
          <Condition>{location.state.condition}</Condition>

          <FilterContainer>
            <Filter>
              <FilterSize>
                <FilterSizeOption>{location.state.size[0]}</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button onClick={() => addToCart(location.state)}>
              ADD TO CART
            </Button>
          </AddContainer>
          <ProductDesc>
            <h1>Product Description</h1>
            {location.state.desc}
          </ProductDesc>
        </SneakerInfoContainer>
      </SneakersWrapper>
    </SneakerContainer>
  );
};

export default SneakerDetailPage;
