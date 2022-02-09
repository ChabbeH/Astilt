import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import loggan from "../../shared/images/logga.png";
import { useNavigate } from "react-router-dom";

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
  CenterContainer,
} from "../../style/NavigationBar.style";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer>
      <NavbarInnerContainer extendNavbar={extendNavbar}>
        <LeftContainer>
          <Logo onClick={() => navigate("/")} src={loggan} alt=""></Logo>
        </LeftContainer>
        <CenterContainer>
          <NavbarLinkContainer>
            <NavBarLink to="/Appearel">Appearel</NavBarLink>
            <NavBarLink to="/Sneakers">Sneakers</NavBarLink>
            <NavBarLink to="/cart"></NavBarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005; </> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </CenterContainer>
        <RightContainer>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavBarLinkExtended to="/appearel">Appearel</NavBarLinkExtended>
          <NavBarLinkExtended to="/Sneakers">Sneakers</NavBarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
