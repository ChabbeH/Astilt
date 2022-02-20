import styled from "styled-components";
import { mobile } from "../responsive";

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
  img {
    width: 80%;
  }
  ${mobile({ fontSize: "8px" })}
`;

export default ProductCard;
