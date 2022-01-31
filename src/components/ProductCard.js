import React from "react";
import { CardImgWrapper } from "../style/CardStyles";

function ProductCard({ image, text }) {
  return (
    <CardImgWrapper>
      <img src={image} alt="" />
      <p>{text}</p>
    </CardImgWrapper>
  );
}

export default ProductCard;
