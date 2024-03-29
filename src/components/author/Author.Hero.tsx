import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import SocialList from '../default/Social/Social.List';

export default () => {
  const data = useStaticQuery(query);
  return (
    <div className="hidden md:flex w-1/3 col-span-1  items-center flex-col text-center m-12 space-y-4">
      <Img fluid={data.file.childImageSharp.fluid} className="clip-circle" />
      <h2 className="text-lg text-gray-1">Hello, I am Philipp Techincal Lead, Machine Learning & Cloud enthusiast.</h2>
      <SocialList />
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
