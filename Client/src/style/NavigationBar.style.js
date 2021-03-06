import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "90px")};
  display: flex;
  flex-direction: column;
  border-bottom: black solid 1px;
`;

export const LeftContainer = styled.div`
  flex: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  margin-top: 0.2rem;
  ${mobile({
    flex: "55%",
    justifyContent: "space-between",
  })}
`;
export const CenterContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${mobile({ flex: "15%" })}
`;

export const RightContainer = styled.div`
  flex: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ flex: "15%" })}
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
  font-size: x-large;
  text-decoration: none;
  margin: 10px;

  ${mobile({ display: "none" })}
`;

export const NavBarLinkExtended = styled(Link)`
  color: black;
  font-size: x-large;
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
  color: red;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  position: absolute;
  height: 20vh;
  width: 100vw;
  top: 6rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  @media (min-width: 600px) {
    display: none;
  }
`;
