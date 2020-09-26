import React from 'react';
import MDX from './MDX';
import Header from '../Header/Header';

export default function Layout({children}) {
  return (
    <div className="container px-4 md:m-auto">
      <Header />
      <MDX>{children}</MDX>
    </div>
  );
}
