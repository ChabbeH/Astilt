import styled from "styled-components";
import { mobile } from "../responsive";

const ModalContainer = styled.div`
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
  ${mobile({ flexDirection: "column" })}
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
`;
const InfoContainer = styled.div`
  flex: 1;
  align-self: center;
  padding: 10px;
`;

const TitleBtnWrapper = styled.div`
  position: absolute;
  right: 90px;
  margin-top: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TitleCloseBtn = styled.button``;

const ProductTitle = styled.h1`
  font-weight: 100;
  font-size: 40px;
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function Modal({ setOpenModal, product }) {
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
          <ProductTitle>{product.text}</ProductTitle>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterSize>
                {" "}
                {product.size.map((item) => (
                  <FilterSizeOption>{item}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </ModalContainer>
  );
}

export default Modal;
