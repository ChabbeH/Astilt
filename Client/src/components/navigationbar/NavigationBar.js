import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import loggan from "../../shared/images/logga.png";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

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
  const { cartItems, showHideCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer>
      <NavbarInnerContainer extendNavbar={extendNavbar}>
        <LeftContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005; </> : <>&#8801;</>}
          </OpenLinksButton>
          <Logo onClick={() => navigate("/")} src={loggan} alt=""></Logo>
        </LeftContainer>
        <CenterContainer>
          <NavbarLinkContainer>
            <NavBarLink to="/Appearel">Appearel</NavBarLink>
            <NavBarLink to="/Sneakers">Sneakers</NavBarLink>
            <NavBarLink to="/cart"></NavBarLink>
          </NavbarLinkContainer>
        </CenterContainer>
        <RightContainer>
          {/*  <FontAwesomeIcon
            icon={faShoppingCart}
            onClick={showHideCart}
          ></FontAwesomeIcon>

          {cartItems.length > 0 && (
            <div>
              <span>{cartItems.length}</span>
            </div>
          )} */}
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
