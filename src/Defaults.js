import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    :root {
      --font-primary: "Open Sans";
      --font-secondary: "Oswald";
    
      --color-layer-top: #621055;
      --color-layer-middle: #b52b65;
      --color-layer-bottom: #d85a5a;
      --color-background: #d47e54;
      --color-text: #ffffff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      position: relative;
      background-color: var(--color-background);
    }

    ul {
      list-style: none;
    }

    button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .link {
      position: relative;
    }

    .link-underline-svg {
      position: absolute;
      top: 22px;
      left: -2px;
    }

    .link-underline-path {
      fill: transparent;
      stroke: var(--color-background);
      stroke-width: 5;
      stroke-linecap: round;
    }

    .link-circle-svg {
      position: absolute;
      top: -10px;
      left: -10px;
    }

    .link-circle-path {
      fill: transparent;
      stroke: var(--color-background);
      stroke-width: 15;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }

    .link-circle-path:hover {
      animation: circle-link 0.4s ease-out forwards;
    }

    @keyframes circle-link {
      to {
        stroke-dashoffset: 0;
      }
    }
`;

export default Defaults;
