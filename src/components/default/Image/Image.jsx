import React from 'react';
import Img from 'gatsby-image';

export default ({data}) => (
  <div>
    <Img fluid={data.childImageSharp.fluid} />
  </div>
);
