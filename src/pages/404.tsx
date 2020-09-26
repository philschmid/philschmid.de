import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Headings from '@components/Headings';
import Paragraph from '@components/Paragraph';

export default () => {
  return (
    <Layout>
      <SEO
        pathname={'404'}
        title={'404 - Error'}
        description={'404 Not Found Page'}
      />
      <Section narrow style={{textAlign: 'center'}}>
        <br />

        <br />

        <Headings.h1>404 </Headings.h1>
        <br />
        <Headings.h2>Requested Page not found</Headings.h2>
        <br></br>
      </Section>
    </Layout>
  );
};
