import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1%;
`;
export const CardImgWrapper = styled.div`
  width: 100%;
  display: block;
  font-size: small;
  text-align: center;
  font-family: sans-serif;
  img {
    width: 80%;
  }
`;
export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr min-content;
  justify-self: stretch;
  grid-gap: 20px;
  width: 100%;
`;
