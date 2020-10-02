import {Link} from 'gatsby';
import React from 'react';

export default function Footer() {
  return (
    <footer className="space-y-12 border-t-2 border-darkBlack py-12 mt-8">
      <div className="lg:container px-4 lg:mx-auto">
        <h1> Newsletter</h1>
      </div>
      <hr className="lg:container px-4 lg:m-auto text-darkBlack"></hr>
      <div className="grid grid-cols-2 lg:container px-4 lg:mx-auto">
        <div className="text-sm space-x-2 text-gray-1">
          <span className=" text-center font-sans">© {new Date().getFullYear()} Philipp Schmid</span>

          <span>|</span>
          <Link to="/imprint" className="hover:text-primary text-center font-sans">
            Imprint
          </Link>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:text-primary text-center font-sans">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
