import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
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

export const TheCompanyView = () => {
  return (
    <Container>
      <ContainerText>
        <Title>About Us</Title> Established in 2020, TILT operates on two planes
        - a multifunctional lifestyle brand for men and women as well as a
        progressive retail establishment. We push the boundaries to deliver
        customers a completely unique experience. We offer an array of premium
        products, ranging from our own in-house label to a curated selection of
        multi-brand apparel and footwear. TILT was founded by Alley & Simon, two
        friends that always have had a love for urban clothing and footwear.
        Born and raised in Hjällbo, Gothenburg, they have been friends since
        kinder garden and their appreciation for fashion grew during their
        teenage years. Conceptualizing TILT as an extension of themselves, Alley
        & Simon seeks to shift the current landscape of fashion, while operating
        under a personal philosophy of giving the consumer the perfect clothing
        and footwear experience.
      </ContainerText>
    </Container>
  );
};
export default TheCompanyView;
