import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

const projectsQuery = graphql`
  {
    allProjectsYaml {
      nodes {
        title
        tags
      }
    }
  }
`;

export default function Projects() {
  const projects = useStaticQuery(projectsQuery).allProjectsYaml.nodes;
  const tags = [...new Set(projects.map((project) => project.tags).flat())];
  return (
    <Layout>
      <SEO pathname={'/projects'} title={'Projects'} description={'Project overview'} />
      <div className="mt-8 mb-32 ">
        <h1 className="text-6xl font-serif mb-4">Projects</h1>
        {tags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
    </Layout>
  );
}
