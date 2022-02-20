import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import styled from "styled-components";

const CartItemContainer = styled.li`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;
  list-style-type: none;
  height: 100px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const CartItemImage = styled.img`
  width: 100px;
  object-fit: contain;
`;

const CartItemButton = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const CartItemDesc = styled.ul``;

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <CartItemContainer>
      <CartItemImage src={item.image} alt="" />
      <CartItemDesc>{item.text}</CartItemDesc>
      <CartItemDesc>{item.price}</CartItemDesc>
      <CartItemButton onClick={() => removeItem(item.id)}>
        Remove
      </CartItemButton>
    </CartItemContainer>
  );
};

export default CartItem;
