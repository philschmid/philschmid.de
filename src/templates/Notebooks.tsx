import React from 'react';
import Pagination from '../components/default/Pagination/Pagination';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

import NotebookLink from '../components/notebooks/Notebook.Link';

const Notebooks = (props) => {
  const {group, index, first, last, pageCount, pathPrefix, allTags, title} = props.pageContext;
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const sitePath = `${pathPrefix.substring(1)}/`;

  return (
    <Layout>
      <SEO pathname={pathPrefix} title={`Notebooks`} description={`Notebook overview`} />

      <div className="mt-8 mb-8 md:mb-32">
        <h1 className="text-6xl font-serif mb-4 ">Notebooks</h1>
        {allTags.map((tag) => (
          <span className="text-primary text-lg md:text-2xl">#{tag} </span>
        ))}
      </div>
      <main className="flex flex-col space-y-8">
        {group.map((node) => (
          <NotebookLink key={node.slug} {...node} />
        ))}
      </main>
      <Pagination {...{nextUrl, previousUrl, index, first, last, pageCount, sitePath}} />
    </Layout>
  );
};

export default Notebooks;
