import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../../components/default/Layout/Layout';
import NotebookTitle from '../../components/blog/Post.Title';
import NotebookMeta from '../components/notebooks/Notebook.Meta';
import NotebookSEO from '../../components/default/SEO/SEO.Notebook';

const Notebook = (props) => {
  const notebook = props.pageContext.notebook;
  const badges = Object.entries(notebook.links).map((e) => ({name: e[0], url: e[1]}));
  return (
    <Layout>
      <NotebookSEO article={notebook} />
      <article className="w-notebook mx-auto ">
        <header>
          <NotebookTitle>{notebook.title}</NotebookTitle>
          <NotebookMeta {...{...notebook, badges}} />
        </header>
        <section className="">
          <MDXRenderer>{notebook.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default Notebook;
