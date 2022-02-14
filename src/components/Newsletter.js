import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Container = styled.div`
  height: 10vh;
  width: 100%;
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

const InputContainer = styled.div`
  display: flex;
  height: 3rem;
  background-color: #141414;
`;

const Input = styled.input`
  font-size: 20px;
  border: 3px solid black;
  border-radius: 8px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Subscribe</Title>

      <InputContainer>
        <Input placeholder="Email Address" />

        <Button variant="contained" color="error" endIcon={<SendIcon />}>
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
