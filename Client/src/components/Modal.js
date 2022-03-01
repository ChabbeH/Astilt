import { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import CartContext from "../context/cart/CartContext";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #4f4f4ff2;
  margin-top: -200px;
  padding-bottom: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 700px;
  width: 80%;
  background-color: white;
  margin-top: 200px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 300px;
  object-fit: contain;
  ${mobile({ width: "150px" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  align-self: center;
  padding: 10px;
  ${mobile({ fontSize: "1rem" })}
`;

const TitleBtnWrapper = styled.div`
  position: absolute;
  margin-top: 0.4rem;
  padding: 1%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TitleCloseBtn = styled.button``;

const ProductTitle = styled.h1`
  font-weight: 100;
  font-size: 30px;
  ${mobile({ fontSize: "14px" })}
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 24px;
  ${mobile({ fontSize: "10px" })}
`;

const Condition = styled.p`
  font-weight: 100;
  font-size: 24px;
  ${mobile({ fontSize: "10px" })}
`;

const FilterContainer = styled.div`
  margin: 30px 0.5rem;
  display: flex;
  justify-content: space-between;
  ${mobile({ margin: "1.2rem 0.1rem" })}
`;

const Filter = styled.div`
  align-items: center;
`;

const FilterSize = styled.select`
  padding: 0.6rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  ${mobile({ justifyContent: "left" })}
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

function Modal({ setOpenModal, product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <ModalContainer>
      <Wrapper>
        <TitleBtnWrapper>
          <TitleCloseBtn
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </TitleCloseBtn>
        </TitleBtnWrapper>
        <ImageContainer>
          <Image src={product?.image} alt="" />
        </ImageContainer>
        <InfoContainer>
          <ProductTitle>{product?.text}</ProductTitle>
          <Price>{product?.price}</Price>
          <Condition>{product?.condition}</Condition>
          <FilterContainer>
            <Filter>
              <FilterSize>
                {" "}
                {product?.size?.map((item) => (
                  <FilterSizeOption>{item}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          {/*  <AddContainer>
            <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
          </AddContainer> */}
        </InfoContainer>
      </Wrapper>
    </ModalContainer>
  );
}

export default Modal;
