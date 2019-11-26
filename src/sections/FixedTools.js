import React from "react";
import styled from "styled-components";

import Github from "../assets/icons/socials/github.svg";
import Linkedin from "../assets/icons/socials/linkedin.svg";
import Twitter from "../assets/icons/socials/twitter.svg";
import Email from "../assets/icons/socials/email.svg";
import Music from "../assets/icons/misc/music.svg";

const StyledNav = styled.nav`
  position: fixed;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text);

  writing-mode: vertical-lr;
  right: 30px;
  bottom: 90px;

  & > ul {
    display: flex;
    justify-content: center;
  }

  & > ul > li + li {
    margin-top: 20px;
  }

  @media (max-width: 1220px) {
    font-size: 14px;
  }

  @media (max-width: 860px) {
    font-size: 12px;
    right: 20px;
    bottom: 80px;

    & > ul > li + li {
      margin-top: 15px;
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const StyledAside = styled.aside`
  position: fixed;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text);

  & > ul {
    display: flex;
    justify-content: center;
  }

  & path {
    stroke: var(--color-text);
  }

  @media (max-width: 1220px) {
    font-size: 14px;
  }

  @media (max-width: 860px) {
    font-size: 12px;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const BottomAside = styled(StyledAside)`
  right: 90px;
  bottom: 30px;

  & > ul > li + li {
    margin-left: 20px;
  }

  @media (max-width: 860px) {
    right: 70px;
    bottom: 20px;

    & > ul > li + li {
      margin-left: 15px;
    }
  }

  & > ul > li:hover > ul {
    display: flex;
  }
`;

const TopAside = styled(StyledAside)`
  left: 90px;
  top: 30px;

  @media (max-width: 860px) {
    left: 70px;
    top: 20px;
  }
`;

const LeftAside = styled(StyledAside)`
  left: 30px;
  top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1220px) {
    font-size: 14px;
  }

  @media (max-width: 860px) {
    font-size: 12px;
    left: 20px;
    top: 80px;

    & > ul > li + li {
      margin-top: 15px;
    }
  }
`;

const CornerButton = styled.button`
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 20px;
  color: var(--color-text);
  position: fixed;
  border: 1px solid var(--color-text);

  @media (max-width: 860px) {
    font-size: 16px;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const BottomRightButton = styled(CornerButton)`
  right: 35px;
  bottom: 25px;
  padding: 0 5px;

  @media (max-width: 860px) {
    right: 21px;
    bottom: 16px;
  }
`;

const TopLeftButton = styled(CornerButton)`
  left: 33px;
  top: 27px;
  padding: 0 5px;

  @media (max-width: 860px) {
    left: 21px;
    top: 17px;
  }
`;

const Popover = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  top: ${props => `-${props.numChildren * 55}px`};
  width: 100%;
  padding-bottom: 20px;
  flex-direction: column-reverse;
  align-items: center;
  //   border: 1px solid green;

  & > * + * {
    margin-bottom: 20px;
  }

  @media (max-width: 860px) {
    top: ${props => `-${props.numChildren * 50}px`};
  }
`;

const PopoverChild = styled.li`
  position: relative;
  width: 35px;
  height: 35px;
  opacity: 0;
  animation: move-up 0.2s ease-out forwards;
  animation-delay: ${props => `${props.itemKey * 0.2}s`};

  @media (max-width: 860px) {
    width: 30px;
    height: 30px;
  }
`;

const StyledMusic = styled(Music)`
  width: 25px;
  fill: var(--color-text);
  margin-top: 20px;

  @media (max-width: 860px) {
    width: 20px;
    margin-top: 10px;
  }
`;

const FixedTools = () => {
  return (
    <>
      <StyledNav>
        <ul>
          <li>Main</li>
          <li>Work</li>
          <li>Writings</li>
          <li>Contact</li>
        </ul>
      </StyledNav>
      <BottomAside>
        <ul>
          <li className="link">Theme</li>
          <li className="link">Perspective</li>
          <li className="link">
            Socials
            <Popover numChildren={4}>
              <PopoverChild itemKey={1}>
                <a
                  href="mailto:thevancetan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Email fill="var(--color-text)" />
                </a>
              </PopoverChild>
              <PopoverChild itemKey={2}>
                <a
                  href="https://twitter.com/vxncetxn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter fill="var(--color-text)" />
                </a>
              </PopoverChild>
              <PopoverChild itemKey={3}>
                <a
                  href="https://www.linkedin.com/in/vance-tan-xr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin fill="var(--color-text)" />
                </a>
              </PopoverChild>
              <PopoverChild itemKey={4}>
                <a
                  href="https://github.com/vxncetxn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github fill="var(--color-text)" />
                </a>
              </PopoverChild>
            </Popover>
          </li>
        </ul>
      </BottomAside>
      <TopAside>
        Recently wrote <span className="link">"How to optimize the..."</span>
      </TopAside>
      <LeftAside>
        <div
          style={{
            height: "200px",
            borderRight: "5px solid var(--color-text)"
          }}
        />
        <StyledMusic />
      </LeftAside>
      <BottomRightButton>t</BottomRightButton>
      <TopLeftButton>v</TopLeftButton>
    </>
  );
};

export default FixedTools;
