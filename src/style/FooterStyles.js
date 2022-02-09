import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #141414;
  color: #ffffff;
  padding: 1rem 1rem;
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const NewsLetterWrapper = styled.div`
  margin-top: 1rem;
  justify-content: space-around;
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
`;

export const FooterLink = styled.a`
  display: block;
  width: max-content;
  padding: 5px 10px;
  margin: 0 auto;
  color: #ffffff;
  text-decoration: none;
  curser: pointer;
  &:hover {
    color: #cccccc;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
`;

export const Copyright = styled.div`
  margin-right: auto;
`;

export const FooterSocial = styled.a`
  font-size: 34px;
  margin-left: 1rem;
  color: white;

  &:hover {
    color: #cccccc;
  }
`;
