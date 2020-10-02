import React from 'react';
import MDX from '../MDX/MDX';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({children}) {
  return (
    <React.Fragment>
      <div className="lg:container px-4 lg:m-auto">
        <Header />
        <MDX>{children}</MDX>
      </div>
      <Footer />
    </React.Fragment>
  );
}
