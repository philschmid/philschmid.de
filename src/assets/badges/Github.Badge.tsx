import React from 'react';

const GithubBadge: any = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-32 md:48" viewBox="0 0 117 20">
    <g transform="translate(-560 -169)">
      <rect width="117" height="20" rx="3" transform="translate(560 169)" fill="#5b626a" />
      <path
        d="M3,0H25a0,0,0,0,1,0,0V20a0,0,0,0,1,0,0H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z"
        transform="translate(560 169)"
        fill="#252a2e"
      />
      <path
        id="Octicons-mark-github"
        d="M7.5,0A7.5,7.5,0,0,0,5.128,14.616c.375.066.516-.159.516-.356,0-.178-.009-.769-.009-1.4-1.884.347-2.372-.459-2.522-.881a2.727,2.727,0,0,0-.769-1.059c-.262-.141-.637-.487-.009-.5a1.5,1.5,0,0,1,1.153.769,1.6,1.6,0,0,0,2.184.619,1.578,1.578,0,0,1,.478-1c-1.669-.187-3.412-.834-3.412-3.7a2.919,2.919,0,0,1,.769-2.016A2.7,2.7,0,0,1,3.581,3.1s.628-.2,2.063.769a7.071,7.071,0,0,1,3.75,0C10.828,2.9,11.456,3.1,11.456,3.1a2.7,2.7,0,0,1,.075,1.988A2.9,2.9,0,0,1,12.3,7.106c0,2.878-1.753,3.516-3.422,3.7A1.776,1.776,0,0,1,9.384,12.2c0,1-.009,1.809-.009,2.063,0,.2.141.431.516.356A7.5,7.5,0,0,0,7.5,0Z"
        transform="translate(565 172)"
        fill="#fff"
        fillRule="evenodd"
      />
      <text transform="translate(590 174)" fill="#fff" fontSize="11" fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif">
        <tspan x="0" y="9">
          View on Github
        </tspan>
      </text>
    </g>
  </svg>
);

export default GithubBadge;
