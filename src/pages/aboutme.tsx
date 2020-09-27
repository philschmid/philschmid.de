import React from 'react';
import AuthorHero from '../components/author/Author.Hero';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

const tags = ['AWS', 'Azure', 'GCP', 'Pytorch', 'Scikit-learn', 'Kubernetes', 'Kubeflow', 'React', 'Preact'];

export default function aboutme() {
  return (
    <Layout>
      <SEO pathname={'/aboutme'} title={'About Me'} description={'About Me'} />
      <div className="mt-8 mb-32 ">
        <h1 className="text-6xl font-serif "> Philipp Schmid</h1>
        {tags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
      <AuthorHero />
    </Layout>
  );
}
