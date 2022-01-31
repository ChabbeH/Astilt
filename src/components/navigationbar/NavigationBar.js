import React, { useState } from "react";
import loggan from "../../shared/images/logga.png";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavBarLink,
  Logo,
  OpenLinksButton,
  NavBarLinkExtended,
} from "../../style/NavigationBar.style";

export const NavigationBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer>
      <NavbarInnerContainer extendNavbar={extendNavbar}>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/testsida">Products</NavBarLink>
            <NavBarLink to="/testsida2">Contact Us</NavBarLink>
            <NavBarLink to="/testsida3">AllahatarALI</NavBarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005; </> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={loggan}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
          <NavBarLinkExtended to="/testsida">Products</NavBarLinkExtended>
          <NavBarLinkExtended to="/testsida2">Contact Us</NavBarLinkExtended>
          <NavBarLinkExtended to="/testsida3">AllahatarALI</NavBarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
