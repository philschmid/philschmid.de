import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

export default ({bio}) => {
  const data = useStaticQuery(query);
  return (
    <div className=" col-span-1 flex items-center justify-start flex-col text-left ">
      <Img fluid={data.file.childImageSharp.fluid} className="clip-circle" />

      <ul className="space-y-2 flex flex-col mt-4 leading-5">
        {bio.map((attr) => (
          <li key={attr}>{attr}</li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    file(relativePath: {eq: "philippschmid-medium.png"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`;
