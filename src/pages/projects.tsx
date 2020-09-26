import React from 'react';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

export default function Projects() {
  return (
    <Layout>
      <SEO pathname={'/projects'} title={'Projects'} description={'Project overview'} />

      <h1>Projects</h1>
    </Layout>
  );
}
