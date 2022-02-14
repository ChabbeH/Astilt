import styled from "styled-components";
import { clothesPic } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Clothes = () => {
  return (
    <Container>
      {clothesPic.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Clothes;
