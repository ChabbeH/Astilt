import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  height: 100vh;
  ${mobile({
    alignItems: "flex-start",
    marginTop: "0.1rem",
  })}
`;

const ContainerText = styled.p`
  line-height: 24px;
  max-width: 80vw;
  margin-top: 4rem;
  ${mobile({ fontSize: "10px", lineHeight: "15px", marginTop: "2rem" })}
`;

const Title = styled.h1`
  ${mobile({ fontSize: "14px", lineHeight: "21px" })}
`;

export const ContactUs = () => {
  return (
    <Container>
      <ContainerText>
        <Title>Contact us</Title>
        Feel free to contact us by sending a mail. We are happy to answer any
        questions you may have by email at info@astilt.com. We will respond
        every email within 48 hours, Monday to Friday.
      </ContainerText>
    </Container>
  );
};
