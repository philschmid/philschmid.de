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
  return (
    <nav className="col-span-2 flex justify-end">
      {/* Mobile Navigation */}
      {/* <ul className="flex md:hidden">
        {sites.map((site) => (
          <li>
            <Link to={site.to}>{site.label}</Link>
          </li>
        ))}
        <li>
          <a href="mailto:schmidphilipp1995@gmail.com">Contact</a>
        </li>
      </ul> */}
      {/* Desktop Navigation */}
      <ul className=" hidden lg:flex">
        {sites.map((site) => (
          <li className="hover:text-primary px-4">
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
