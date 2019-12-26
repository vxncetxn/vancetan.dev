import React, { useState } from "react";
import styled from "styled-components";

import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import FormSubmitButton from "../components/FormSubmitButton";

const ContactForm = styled.form`
  padding: 100px 20% 200px 20%;

  & * + * {
    margin-top: 80px;

    @media (max-width: 550px) {
      margin-top: 50px;
    }
  }

  @media (max-width: 550px) {
    text-align: left;
    padding: 100px 50px 150px 20px;
  }
`;

const FormMessagePara = styled.p`
  font-family: var(--font-primary), sans-serif;
  font-size: 1.25vw;
  font-weight: 500;
  color: var(--color-layer-top);
  height: 10px;
  margin-top: 20px;

  @media (max-width: 1220px) {
    font-size: 18px;
  }

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const Contact = () => {
  const [nameField, setNameField] = useState({ value: "", error: "" });
  const [emailField, setEmailField] = useState({ value: "", error: "" });
  const [messageField, setMessageField] = useState({ value: "", error: "" });
  const [formMessage, setFormMessage] = useState("");

  const validateFilled = subj => {
    let validationConclusion = "";
    if (!subj.value) {
      validationConclusion = "This field is required!";
    }
    return validationConclusion;
  };

  const validateEmail = subj => {
    const email = subj.value;
    const [emailBeforeAt, emailAfterAt] = email.split("@");
    let validationConclusion = "";
    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (email.length > 254) {
      validationConclusion = "This email address is not valid!";
    } else if (!emailRegex.test(email)) {
      validationConclusion = "This email address is not valid!";
    } else if (emailBeforeAt.length > 64) {
      validationConclusion = "This email address is not valid!";
    } else if (emailAfterAt.split(".").some(segment => segment.length > 63)) {
      validationConclusion = "This email address is not valid!";
    }

    return validationConclusion;
  };

  const validateField = fieldName => {
    let field;
    let setField;
    let validateFilledError = "";
    let validateEmailError = "";

    switch (fieldName) {
      case "name":
        field = nameField;
        setField = setNameField;
        break;
      case "email":
        field = emailField;
        setField = setEmailField;
        break;
      default:
        field = messageField;
        setField = setMessageField;
        break;
    }
    validateFilledError = validateFilled(field);
    if (validateFilledError) {
      setField({
        ...field,
        error: validateFilledError
      });
    } else {
      setField({
        ...field,
        error: ""
      });
    }
    if (fieldName === "email" && !validateFilledError) {
      validateEmailError = validateEmail(field);
      if (validateEmailError) {
        setField({
          ...field,
          error: validateEmailError
        });
      } else {
        setField({
          ...field,
          error: ""
        });
      }
    }

    return validateFilledError || validateEmailError ? 1 : 0;
  };

  const submitHandler = () => {
    let form = document.getElementById("contact-form");
    let hasErrors = 0;
    hasErrors += validateField("name");
    hasErrors += validateField("email");
    hasErrors += validateField("message");

    if (hasErrors) {
      setFormMessage(
        "Some of the fields are incomplete or have errors. Please fix them before submitting."
      );
    } else {
      fetch(form.action, {
        method: "POST",
        body: new URLSearchParams(new FormData(form))
      })
        .then(() => {
          setNameField({ value: "", error: "" });
          setEmailField({ value: "", error: "" });
          setMessageField({ value: "", error: "" });
          setFormMessage(
            "Thanks for reaching out - I will get back to you shortly! 🥳"
          );
        })
        .catch(() => {
          setFormMessage(
            "Apologies - something strange happened and your form has not been submitted. Please try again!"
          );
        });
    }
  };

  return (
    <>
      <ContactForm
        id="contact-form"
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onBlur={e => {
        //   validateField(e.target.name);
        // }}
        onSubmit={e => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <input type="hidden" name="bot-field" />
        <FormInput
          name="name"
          label="Name"
          placeholder="Jane Doe"
          field={nameField}
          setField={setNameField}
          onBlurHandler={() => {
            validateField("name");
          }}
        />
        <FormInput
          name="email"
          label="Email"
          placeholder="janedoe@example.com"
          field={emailField}
          setField={setEmailField}
          onBlurHandler={() => {
            validateField("email");
          }}
        />
        <FormTextarea
          name="message"
          label="Your Message"
          placeholder="Tell me more!"
          field={messageField}
          setField={setMessageField}
          onBlurHandler={() => {
            validateField("message");
          }}
        />
        <FormSubmitButton />
        <FormMessagePara>{formMessage}</FormMessagePara>
      </ContactForm>
    </>
  );
};

export default Contact;
