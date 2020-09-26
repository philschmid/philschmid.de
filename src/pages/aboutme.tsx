import React from 'react';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

export default function aboutme() {
  return (
    <Layout>
      <SEO pathname={'/aboutme'} title={'About Me'} description={'About Me'} />

      <h1>About me</h1>
    </Layout>
  );
}
