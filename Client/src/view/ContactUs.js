import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  height: 100vh;
  max-width: 100%;
  margin-left: 2rem;

  ${mobile({
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  })}

  ${tablet({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
    marginRight: "2rem",
  })}
`;

const Title = styled.h1`
  ${mobile({ fontSize: "14px", lineHeight: "21px" })}
`;

const ContactFormWrapper = styled.div`
  margin-left: 5rem;

  ${mobile({
    marginBottom: "1rem",
  })}

  ${tablet({
    marginRight: "5rem",
  })}
`;

const SendWrapper = styled.div`
  font-size: large;
  margin-right: 2rem;
  margin-top: 10rem;
  color: green;

  ${mobile({
    marginRight: "5rem",
  })}
`;

export const ContactUs = () => {
  const [sent, setSent] = useState(false);

  return (
    <Container>
      <ContainerText>
        <Title>Contact us</Title>
        Feel free to contact us by sending a mail. We are happy to answer any
        questions you may have by email at info@astilt.com. We will respond
        every email within 48 hours, Monday to Friday.
      </ContainerText>
      <ContactFormWrapper>
        {sent ? (
          <SendWrapper>Mail has been successfully sent!</SendWrapper>
        ) : (
          <ContactForm setSent={setSent} />
        )}
      </ContactFormWrapper>
    </Container>
  );
};
