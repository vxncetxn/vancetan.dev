import React from "react";
import styled from "styled-components";

const InputBlock = styled.div`
  & > label + input {
    margin-top: 10px;
  }
`;

const InputLabel = styled.label`
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

const InputField = styled.input`
  display: block;
  width: 100%;
  padding-left: 10px;
  font-family: var(--font-secondary);
  font-weight: 600;
  //   font-size: 4vw;
  font-size: 44px;
  color: var(--color-text);
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-text);

  &:focus {
    border-bottom: 2px solid transparent;
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

const FormInputComp = ({ name, label, placeholder }) => {
  return (
    <InputBlock>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputField type="text" name={name} id={name} placeholder={placeholder} />
    </InputBlock>
  );
};

export default FormInputComp;
