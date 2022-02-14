import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

function IntroCard({ image, text }) {
  return (
    <IntroCardWrapper>
      <img src={image} alt="" />
      <p>{text}</p>
    </IntroCardWrapper>
  );
}

export const IntroCardWrapper = styled.div`
  width: 100%;
  display: block;
  font-size: 20px;
  text-align: center;
  img {
    width: 80%;
  }
  ${mobile({ fontSize: "12px" })}
`;

export default IntroCard;
