import React from "react";
import styled from "styled-components";

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
  font-size: small;
  text-align: center;
  font-family: sans-serif;
  img {
    width: 80%;
  }
`;

export default IntroCard;
