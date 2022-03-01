import styled from "styled-components";
import { clothesPic } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
  //dessa 4 la jag till för texten
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  height: 100vh;
`;

export const Clothes = () => {
  return (
    <Container>
      <h1>COMING SOON!</h1>
      {/*     {clothesPic.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
    </Container>
  );
};

export default Clothes;
