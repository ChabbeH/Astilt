import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NewsLetter from "../components/Newsletter";
import {
  FooterContainer,
  FooterMain,
  FooterColumn,
  FooterHeading,
  FooterLink,
  FooterBottom,
  Copyright,
  FooterSocial,
  FooterWrapper,
  NewsLetterWrapper,
} from "../style/FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <NewsLetterWrapper>
        <NewsLetter />
      </NewsLetterWrapper>
      <FooterWrapper>
        <FooterMain>
          <FooterColumn>
            <FooterHeading>About us</FooterHeading>
            <FooterLink>The company</FooterLink>
            <FooterLink>The Crew</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Services</FooterHeading>
            <FooterLink>Shipment</FooterLink>
          </FooterColumn>
        </FooterMain>
        <FooterBottom>
          <Copyright>
            {" "}
            Astilt © {new Date().getFullYear()} - All rights reserved.
          </Copyright>
          <FooterSocial
            href="https://www.instagram.com/a.s.tilt/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </FooterSocial>
          <FooterSocial href="https://www.facebook.com/TILT.SE" target="_blank">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </FooterSocial>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;
