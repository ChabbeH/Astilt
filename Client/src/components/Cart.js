import { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KEY = process.env.REACT_APP_STRIPE;

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
  margin-left: 2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  text-align: right;
  cursor: pointer;
`;

const CartTitle = styled.div``;
const CartPrice = styled.div``;
const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`;
const CheckoutBtn = styled.button`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 8px !important;
  background-color: white;
  cursor: pointer;
  font-family: neuropolitical;
  font-size: 12px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  margin-bottom: 1rem;

  &:hover {
    background-color: green;
  }
  ${mobile({ fontSize: "8px" })}
`;

const Cart = () => {
  const navigate = useNavigate();
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const cartTotal =
      cartItems.reduce((amount, item) => parseInt(item.price) + amount, 0) +
      " SEK";
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 800,
          }
        );

        navigate("/success", {
          state: { data: res.data, cartItems: cartItems, cartTotal: cartTotal },
        });
        console.log(cartItems);
      } catch {}
    };

    setStripeToken && makeRequest();
  }, [stripeToken, navigate, cartItems]);

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
          <CheckoutWrapper>
            <StripeCheckout
              name="ASTILT"
              image="http://localhost:3000/static/media/logga.aadc25fa.png"
              currency="SEK"
              billingAddress
              shippingAddress
              description={`Your total is ${
                cartItems.reduce(
                  (amount, item) => parseInt(item.price) + amount,
                  0
                ) + " SEK"
              }`}
              amount={
                cartItems.reduce(
                  (amount, item) => parseInt(item.price) + amount,
                  0
                ) +
                " SEK" * 100
              }
              token={onToken}
              stripeKey={KEY}
            >
              <CheckoutBtn>CHECKOUT NOW</CheckoutBtn>
            </StripeCheckout>
          </CheckoutWrapper>
        </ConstWrapper>
      )}
    </>
  );
};

export default Cart;
