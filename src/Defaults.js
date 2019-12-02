import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    :root {
      --font-primary: "Roboto Mono";
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

      @media (max-width: 768px) {
        // background-color: blue;
      }
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
    //   border: 1px solid red;
    }

    .link-underline-svg {
      position: absolute;
      top: 22px;
      left: -2px;

      @media (max-width: 1220px) {
        top: 19px;
      }
      
      @media (max-width: 860px) {
        top: 16px;
      }
    }

    .link-underline-path {
      fill: transparent;
      stroke: var(--color-background);
      stroke-width: 7;
      stroke-linecap: round;

      @media (max-width: 1220px) {
        stroke-width: 6;
      }
      
      @media (max-width: 860px) {
        stroke-width: 5;
      }
    }

    .link-circle-svg {
      position: absolute;
      top: -10px;
      left: -10px;
    }

    .link-circle-path {
      display: none;
      fill: transparent;
      stroke: var(--color-background);
      stroke-width: 17;
      stroke-linecap: round;
      stroke-miterlimit: 10;

      @media (max-width: 1220px) {
        stroke-width: 15;
      }
      
      @media (max-width: 860px) {
        stroke-width: 13;
      }
    }

    .link:hover .link-circle-path {
      display: block;
      animation: circle-link 0.4s ease-out forwards;
    }

    @keyframes circle-link {
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes move-up {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
`;

export default Defaults;
