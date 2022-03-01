import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useLocation } from "react-router-dom";

const SneakerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 4rem;
  ${mobile({ marginTop: "0.1rem" })}
  ${tablet({ marginTop: "0.1rem" })}
`;

const SneakersWrapper = styled.div`
  display: flex;
  padding: 1rem;
  max-width: 80%;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-right: 7rem;
  margin-top: 4rem;
  align-self: flex-start;
  ${mobile({ marginTop: "1rem" })}
  ${tablet({ marginTop: "1rem" })}
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100vh;
`;
const SneakerInfoContainer = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 1rem;
  ${mobile({ marginTop: "1rem" })}
  ${tablet({ marginTop: "1rem" })}
`;
const ProductTitle = styled.h1`
  line-height: 48px;
  ${mobile({ fontSize: "14px", lineHeight: "21px" })}
`;
const Price = styled.p`
  line-height: 48px;
  ${mobile({ fontSize: "10px", lineHeight: "15px" })}
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
  margin-bottom: 1rem;

  &:hover {
    background-color: #f8f4f4;
  }
  ${mobile({ fontSize: "8px" })}
`;

const ProductDesc = styled.p`
  margin-bottom: 10rem;
  font-size: 14px;
  line-height: 21px;
  ${mobile({ fontSize: "10px", lineHeight: "15px" })}
`;

const PriceTitle = styled.h1`
  ${mobile({ fontSize: "14px", lineHeight: "21px" })}
`;

const ProductDescTitle = styled.h1`
  ${mobile({ fontSize: "14px", lineHeight: "21px" })}
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
          <PriceTitle>Price</PriceTitle>
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
            {/*  <Button onClick={() => addToCart(location.state)}>
              ADD TO CART
            </Button> */}
          </AddContainer>
          <ProductDesc>
            <ProductDescTitle>Product Description</ProductDescTitle>
            {location.state.desc}
          </ProductDesc>
        </SneakerInfoContainer>
      </SneakersWrapper>
    </SneakerContainer>
  );
};

export default SneakerDetailPage;
