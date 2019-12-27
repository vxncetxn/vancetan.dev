import React from "react";
import styled from "styled-components";

import Highlight from "../components/Highlight";

const NotFound = styled.div`
  padding: 200px 15% 100px 15%;

  & * + * {
    margin-top: 50px;

    @media (max-width: 550px) {
      margin-top: 30px;
    }
  }

  @media (max-width: 550px) {
    text-align: left;
    padding: 200px 50px 50px 20px;
  }
`;

const NotFoundMessage = styled.p`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1.5vw;
  color: var(--color-text);
  line-height: 1.6;

  @media (max-width: 1220px) {
    font-size: 18px;
  }

  @media (max-width: 833px) {
    width: 90%;
  }

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const NotFoundTitle = styled.h2`
  text-align: center;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 4vw;
  color: var(--color-text);
  text-transform: uppercase;
  overflow-wrap: break-word;

  @media (max-width: 1220px) {
    font-size: 44px;
  }

  @media (max-width: 833px) {
    text-align: left;
  }

  @media (max-width: 550px) {
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const NotFoundComp = () => {
  return (
    <NotFound>
      <NotFoundTitle>Oopsy-Doopsy!</NotFoundTitle>
      <NotFoundMessage>
        By some sheer misstep, you seem to have stumbled upon{" "}
        <Highlight>404-vania</Highlight>, where there not only lurk strange
        creatures with bloodthirsty fangs in their mouths, but you are also not
        going to be able to find what you were looking for here.
      </NotFoundMessage>
      <NotFoundMessage>
        Good news though - you can get out of here fast by{" "}
        <Highlight>accessing one of those links from the sidebar</Highlight>.
        Good luck!
      </NotFoundMessage>
    </NotFound>
  );
};

export default NotFoundComp;
