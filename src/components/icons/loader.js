import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
      <text
        x="50"
        y="58"
        fill="currentColor"
        fontFamily="monospace"
        fontSize="24"
        fontWeight="600"
        textAnchor="middle">
        PL
      </text>
    </g>
  </svg>
);

export default IconLoader;
