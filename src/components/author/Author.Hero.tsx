import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(query);
  return (
    <div className="flex items-center flex-col text-center m-12">
      <Img fluid={data.file.childImageSharp.fluid} className="clip-circle" />
      <h4>Hello, I am Philipp a 24 years old Cloud & Machine Learning enthusiast.</h4>
    </div>
  );
};

export const query = graphql`
  query {
    file(relativePath: {eq: "philippschmid.png"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`;
