import {Link} from 'gatsby';
import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="grid grid-cols-3 gap-4">
      <Link to="/" className="col-span-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="233" height="35" viewBox="0 0 233 35">
          <text
            id="philschmid_blog"
            data-name="philschmid blog"
            transform="translate(0 27)"
            fill="#aaa"
            fontSize="27"
            fontFamily="Merriweather-Bold, Merriweather"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              philschmid
            </tspan>
            <tspan y="0" fill="#898989">
              {' '}
            </tspan>
            <tspan y="0" fill="#555">
              blog{' '}
            </tspan>
          </text>
        </svg>
      </Link>{' '}
      <Navigation />
    </header>
  );
}
