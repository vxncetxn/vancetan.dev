import React from "react";
import styled from "styled-components";

const InputBlock = styled.div`
  & > label + input {
    margin-top: 10px;
  }

  & > input + p {
    margin-top: 20px;
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
  font-size: 4vw;
  // font-size: 44px;
  color: var(--color-text);
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-text);
  ${props =>
    props.error
      ? `
  border-bottom: 2px solid transparent;
  outline: 5px solid var(--color-layer-top);
  `
      : null}

  &:focus {
    border-bottom: 2px solid transparent;
    color: var(--color-layer-top);
    outline: 2px solid var(--color-layer-top);
  }

  &::placeholder {
    color: var(--color-text);
    opacity: 0.4;
  }

  @media (max-width: 1220px) {
    font-size: 44px;
  }

  @media (max-width: 833px) {
    font-size: 36px;
  }

  @media (max-width: 550px) {
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const InputError = styled.p`
  font-family: var(--font-primary), sans-serif;
  font-size: 1.25vw;
  font-weight: 500;
  color: var(--color-layer-top);
  height: 10px;

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

const FormInputComp = ({
  name,
  label,
  placeholder,
  field,
  setField,
  onBlurHandler
}) => {
  return (
    <InputBlock>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputField
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={field.value}
        error={field.error}
        onChange={e => {
          setField({
            ...field,
            value: e.target.value
          });
        }}
        onBlur={onBlurHandler}
      />
      <InputError>{field.error}</InputError>
    </InputBlock>
  );
};

export default FormInputComp;
