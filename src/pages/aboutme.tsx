import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import Author15Seconds from '../components/author/Author.15Seconds';
import AuthorHeroAbout from '../components/author/Author.Hero.About';
import AuthorTechnology from '../components/author/Author.technology';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

const authorQuery = graphql`
  {
    allAuthorYaml {
      edges {
        node {
          name
          tags
          bio
          meIn15Seconds
          technologies {
            description
            machineLearning
            cloud
            nonMLFramework
          }
        }
      }
    }
  }
`;

export default function aboutme() {
  const {name, tags, bio, meIn15Seconds, technologies} = useStaticQuery(authorQuery).allAuthorYaml.edges[0].node;

  return (
    <Layout>
      <SEO pathname={'/aboutme'} title={`About Me | ${name}`} description={'About Me'} />
      <div className="mt-8 mb-8 md:mb-32 ">
        <h1 className="text-6xl font-serif mb-4"> {name}</h1>
        {tags.map((tag) => (
          <span className="text-primary text-lg md:text-2xl">#{tag} </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32">
        <AuthorHeroAbout bio={bio} />
        <Author15Seconds meIn15Seconds={meIn15Seconds} />
        <h2>⚡ Technologies </h2>
        <AuthorTechnology technologies={technologies} />
      </div>
    </Layout>
  );
}
