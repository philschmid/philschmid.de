import {Link} from 'gatsby';
import React from 'react';
import {debounce} from 'throttle-debounce';

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
  const [searchResults, setSearchResults] = React.useState([]);

  const throttledFetch = React.useCallback(
    debounce(300, (query) => {
      if (query === '') {
        // reset search string
        setSearchString('');

        // reset search results so that search results disappear
        setSearchResults([]);
        return;
      }
      fetch(
        `https://www.googleapis.com/customsearch/v1?cx=016785734983229310196:ufi7ijnkbjh&key=AIzaSyCZ2EOwjQyRSM7GbzM961e0LkkcwIItvN0&q=${query}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchString(query);
          if (data.items) {
            setSearchResults(data.items);
          }
        });
    }),
    [],
  );

  return (
    <React.Fragment>
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

            <ul className="  flex justify-evenly items-center flex-col h-screen font-sans">
              {sites.map((site) => (
                <li key={site.to} className="hover:text-primary">
                  <Link to={site.to} activeClassName="active">
                    {site.label}
                  </Link>
                </li>
              ))}
              <li className="font-sans hover:text-primary">
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
      {searchActive && (
        <div className="mt-24 absolute z-20 mobile-nav-bg -mx-4 w-full  lg:max-w-screen-lg xl:max-w-screen-xl	 px-4">
          <input
            className="w-full  m-auto bg-darkBlack p-2 mb-4 outline-none"
            placeholder="Search...."
            value={searchString}
            onChange={(event) => {
              // console.log(event);
              setSearchString(event.target.value);
              throttledFetch(event.target.value);
            }}
          />

          {searchResults.length > 0 && (
            <div className="flex flex-col divide-y divide-gray-2 pb-8 space-y-8 ">
              {searchResults
                .filter((item) => item.link !== 'https://www.philschmid.de/')
                .map((item, index) => (
                  <div key={index} className="flex flex-col pt-4">
                    <a href={item.link}>
                      <h4 className="hover:text-primary">{item.title}</h4>
                    </a>
                    {item.pagemap?.metatags?.length > 0 && (
                      <p className="text-gray-2">
                        {item.pagemap.metatags[0]['article:published_time']} <br></br>
                        {item.pagemap.metatags[0]['og:description']}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
}
