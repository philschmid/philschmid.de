import React from 'react';
import Author15Seconds from '../components/author/Author.15Seconds';
import AuthorHeroAbout from '../components/author/Author.Hero.About';
import AuthorTechnology from '../components/author/Author.technology';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

const tags = ['AWS', 'Azure', 'Huggingface', 'Pytorch', 'Scikit-learn', 'Serverless', 'Kubeflow', 'React'];

export default function aboutme() {
  return (
    <Layout>
      <SEO pathname={'/aboutme'} title={'About Me | Philipp Schmid'} description={'About Me'} />
      <div className="mt-8 mb-8 md:mb-32 ">
        <h1 className="text-6xl font-serif mb-4"> Philipp Schmid</h1>
        {tags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32">
        <AuthorHeroAbout />
        <Author15Seconds />
        <h2>⚡ Technologies </h2>
        <AuthorTechnology />
      </div>
    </Layout>
  );
}
