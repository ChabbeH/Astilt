import styled from "styled-components";
import { mobile } from "../responsive";

function ProductCard({ image, text }) {
  return (
    <CardImgWrapper>
      <CardWrapper>
        <img src={image} alt="" />
      </CardWrapper>
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

const CardWrapper = styled.div`
  min-height: 100px;
`;

export default ProductCard;
