import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ConstWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  border-radius: 12px;
  background-color: white;
  border: 1px solid gray;
  padding: 10px;
  z-index: 10;
`;

const InnerWrapper = styled.div`
  height: max-content;
  max-height: 50vh;
  overflow-y: auto;
  border-top: 1px solid gray;
`;

const CartTotal = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  text-align: right;
  cursor: pointer;
`;

const CartTitle = styled.div``;
const CartPrice = styled.div``;

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {showCart && (
        <ConstWrapper>
          <IconWrapper>
            <FontAwesomeIcon
              aria-hidden="true"
              onClick={showHideCart}
              icon={faTimesCircle}
            />
          </IconWrapper>
          <InnerWrapper>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </InnerWrapper>
          <CartTotal>
            <CartTitle>Cart Total</CartTitle>
            <CartPrice>
              {cartItems.reduce(
                (amount, item) => parseInt(item.price) + amount,
                0
              ) + " SEK"}
            </CartPrice>
          </CartTotal>
        </ConstWrapper>
      )}
    </>
  );
};

export default Cart;
