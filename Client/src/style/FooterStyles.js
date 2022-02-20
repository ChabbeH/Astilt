import styled from "styled-components";
import { mobile } from "../responsive";

export const FooterContainer = styled.div`
  background-color: #141414;
  color: #ffffff;
  padding: 1rem 1rem;
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  ${mobile({ marginTop: "2rem" })}
`;

export const NewsLetterWrapper = styled.div`
  margin-top: 1rem;
  ${mobile({ textAlign: "center" })}
`;

export const FooterMain = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

export const FooterColumn = styled.div`
  flex-basis: 200px;
  flex-grow: 1;
  text-align: center;
`;

export const FooterHeading = styled.h1`
  margin-bottom: 1rem;
  ${mobile({ fontSize: "1rem" })}
`;

export const FooterLink = styled.a`
  display: block;
  width: max-content;
  padding: 5px 10px;
  margin: 0 auto;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: red;
  }
  ${mobile({ fontSize: "0.8rem" })}
`;

export const FooterBottom = styled.div`
  display: flex;
  ${mobile({ fontSize: "0.8rem" })}
`;

export const Copyright = styled.div`
  margin-right: auto;
  margin-left: 2rem;
`;

export const FooterSocial = styled.a`
  font-size: 34px;
  margin-left: 1rem;
  color: white;

  &:hover {
    color: red;
  }
`;
