import React from "react";
import styled from "styled-components";

const TextareaBlock = styled.div`
  & > label + textarea {
    margin-top: 10px;
  }
`;

const TextareaLabel = styled.label`
  display: block;
  color: var(--color-layer-top);
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 1.25vw;

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

const TextareaField = styled.textarea`
  width: 100%;
  min-height: 500px;
  padding: 10px 20px;
  border: 2px solid var(--color-text);
  background-color: transparent;
  font-family: var(--font-secondary);
  font-weight: 600;
  //   font-size: 4vw;
  font-size: 44px;
  color: var(--color-text);
  text-transform: uppercase;
  resize: vertical;

  &:focus {
    border: 2px solid transparent;
    color: var(--color-layer-top);
    outline: 2px solid var(--color-layer-top);
  }

  &::placeholder {
    color: var(--color-gray);
  }

  @media (max-width: 550px) {
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const FormTextareaComp = ({ name, label, placeholder }) => {
  return (
    <TextareaBlock>
      <TextareaLabel htmlFor={name}>{label}</TextareaLabel>
      <TextareaField name={name} id={name} placeholder={placeholder} />
    </TextareaBlock>
  );
};

export default FormTextareaComp;
