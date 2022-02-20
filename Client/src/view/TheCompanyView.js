import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const ContainerText = styled.p`
  line-height: 24px;
`;

export const TheCompanyView = () => {
  return (
    <Container>
      <h1>About Us </h1>
      <ContainerText>
        {" "}
        Established in 2020, TILT operates on two planes - a multifunctional
        lifestyle brand for men and women as well as a progressive retail
        establishment. We push the boundaries to deliver customers a completely
        unique experience. We offer an array of premium products, ranging from
        our own in-house label to a curated selection of multi-brand apparel and
        footwear. TILT was founded by Alley & Simon, two friends that always
        have had a love for urban clothing and footwear. Born and raised in
        Hjällbo, Gothenburg, they have been friends since kinder garden and
        their appreciation for fashion grew during their teenage years.
        Conceptualizing TILT as an extension of themselves, Alley & Simon seeks
        to shift the current landscape of fashion, while operating under a
        personal philosophy of giving the consumer the perfect clothing and
        footwear experience.
      </ContainerText>
    </Container>
  );
};
export default TheCompanyView;
