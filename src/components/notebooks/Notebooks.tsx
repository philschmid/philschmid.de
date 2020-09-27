import React from 'react';
import Layout from '../default/Layout/Layout';
import SEO from '../default/SEO/SEO';

import NotebookList from './Notebook.List';

const Notebooks = ({data}) => {
  const notebooks = data.allNotebook.nodes;
  const tags = [...new Set(notebooks.map((nb) => nb.tags).flat())];

  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Notebook overview'} />
      <div className="mt-8 mb-32 ">
        <h1 className="text-6xl font-serif ">Notebooks</h1>
        {tags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
      <main>
        <NotebookList Notebooks={notebooks} />
      </main>
    </Layout>
  );
};

export default Notebooks;
