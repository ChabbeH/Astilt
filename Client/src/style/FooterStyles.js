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
  ${mobile({ textAlign: "center", marginBottom: "3rem" })}
`;

export const FooterMain = styled.div`
  display: flex;
  margin-bottom: 4rem;
  ${mobile({ marginBottom: "2rem" })}
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
  justify-content: space-around;
  ${mobile({
    fontSize: "0.8rem",
    flexDirection: "column",
    justifyContent: "center",
  })}
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ marginBottom: "1rem" })}
`;

export const FooterSocial = styled.a`
  font-size: 34px;
  margin-left: 1rem;
  color: white;
  ${mobile({ marginBottom: "1rem", marginRight: "0.8rem", marginLeft: "1rem" })}

  &:hover {
    color: red;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
