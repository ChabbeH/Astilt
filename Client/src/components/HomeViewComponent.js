import { useState, useEffect } from "react";
import Modal from "./Modal";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import IntroCard from "../components/IntroCard";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 1%;
  width: 100%;

  cursor: pointer;
`;

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr min-content;
  justify-self: stretch;
  grid-gap: 10px;
  width: 100%;
`;

export const ProductWrapper = styled.div`
  max-width: 40%;
`;

export const HomeViewComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <ProductCardWrapper>
      <CardContainer>
        {products &&
          products.map((product, i) => (
            <>
              {i === 0 ? (
                <CardContainer
                  onClick={() => {
                    setOpenModal(true);
                    setActiveProduct(product);
                  }}
                >
                  <IntroCard
                    image={product?.image}
                    text={product?.text}
                    key={product.id}
                  />
                </CardContainer>
              ) : (
                <ProductWrapper
                  onClick={() => {
                    setOpenModal(true);
                    setActiveProduct(product);
                  }}
                >
                  <ProductCard
                    image={product?.image}
                    text={product?.text}
                    key={product.id}
                  />
                </ProductWrapper>
              )}
            </>
          ))}
      </CardContainer>

      {openModal && (
        <Modal product={activeProduct} setOpenModal={setOpenModal} />
      )}
    </ProductCardWrapper>
  );
};

export default HomeViewComponent;
