import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
  SearchContainer,
  Input,
} from "../../style/NavigationBar.style";
import { Search } from "@mui/icons-material";

export const NavigationBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer>
      <NavbarInnerContainer extendNavbar={extendNavbar}>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/appearel">Appearel</NavBarLink>
            <NavBarLink to="/Sneakers">Sneakers</NavBarLink>
            <NavBarLink to="/AppearelDetialPage">AppearelDetialPage</NavBarLink>
            <NavBarLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </NavBarLink>
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
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
          <Logo src={loggan}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
          <NavBarLinkExtended to="/appearel">Appearel</NavBarLinkExtended>
          <NavBarLinkExtended to="/Sneakers">Sneakers</NavBarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
