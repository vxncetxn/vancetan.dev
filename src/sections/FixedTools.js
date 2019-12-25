import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import InternalLink from "../InternalLink";

import MojaveSunsetTheme from "../assets/icons/themes/mojave-sunset-theme.svg";
import DoverOvercastTheme from "../assets/icons/themes/dover-overcast-theme.svg";
import ThemeThreeTheme from "../assets/icons/themes/theme-three-theme.svg";
import MuirSummerTheme from "../assets/icons/themes/muir-summer-theme.svg";
import TomitaSummerTheme from "../assets/icons/themes/tomita-summer-theme.svg";

import Github from "../assets/icons/socials/github.svg";
import Linkedin from "../assets/icons/socials/linkedin.svg";
import Twitter from "../assets/icons/socials/twitter.svg";
import Email from "../assets/icons/socials/email.svg";

// import Music from "../assets/icons/misc/music.svg";
import SectionContext from "../SectionContext";

const themes = [
  {
    element: MojaveSunsetTheme,
    themeName: "Mojave Sunset",
    themeID: "mojave-sunset"
  },
  {
    element: DoverOvercastTheme,
    themeName: "Dover Overcast",
    themeID: "dover-overcast"
  },
  {
    element: ThemeThreeTheme,
    themeName: "Theme Three",
    themeID: "theme-three"
  },
  {
    element: MuirSummerTheme,
    themeName: "Muir Summer",
    themeID: "muir-summer"
  },
  {
    element: TomitaSummerTheme,
    themeName: "Tomita Summer",
    themeID: "tomita-summer"
  }
];
const socials = [
  { element: Github, href: "https://github.com/vxncetxn/" },
  { element: Linkedin, href: "https://www.linkedin.com/in/vance-tan-xr/" },
  { element: Twitter, href: "https://twitter.com/vxncetxn" },
  { element: Email, href: "mailto:thevancetan@gmail.com" }
];

const Popover = styled.ul`
  display: none;
  position: absolute;
  height: 100%;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  flex-direction: column-reverse;
  align-items: center;

  & > * {
    margin-right: 20px;
  }
`;

const PopoverChild = styled.li`
  position: relative;
  height: 40px;
  opacity: 0;
  text-align: center;
  animation: move-up 0.2s ease-out forwards;
  animation-delay: ${props => `${props.itemKey * 0.2}s`};

  & svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 550px) {
    height: 35px;

    & svg {
      width: 35px;
      height: 35px;
    }
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
    writing-mode: vertical-lr;

    right: 20px;
    bottom: 10px;
  }

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const Menubar = styled.ul`
  display: flex;
  padding: 0 50px 25px 0;

  & > * + * {
    margin-left: 30px;
  }

  & .others-two {
    display: none;
  }

  @media (orientation: portrait) and (max-width: 833px) {
    padding: 0;

    & > * + * {
      margin-left: 0;
      margin-top: 30px;
    }

    & .others-two {
      display: block;
    }
  }

  @media (max-width: 550px) {
    & > * + * {
      margin-top: 20px;
    }
  }
`;

const MenuItem = styled.li`
  position: relative;
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

