import {Link} from 'gatsby';
import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-4 gap-4 h-24 items-center">
      <Link to="/" className="col-span-1 font-serif text-white text-xl md:text-2xl">
        philschmid <span className="text-gray-1">blog</span>
      </Link>
      <Navigation />
    </header>
  );
}
