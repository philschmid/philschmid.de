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
  const [searchActive, setSearchActive] = React.useState(false);
  const [searchString, setSearchString] = React.useState('');

  return (
    <nav className="col-span-1  md:col-span-3 flex justify-end text-gray-1">
      {/* Suche */}
      <div
        className="cursor-pointer px-4 hover:text-primary  transition duration-300"
        onClick={() => {
          setSearchActive(!searchActive);
        }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {searchActive && (
        <div className="mt-12 absolute z-20 mobile-nav-bg w-full flex justify-center ">
          <input
            className="m-auto bg-darkBlack p-2 mb-4 outline-none"
            placeholder="Search"
            value={searchString}
            onChange={(event) => {
              // console.log(event);
              setSearchString(event.target.value);
            }}
          />
        </div>
      )}

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
        <div className="lg:hidden origin-top-right fixed top-0  right-0 z-50 mobile-nav-bg w-full px-4">
          <div
            className="lg:hidden cursor-pointer float-right h-24 flex items-center"
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

          <ul className="hover:text-primary   flex justify-evenly items-center flex-col h-screen font-sans">
            {sites.map((site) => (
              <li key={site.to}>
                <Link to={site.to} activeClassName="active">
                  {site.label}
                </Link>
              </li>
            ))}
            <li className="hover:text-primary font-sans">
              <a href="mailto:schmidphilipp1995@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <ul className=" hidden lg:flex">
        {sites.map((site) => (
          <li className="hover:text-primary transition duration-300 px-4 text-center font-sans" key={site.to}>
            <Link to={site.to} activeClassName="active">
              {site.label}
            </Link>
          </li>
        ))}
        <li className="hover:text-primary transition duration-300 px-4 text-center font-sans">
          <a href="mailto:schmidphilipp1995@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
