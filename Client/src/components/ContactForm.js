import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const FormContainer = styled.form`
  background-color: white;
  width: 340px;
  height: 480px;
  padding: 20px 30px;
  margin: auto auto;
  border-radius: 6px;
  box-shadow: 1px 1px 3px 1px black;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  margin-top: 100px;
`;

const FormTitle = styled.h2`
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 3px solid;
  width: 180px;
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
  border: 0;
  background: none;
  border-bottom: 2px solid;
  margin: 10px 0;
  &.error {
    ::placeholder {
      color: red;
    }
  }
`;
const FormArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border-bottom: 2px solid;
  resize: none;
  &.error {
    ::placeholder {
      color: red;
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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

function ContactForm() {
  const initialValues = { senderName: "", senderEmail: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubit, setIsSubit] = useState(false);
  const [post, setPost] = useState(null);
  console.log("kollapådetta", Object.keys(formErrors).lenght === 0 && isSubit);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubit(true);
    fetchPosts();
  };

  useEffect(() => {
    if (Object.keys(formErrors).lenght === 0 && isSubit) {
      console.log("vadhänderhär", formValues);
    }
  }, [formErrors, isSubit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.senderName) {
      errors.senderName = "Name is required!";
    }
    if (!values.senderEmail) {
      errors.senderEmail = "Email is required!";
    } else if (!regex.test(values.senderEmail)) {
      errors.senderEmail = "This is not a valid email!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };

  const fetchPosts = async () => {
    const data = { formValues };
    console.log("data", data);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/mail/sendmail",
        data
      );
      setPost(res.data);
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {Object.keys(formErrors).lenght === 0 && isSubit}
      <FormContainer onSubmit={submitForm}>
        <FormTitle>Contact us</FormTitle>

        <FormWrapper>
          <FormLabel>Name:</FormLabel>

          <FormInput
            className={formErrors.senderName && "error"}
            type="text"
            name="senderName"
            value={formValues.senderName}
            onChange={handleChange}
            placeholder={
              formErrors.senderName
                ? formErrors.senderName
                : "Write your name here.."
            }
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel>Email:</FormLabel>

          <FormInput
            className={formErrors.senderEmail && "error"}
            type="email"
            name="senderEmail"
            value={formValues.senderEmail}
            onChange={handleChange}
            placeholder={
              formErrors.senderEmail
                ? formErrors.senderEmail
                : "Let us know how to contact you back.."
            }
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel>Message</FormLabel>

          <FormArea
            className={formErrors.message && "error"}
            type="text"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder={
              formErrors.message
                ? formErrors.message
                : "Write your message here.."
            }
          />
        </FormWrapper>
        <BtnWrapper>
          <FormButton type="submit" value="Send Message" />
        </BtnWrapper>
      </FormContainer>
    </>
  );
}

export default ContactForm;
