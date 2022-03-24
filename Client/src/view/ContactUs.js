import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import ContactForm from "../components/ContactForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  height: 100vh;
  max-width: 100%;

  ${mobile({
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  })}
`;

const ContainerText = styled.p`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  max-width: 40vw;
  margin-top: 4rem;
  margin-right: 1rem auto;
  ${mobile({
    fontSize: "10px",
    lineHeight: "15px",
    marginTop: "2rem",
  })}
`;

const Title = styled.h1`
  ${mobile({ fontSize: "14px", lineHeight: "21px" })}
`;

const ContactFormWrapper = styled.div`
  margin-left: 5rem;
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
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </Container>
  );
};
