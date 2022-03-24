import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const SuccsessWrapper = styled.div`
  display: flex;
  max-width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuccessPayment = () => {
  const location = useLocation();
  const data = location.state.data;
  const cart = location.state.cartItems;
  const cartTotal = location.state.cartTotal;
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/orders", {
          products: cart.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cartTotal,
          address: data.billing_details.address,
        });
        console.log("res", res);
        setOrderId(res.data._id, res.data._quantity, res.data.billing_details);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, cartTotal]);

  return (
    <Wrapper>
      <SuccsessWrapper onClick={() => console.log()}>
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Successfull. Your order is being prepared...`}
        <button
          onClick={() => navigate("/")}
          style={{ padding: 10, marginTop: 20 }}
        >
          Go to Homepage
        </button>
      </SuccsessWrapper>
    </Wrapper>
  );
};

export default SuccessPayment;
