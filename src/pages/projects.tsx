import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';
import ProjectLink from '../components/projects/Project.Link';

const projectsQuery = graphql`
  {
    allProjectsYaml {
      nodes {
        type
        excerpt
        tags
        title
        priority
        website
      }
    }
  }
`;

export default function Projects() {
  const projects = useStaticQuery(projectsQuery).allProjectsYaml.nodes.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
  const tags:any = [...new Set(projects.map((project) => project.tags).flat())];
  return (
    <Layout>
      <SEO pathname={'/projects'} title={'Projects'} description={'Project overview'} tags={tags} />
      <div className="mt-8 mb-8 md:mb-32">
        <h1 className="text-6xl font-serif mb-4">Projects</h1>
        {tags.map((tag) => (
          <span className="text-primary text-lg md:text-2xl" key={tag}>
            #{tag}{' '}
          </span>
        ))}
      </div>
      <main className="grid lg:grid-cols-2 flex-col gap-8">
        {projects.map((node) => (
          <ProjectLink key={node.title} {...node} />
        ))}
      </main>
    </Layout>
  );
}
