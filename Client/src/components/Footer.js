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
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <NewsLetterWrapper>
        <NewsLetter />
      </NewsLetterWrapper>
      <FooterWrapper>
        <FooterMain>
          <FooterColumn>
            <FooterHeading>About us</FooterHeading>

            <FooterLink onClick={() => navigate("/TheCompanyView")}>
              The company
            </FooterLink>
            <FooterLink onClick={() => navigate("/ContactUs")}>
              Contact us
            </FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Services</FooterHeading>
            <FooterLink onClick={() => navigate("/PrivacyPolicy")}>
              Privacy policy
            </FooterLink>
            <FooterLink onClick={() => navigate("/TermsOfService")}>
              Terms of service
            </FooterLink>
            <FooterLink onClick={() => navigate("/YourRights")}>
              Your rights
            </FooterLink>
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
