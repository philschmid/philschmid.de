import React from 'react';
import MDX from './MDX';
import Header from '../Header/Header';

export default function Layout({children}) {
  return (
    <div className="lg:container px-4 lg:m-auto">
      <Header />
      <MDX>{children}</MDX>
    </div>
  );
}
