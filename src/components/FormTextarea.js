import React from "react";
import styled from "styled-components";

const TextareaBlock = styled.div`
  & > label + textarea {
    margin-top: 10px;
  }

  & > textarea + p {
    margin-top: 20px;
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
  font-size: 4vw;
  // font-size: 44px;
  color: var(--color-text);
  // text-transform: uppercase;
  resize: vertical;
  ${props =>
    props.error
      ? `
  border: 2px solid transparent;
  outline: 5px solid var(--color-layer-top);
  `
      : null}

  &:focus {
    border: 2px solid transparent;
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

const TextareaError = styled.p`
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

const FormTextareaComp = ({
  name,
  label,
  placeholder,
  field,
  setField,
  onBlurHandler
}) => {
  return (
    <TextareaBlock>
      <TextareaLabel htmlFor={name}>{label}</TextareaLabel>
      <TextareaField
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
      <TextareaError>{field.error}</TextareaError>
    </TextareaBlock>
  );
};

export default FormTextareaComp;
