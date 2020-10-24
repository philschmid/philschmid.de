import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(query);
  return (
    <div className="inline-block md:flex flex-col md:flex-row items-center">
      <Img fluid={data.file.childImageSharp.fluid} className="clip-circle-sm hidden md:flex" />
      <Link className="hover:text-primary" to={'/philipp-schmid'}>
        <h3 className="text-sm md:text-base " style={{fontWeight: 'bold'}}>
          Philipp Schmid
        </h3>
      </Link>
    </div>
  );
};

export const query = graphql`
  query {
    file(relativePath: {eq: "philippschmid-min.png"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`;
