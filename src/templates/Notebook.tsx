import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/default/Layout/Layout';
import NotebookTitle from '../components/notebooks/Notebook.Title';
import NotebookDate from '../components/notebooks/Notebook.Date';
import NotebookSEO from '../components/default/SEO/SEO.Notebook';

const Notebook = (props) => {
  const notebook = props.pageContext.notebook;

  return (
    <Layout>
      <NotebookSEO article={notebook} />
      <article className="Notebook ">
        <header>
          <NotebookTitle>{notebook.title}</NotebookTitle>
          <NotebookDate>{notebook.date}</NotebookDate>
        </header>
        <section className="w-Notebook m-auto">
          <MDXRenderer>{notebook.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default Notebook;
