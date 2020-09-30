import {Link} from 'gatsby';
import React from 'react';

export default function Pagination({previousUrl, nextUrl, first, index, last, pageCount}) {
  const defaultPath = 'page';
  const nextPage = `/${defaultPath}/${nextUrl}`;
  const lastPage = index == 2 ? '/' : `/${defaultPath}/${previousUrl}`;
  return (
    <div className="flex">
      {(last || !first) && <Link to={lastPage}>{'<'}</Link>}
      {(previousUrl || nextUrl) && (
        <div>
          {index} of {pageCount}
        </div>
      )}
      {(first || !last) && <Link to={nextPage}>{'>'}</Link>}
    </div>
  );
}
