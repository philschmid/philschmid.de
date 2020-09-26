import React from 'react';
import MDX from './MDX';
import Header from '../Header/Header';

export default function Layout({children}) {
  return (
    <div>
      <Header />
      <MDX>{children}</MDX>
    </div>
  );
}
