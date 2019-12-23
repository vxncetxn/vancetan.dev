import React from "react";
import styled from "styled-components";

import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import FormSubmitButton from "../components/FormSubmitButton";

const ContactForm = styled.form`
  padding: 100px 20%;
  // border: 1px solid green;

  & * + * {
    margin-top: 80px;

    @media (max-width: 550px) {
      margin-top: 50px;
    }
  }

  @media (max-width: 550px) {
    text-align: left;
    padding: 100px 50px 50px 20px;
  }
`;

const Contact = () => {
  return (
    <>
      <ContactForm>
        <FormInput name="name" label="Name" placeholder="Jane Doe" />
        <FormInput
          name="email"
          label="Email"
          placeholder="janedoe@example.com"
        />
        <FormTextarea
          name="message"
          label="Your Message"
          placeholder="Tell me more!"
        />
        <FormSubmitButton />
      </ContactForm>
    </>
  );
};

export default Contact;
