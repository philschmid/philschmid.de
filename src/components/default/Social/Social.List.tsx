import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Social from './Social';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
  }
`;

export default function SocialList() {
  const results = useStaticQuery(siteQuery);
  const social = results.allSite.edges[0].node.siteMetadata.social;
  return (
    <div className="flex flex-row space-x-12">
      {social.map((socialMedia) => (
        <Social key={socialMedia.url} {...socialMedia} />
      ))}
    </div>
  );
}
