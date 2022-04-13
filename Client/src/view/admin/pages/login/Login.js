import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import AuthContext from "../../context/AuthProvider";

const FormContainer = styled.form`
  background-color: white;
  width: 340px;
  height: 380px;
  padding: 20px 30px;
  margin: auto auto;
  border-radius: 6px;
  box-shadow: 1px 1px 3px 1px black;
  box-sizing: border-box;
  margin-top: 100px;
  margin-bottom: 200px;
  max-width: calc(100vw - 40px);
  ${mobile({
    fontSize: "10px",
    lineHeight: "15px",
    width: "280px",
    marginRight: "5rem",
  })}
`;

const FormTitle = styled.h2`
  margin: 10px 0;
  padding-bottom: 10px;
  width: 180px;
  ${mobile({
    fontSize: "12px",
    lineHeight: "15px",
  })}
`;

const FormWrapper = styled.div`
  flex: 1;
  margin: 20px 0;
`;

const FormLabel = styled.label`
  display: block;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  border-bottom: 2px solid;
  margin: 10px 0;
  &.error {
    ::placeholder {
      color: red;
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const FormButton = styled.input`
  float: right;
  padding: 8px 12px;
  margin: 1px 0 0;
  border: 2px solid;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    color: green;
  }
`;

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin";

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername({ username });
    setPassword({ password });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username: username,
          password: password,
        }
      );
      console.log(response);
      const accessToken = response?.data?.accessToken;
      setAuth({ username, password, accessToken, user: true });

      if (response.status === 200) {
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("no server response");
      } else if (err.response?.status === 400) {
        setErrMsg("missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }

      errRef.current.focus();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <FormTitle>Sign In</FormTitle>
      <FormWrapper>
        <FormLabel>Name:</FormLabel>
        <FormInput
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <FormLabel>Password:</FormLabel>
        <FormInput
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <BtnWrapper>
          <FormButton type="submit" value="Sign In" />
        </BtnWrapper>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
