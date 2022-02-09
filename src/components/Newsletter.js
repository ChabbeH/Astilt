import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 10vh;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 35px;
  margin: 20px;
  color: #ffffff;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  color: black;
`;

const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const Input = styled.input`
  border: none;
  flex: 6;
  font-size: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #141414;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Contact us</Title>

      <InputContainer>
        <Input placeholder="Email Address" />
        <Button>
          <Send color="error" />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
