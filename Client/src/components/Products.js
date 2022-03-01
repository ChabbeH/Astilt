import styled from "styled-components";
import { homeViewProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {homeViewProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
