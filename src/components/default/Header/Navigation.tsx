import {Link} from 'gatsby';
import React from 'react';

const sites = [
  {label: 'Blog', to: '/'},
  {label: 'Machine Learning', to: '/machine-learning'},
  {label: 'Cloud', to: '/cloud'},
  {label: 'Notebooks', to: '/notebooks'},
  {label: 'Projects', to: '/projects'},
  {label: 'About me', to: '/aboutme'},
];

export default function Navigation() {
  const [mobileNaviagtionActive, setMobileNaviagtionActive] = React.useState(false);
  return (
    <nav className="col-span-2 flex justify-end">
      {/* Mobile Navigation */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => {
          setMobileNaviagtionActive(!mobileNaviagtionActive);
        }}
      >
        <svg className="w-6 h-6  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {mobileNaviagtionActive && (
        <div className="lg:hidden origin-top-right fixed right-0 z-50 mobile-nav-bg w-full px-4">
          <div
            className="lg:hidden cursor-pointer float-right"
            onClick={() => {
              setMobileNaviagtionActive(!mobileNaviagtionActive);
            }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <ul className="   flex justify-evenly items-center flex-col h-screen ">
            {sites.map((site) => (
              <li className="">
                <Link to={site.to} activeClassName="active">
                  {site.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:schmidphilipp1995@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <ul className=" hidden lg:flex">
        {sites.map((site) => (
          <li className="hover:text-primary px-4" key={site.to}>
            <Link to={site.to} activeClassName="active">
              {site.label}
            </Link>
          </li>
        ))}
        <li className="hover:text-primary">
          <a href="mailto:schmidphilipp1995@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