const FixedTools = ({ theme, setTheme }) => {
  const sectionContext = useContext(SectionContext);

  useEffect(() => {
    for (const path of document.querySelectorAll(
      `.theme-outline:not(.${theme}-outline)`
    )) {
      path.setAttribute("stroke", "none");
    }
    for (const path of document.querySelectorAll(`.${theme}-outline`)) {
      path.setAttribute("stroke", "#ffffff");
    }
  }, [theme]);

  const modifyTheme = theme => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const openSubmenu = submenuID => {
    const submenu = document.getElementById(submenuID);
    submenu.style.display = "flex";
    submenu.previousSibling.setAttribute("aria-expanded", "true");
  };

  const closeSubmenu = submenuID => {
    const submenu = document.getElementById(submenuID);
    submenu.style.display = "none";
    submenu.previousSibling.setAttribute("aria-expanded", "false");
  };

  const focusHandler = toFocus => {
    document.getElementById(toFocus).focus();
  };

  return (
    <StyledNav aria-label="Navigation menu">
      <Menubar role="menubar" aria-label="Navigation menu">
        <li role="none">
          <InternalLink
            role="menuitem"
            to="main"
            circled={sectionContext.section === "main"}
          >
            Main
          </InternalLink>
        </li>
        <li role="none">
          <InternalLink
            role="menuitem"
            to="projects"
            circled={sectionContext.section === "projects"}
          >
            Projects
          </InternalLink>
        </li>
        <li role="none">
          <InternalLink
            role="menuitem"
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
            to="contact"
            circled={sectionContext.section === "contact"}
          >
            Contact
          </InternalLink>
        </li>
        <MenuItem
          className="others-two"
          role="none"
          onMouseEnter={e => {
            openSubmenu("themes-submenu-narrow");
          }}
          onMouseLeave={() => {
            closeSubmenu("themes-submenu-narrow");
          }}
        >
          <div
            role="menuitem"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Themes"
            tabIndex="0"
            onKeyDown={e => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                if (
                  document.getElementById("themes-submenu-narrow").style
                    .display === "flex"
                ) {
                  closeSubmenu("themes-submenu-narrow");
                } else {
                  setTimeout(() => {
                    openSubmenu("themes-submenu-narrow");
                  }, 200);
                }
              } else if (e.shiftKey && e.key === "Tab") {
                closeSubmenu("themes-submenu-narrow");
              }
            }}
          >
            Themes
          </div>
          <Popover id="themes-submenu-narrow" role="menu" aria-label="themes">
            {themes.map((theme, idx) => {
              return (
                <PopoverChild key={theme.themeName} itemKey={idx} role="none">
                  <button
                    id={`themes-submenu-narrow-${idx}`}
                    role="menuitem"
                    onClick={() => {
                      modifyTheme(theme.themeID);
                    }}
                    onKeyDown={e => {
                      if (e.key === "ArrowLeft") {
                        if (idx === themes.length - 1) {
                          focusHandler("themes-submenu-narrow-0");
                        } else {
                          focusHandler(`themes-submenu-narrow-${idx + 1}`);
                        }
                      } else if (e.key === "ArrowRight") {
                        if (idx === 0) {
                          focusHandler(
                            `themes-submenu-narrow-${themes.length - 1}`
                          );
                        } else {
                          focusHandler(`themes-submenu-narrow-${idx - 1}`);
                        }
                      } else if (e.shiftKey && e.key === "Tab") {
                        if (idx === 0) {
                          closeSubmenu("themes-submenu-narrow");
                        }
                      } else if (e.key === "Tab") {
                        if (idx === themes.length - 1) {
                          closeSubmenu("themes-submenu-narrow");
                        }
                      }
                    }}
                  >
                    <span className="sr-only">
                      {`Switch to ${theme.themeName} theme`}
                    </span>
                    {React.createElement(theme.element, {
                      "aria-hidden": "true",
                      focusable: "false"
                    })}
                  </button>
                </PopoverChild>
              );
            })}
          </Popover>
        </MenuItem>
        <MenuItem
          className="others-two"
          role="none"
          onMouseEnter={() => {
            openSubmenu("socials-submenu-narrow");
          }}
          onMouseLeave={() => {
            closeSubmenu("socials-submenu-narrow");
          }}
        >
          <div
            role="menuitem"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Socials"
            tabIndex="0"
            onKeyDown={e => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                if (
                  document.getElementById("socials-submenu-narrow").style
                    .display === "flex"
                ) {
                  closeSubmenu("socials-submenu-narrow");
                } else {
                  setTimeout(() => {
                    openSubmenu("socials-submenu-narrow");
                  }, 200);
                }
              } else if (e.shiftKey && e.key === "Tab") {
                closeSubmenu("socials-submenu-narrow");
              }
            }}
          >
            Socials
          </div>

          <Popover id="socials-submenu-narrow" role="menu" aria-label="socials">
            {socials.map((social, idx) => {
              return (
                <PopoverChild key={social.href} itemKey={idx} role="none">
                  <a
                    id={`socials-submenu-narrow-${idx}`}
                    role="menuitem"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onKeyDown={e => {
                      if (e.key === "ArrowLeft") {
                        if (idx === socials.length - 1) {
                          focusHandler("socials-submenu-narrow-0");
                        } else {
                          focusHandler(`socials-submenu-narrow-${idx + 1}`);
                        }
                      } else if (e.key === "ArrowRight") {
                        if (idx === 0) {
                          focusHandler(
                            `socials-submenu-narrow-${socials.length - 1}`
                          );
                        } else {
                          focusHandler(`socials-submenu-narrow-${idx - 1}`);
                        }
                      } else if (e.shiftKey && e.key === "Tab") {
                        if (idx === 0) {
                          closeSubmenu("socials-submenu-narrow");
                        }
                      } else if (e.key === "Tab") {
                        if (idx === socials.length - 1) {
                          closeSubmenu("socials-submenu-narrow");
                        }
                      }
                    }}
                  >
                    {React.createElement(social.element, {
                      "aria-hidden": "true",
                      focusable: "false"
                    })}
                  </a>
                </PopoverChild>
              );
            })}
          </Popover>
        </MenuItem>
        <li role="none">
          <Others>
            <MenuItem
              role="none"
              onMouseEnter={() => {
                openSubmenu("themes-submenu-wide");
              }}
              onMouseLeave={() => {
                closeSubmenu("themes-submenu-wide");
              }}
            >
              <div
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Themes"
                tabIndex="0"
                onKeyDown={e => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    if (
                      document.getElementById("themes-submenu-wide").style
                        .display === "flex"
                    ) {
                      closeSubmenu("themes-submenu-wide");
                    } else {
                      setTimeout(() => {
                        openSubmenu("themes-submenu-wide");
                      }, 200);
                    }
                  } else if (e.shiftKey && e.key === "Tab") {
                    closeSubmenu("themes-submenu-wide");
                  }
                }}
              >
                Themes
              </div>
              <Popover id="themes-submenu-wide" role="menu" aria-label="themes">
                {themes.map((theme, idx) => {
                  return (
                    <PopoverChild
                      key={theme.themeName}
                      itemKey={idx}
                      role="none"
                    >
                      <button
                        id={`themes-submenu-wide-${idx}`}
                        role="menuitem"
                        onClick={() => {
                          modifyTheme(theme.themeID);
                        }}
                        onKeyDown={e => {
                          if (e.key === "ArrowLeft") {
                            if (idx === themes.length - 1) {
                              focusHandler("themes-submenu-wide-0");
                            } else {
                              focusHandler(`themes-submenu-wide-${idx + 1}`);
                            }
                          } else if (e.key === "ArrowRight") {
                            if (idx === 0) {
                              focusHandler(
                                `themes-submenu-wide-${themes.length - 1}`
                              );
                            } else {
                              focusHandler(`themes-submenu-wide-${idx - 1}`);
                            }
                          } else if (e.shiftKey && e.key === "Tab") {
                            if (idx === 0) {
                              closeSubmenu("themes-submenu-wide");
                            }
                          } else if (e.key === "Tab") {
                            if (idx === themes.length - 1) {
                              closeSubmenu("themes-submenu-wide");
                            }
                          }
                        }}
                      >
                        <span className="sr-only">
                          {`Switch to ${theme.themeName} theme`}
                        </span>
                        {React.createElement(theme.element, {
                          "aria-hidden": "true",
                          focusable: "false"
                        })}
                      </button>
                    </PopoverChild>
                  );
                })}
              </Popover>
            </MenuItem>
            <MenuItem
              role="none"
              onMouseEnter={() => {
                openSubmenu("socials-submenu-wide");
              }}
              onMouseLeave={() => {
                closeSubmenu("socials-submenu-wide");
              }}
            >
              <div
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Socials"
                tabIndex="0"
                onKeyDown={e => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    if (
                      document.getElementById("socials-submenu-wide").style
                        .display === "flex"
                    ) {
                      closeSubmenu("socials-submenu-wide");
                    } else {
                      setTimeout(() => {
                        openSubmenu("socials-submenu-wide");
                      }, 200);
                    }
                  } else if (e.shiftKey && e.key === "Tab") {
                    closeSubmenu("socials-submenu-wide");
                  }
                }}
              >
                Socials
              </div>
              <Popover
                id="socials-submenu-wide"
                role="menu"
                aria-label="socials"
              >
                {socials.map((social, idx) => {
                  return (
                    <PopoverChild key={social.href} itemKey={idx} role="none">
                      <a
                        id={`socials-submenu-wide-${idx}`}
                        role="menuitem"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onKeyDown={e => {
                          if (e.key === "ArrowLeft") {
                            if (idx === socials.length - 1) {
                              focusHandler("socials-submenu-wide-0");
                            } else {
                              focusHandler(`socials-submenu-wide-${idx + 1}`);
                            }
                          } else if (e.key === "ArrowRight") {
                            if (idx === 0) {
                              focusHandler(
                                `socials-submenu-wide-${socials.length - 1}`
                              );
                            } else {
                              focusHandler(`socials-submenu-wide-${idx - 1}`);
                            }
                          } else if (e.shiftKey && e.key === "Tab") {
                            if (idx === 0) {
                              closeSubmenu("socials-submenu-wide");
                            }
                          } else if (e.key === "Tab") {
                            if (idx === socials.length - 1) {
                              closeSubmenu("socials-submenu-wide");
                            }
                          }
                        }}
                      >
                        {React.createElement(social.element, {
                          "aria-hidden": "true",
                          focusable: "false"
                        })}
                      </a>
                    </PopoverChild>
                  );
                })}
              </Popover>
            </MenuItem>
          </Others>
        </li>
      </Menubar>
    </StyledNav>
  );
};

export default FixedTools;
