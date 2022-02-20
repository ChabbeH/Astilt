import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const ContainerText = styled.p`
  line-height: 24px;
`;

export const ContactUs = () => {
  return (
    <Container>
      <h1>Contact us</h1>
      <ContainerText>
        Feel free to contact us by sending a mail. We are happy to answer any
        questions you may have by email at info@astilt.com. We will respond
        every email within 48 hours, Monday to Friday.
      </ContainerText>
    </Container>
  );
};
