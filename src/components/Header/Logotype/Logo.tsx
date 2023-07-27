import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g>
        <g id="N" transform="translate(32.000000, 28.000000)">
          <path
            fill="currentColor"
            d="M 0 45 M 11 0 L 9 0 L 4 0 L 4 0 V 45 L 9 45 H 11 M 11 45 L 11 0 M 11 18 L 17 21 L 23 18 L 23 26 L 12 26 L 11 26 M 23 19 L 23 0 L 30 0 L 30 45 L 23 45"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;