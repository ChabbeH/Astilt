import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { mobile } from "../responsive";
import axios from "axios";

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
  font-size: 16px;
  margin: 20px;
  color: #ffffff;
`;

const InputContainer = styled.div``;

const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  font-size: 20px;
  border: 3px solid black;
  border-radius: 8px;
  margin-bottom: 10px;
  outline: none !important;
  cursor: pointer;
  ${mobile({ width: "15rem", height: "2rem" })}
`;

const AccordionContainer = styled.div``;

const Newsletter = () => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("TESTAR", setPost);
    const fetchPosts = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/subscribe");
        setPost(res.data);
      } catch (err) {}
    };
    fetchPosts();
  }, []);

  return (
    <Container>
      <Title>SUBSCRIBE TO OUR NEWSLETTER</Title>

      <InputContainer onClick={() => setOpenAccordion(!openAccordion)}>
        <Input color="none" placeholder="Email Address *" />
      </InputContainer>
      {openAccordion && (
        <AccordionContainer>
          <Button
            variant="contained"
            size="small"
            color="error"
            endIcon={<SendIcon />}
            onClick={() => setPost()}
          >
            SUBSCRIBE
          </Button>
        </AccordionContainer>
      )}
    </Container>
  );
};

export default Newsletter;
