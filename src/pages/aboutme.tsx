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
      <SEO pathname={'/aboutme'} title={'About Me'} description={'About Me'} />
      <div className="mt-8 mb-32 ">
        <h1 className="text-6xl font-serif "> Philipp Schmid</h1>
        {tags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-32">
        <AuthorHeroAbout />
        <Author15Seconds />
        <h2>⚡ Technologies </h2>
        <AuthorTechnology />
      </div>
    </Layout>
  );
}
