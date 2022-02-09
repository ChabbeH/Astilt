import React from "react";
import styled from "styled-components";

function ProductCard({ image, text }) {
  return (
    <CardImgWrapper>
      <img src={image} alt="" />
      <p>{text}</p>
    </CardImgWrapper>
  );
}

export const CardImgWrapper = styled.div`
  width: 100%;
  display: block;
  font-size: 20px;
  text-align: center;
  font-family: Neuropolitical;
  img {
    width: 80%;
  }
`;

export default ProductCard;
