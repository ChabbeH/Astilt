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
  font-size: 22px;
  text-align: center;
  font-family: Neuropolitical;
  img {
    width: 80%;
  }
`;

export default IntroCard;
