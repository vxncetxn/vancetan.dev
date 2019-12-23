import React, { useContext } from "react";
import styled from "styled-components";

import InternalLink from "../InternalLink";
import Github from "../assets/icons/socials/github.svg";
import Linkedin from "../assets/icons/socials/linkedin.svg";
import Twitter from "../assets/icons/socials/twitter.svg";
import Email from "../assets/icons/socials/email.svg";
// import Music from "../assets/icons/misc/music.svg";
import SectionContext from "../SectionContext";

const Popover = styled.ul`
  display: none;
  position: absolute;
  height: 100%;
  left: -220px;
  bottom: 0;
  flex-direction: column-reverse;
  align-items: center;

  & > * {
    margin-right: 20px;
  }
`;

const PopoverChild = styled.li`
  position: relative;
  height: 35px;
  opacity: 0;
  text-align: center;
  animation: move-up 0.2s ease-out forwards;
  animation-delay: ${props => `${props.itemKey * 0.2}s`};

  & svg {
    width: 35px;
    height: 35px;
  }
`;

const StyledNav = styled.nav`
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text);
  transition: color 0.6s ease-out;

  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;

  @media (orientation: portrait) and (max-width: 833px) {
    transform-origin: center right;
    transform: rotate(90deg);
    right: 40px;
    bottom: 20px;
  }

  @media (max-width: 550px) {
    font-size: 14px;
    right: 30px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const Menubar = styled.ul`
  display: flex;
  padding: 0 50px 25px 0;
  // border: 1px solid red;

  & > * + * {
    margin-left: 30px;
  }

  @media (orientation: portrait) and (max-width: 833px) {
    padding: 0;
  }

  @media (max-width: 550px) {
    & > * + * {
      margin-left: 20px;
    }
  }
`;

const MenuItem = styled.li`
  position: relative;
  &:hover > ul {
    display: flex;
  }
  cursor: pointer;
`;

const Others = styled.ul`
  position: absolute;
  right: 20px;
  bottom: 70px;
  display: flex;
  writing-mode: vertical-lr;

  & > * + * {
    margin-top: 30px;
  }

  @media (orientation: portrait) and (max-width: 833px) {
    display: none;
  }
`;

const Temp = styled.div`
  display: inline-block;
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

const FixedTools = ({ setTheme }) => {
  const sectionContext = useContext(SectionContext);

  const tempMethod = theme => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <StyledNav aria-label="Navigation menu">
      <Menubar role="menubar" aria-label="Navigation menu">
        <li role="none">
          <InternalLink
            role="menuitem"
            tabIndex="0"
            to="main"
            circled={sectionContext.section === "main"}
          >
            Main
          </InternalLink>
        </li>
        <li role="none">
          <InternalLink
            role="menuitem"
            tabIndex="-1"
            to="projects"
            circled={sectionContext.section === "projects"}
          >
            Projects
          </InternalLink>
        </li>
        <li role="none">
          <InternalLink
            role="menuitem"
            tabIndex="-1"
            to="writings"
            circled={sectionContext.section === "writings"}
            disabled
          >
            Writings
          </InternalLink>
        </li>
        <li role="none">
          <InternalLink
            role="menuitem"
            tabIndex="-1"
            to="contact"
            circled={sectionContext.section === "contact"}
          >
            Contact
          </InternalLink>
        </li>
        <li role="none">
          <Others>
            <MenuItem role="none">
              <button
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="-1"
              >
                Themes
              </button>
              <Popover numChildren={4} role="menu" aria-label="themes">
                <PopoverChild itemKey={0} role="none">
                  <button role="menuitem" tabIndex="-1">
                    <Temp
                      style={{ backgroundColor: "red" }}
                      onClick={() => {
                        tempMethod("nevada-sunset");
                      }}
                    />
                  </button>
                </PopoverChild>
                <PopoverChild itemKey={1} role="none">
                  <button role="menuitem" tabIndex="-1">
                    <Temp
                      style={{ backgroundColor: "green" }}
                      onClick={() => {
                        tempMethod("dover-overcast");
                      }}
                    />
                  </button>
                </PopoverChild>
                <PopoverChild itemKey={2} role="none">
                  <button role="menuitem" tabIndex="-1">
                    <Temp
                      style={{ backgroundColor: "blue" }}
                      onClick={() => {
                        tempMethod("theme-three");
                      }}
                    />
                  </button>
                </PopoverChild>
                <PopoverChild itemKey={3} role="none">
                  <button role="menuitem" tabIndex="-1">
                    <Temp />
                  </button>
                </PopoverChild>
              </Popover>
            </MenuItem>
            <MenuItem role="none">
              <button
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="-1"
              >
                Socials
              </button>
              <Popover numChildren={4} role="menu" aria-label="socials">
                <PopoverChild itemKey={0} role="none">
                  <a
                    role="menuitem"
                    tabIndex="-1"
                    href="mailto:thevancetan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Email fill="var(--color-text)" />
                  </a>
                </PopoverChild>
                <PopoverChild itemKey={1} role="none">
                  <a
                    role="menuitem"
                    tabIndex="-1"
                    href="https://twitter.com/vxncetxn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter fill="var(--color-text)" />
                  </a>
                </PopoverChild>
                <PopoverChild itemKey={2} role="none">
                  <a
                    role="menuitem"
                    tabIndex="-1"
                    href="https://www.linkedin.com/in/vance-tan-xr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin fill="var(--color-text)" />
                  </a>
                </PopoverChild>
                <PopoverChild itemKey={3} role="none">
                  <a
                    role="menuitem"
                    tabIndex="-1"
                    href="https://github.com/vxncetxn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github fill="var(--color-text)" />
                  </a>
                </PopoverChild>
              </Popover>
            </MenuItem>
          </Others>
        </li>
      </Menubar>
    </StyledNav>
  );
};

export default FixedTools;
