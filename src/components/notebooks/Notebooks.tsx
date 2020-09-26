import React from 'react';
import Layout from '../default/Layout/Layout';
import SEO from '../default/SEO/SEO';

import NotebookList from './Notebook.List';

const Notebooks = ({data}) => {
  const Notebooks = data.allNotebook.nodes;
  console.log(Notebooks);
  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Notebook overview'} />

      <main>
        <NotebookList Notebooks={Notebooks} />
      </main>
    </Layout>
  );
};

export default Notebooks;
