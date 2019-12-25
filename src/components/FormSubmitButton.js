import React from "react";
import styled from "styled-components";

const FormSubmitButton = styled.button`
  margin-bottom: 0;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 44px;
  color: var(--color-text);
  text-transform: uppercase;

  @media (max-width: 550px) {
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const FormSubmitButtonComp = () => {
  return <FormSubmitButton className="link">Submit →</FormSubmitButton>;
};

export default FormSubmitButtonComp;
