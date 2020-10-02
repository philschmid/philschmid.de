import React from 'react';
import Pagination from '../components/default/Pagination/Pagination';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

import NotebookLink from '../components/notebooks/Notebook.Link';

const Notebooks = (props) => {
  const {group, index, first, last, pageCount, pathPrefix, allTags, title} = props.pageContext;
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Notebook overview'} />
      <div className="mt-8 mb-32 ">
        <h1 className="text-6xl font-serif ">Notebooks</h1>
        {allTags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
      <main className="grid sm:grid-cols-2 xl:grid-cols-3 gap-16">
        {group.map((node) => (
          <NotebookLink key={node.slug} {...node} />
        ))}
      </main>
      <Pagination {...{nextUrl, previousUrl, index, first, last, pageCount}} />
    </Layout>
  );
};

export default Notebooks;
