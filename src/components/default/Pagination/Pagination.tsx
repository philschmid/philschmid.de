import {Link} from 'gatsby';
import React from 'react';

const range = (len: number) => Array.from({length: len}, (_, i) => i + 1);

export default function Pagination({previousUrl, nextUrl, first, index, last, pageCount, sitePath}) {
  // machine-learning/
  const defaultPath = `${sitePath}page`;
  const nextPage = `/${defaultPath}/${nextUrl}`;
  const lastPage = index == 2 ? `/${sitePath}` : `/${defaultPath}/${previousUrl}`;
  return (
    pageCount !== 1 && (
      <div className="flex space-x-4 md:space-x-8 mt-12 md:mt-24 md:justify-start justify-center">
        {(last || !first) && (
          <Link className="flex items-center font-semibold hover:underline" to={lastPage}>
            Prev
          </Link>
        )}
        {(previousUrl || nextUrl) && (
          <React.Fragment>
            <div className="flex md:hidden font-sans text-gray-2">
              {index} of {pageCount}
            </div>

            {range(pageCount).map((pageNumber) => (
              <Link
                className={`${
                  index === pageNumber ? 'font-semibold text-white' : 'text-gray-2'
                } hidden md:flex hover:underline`}
                to={pageNumber == 1 ? `/${sitePath}` : `/${defaultPath}/${pageNumber}`}
                key={pageNumber}
              >
                {pageNumber}
              </Link>
            ))}
          </React.Fragment>
        )}
        {(first || !last) && (
          <Link className="flex items-center font-semibold hover:underline" to={nextPage}>
            Next
          </Link>
        )}
      </div>
    )
  );
}
