import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "90px")};
  display: flex;
  flex-direction: column;
  border-bottom: black solid 1px;

  @media (max-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
`;
export const CenterContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const RightContainer = styled.div`
  flex: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavBarLink = styled(Link)`
  color: black;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  max-width: 85px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  @media (min-width: 700px) {
    display: none;
  }
`;
