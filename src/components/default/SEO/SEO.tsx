/**
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';
import Facebook from './facebook';
import Twitter from './twitter';

function slugify(string) {
  const slug = string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  return `/${slug}`.replace(/\/\/+/g, '/');
}

interface HelmetProps {
  children?: React.ReactChildren;
  title: string;
  description?: string;
  pathname: string;
  tags: string[];
  image?: string;
  url?: string;
  canonical?: string;
  published?: string;
  readingTime?: string;
}

const seoQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            description
            social {
              url
            }
            siteUrl
            title
          }
        }
      }
    }
  }
`;

function SEO({title, description, children, url, image, published, pathname, readingTime, tags}: HelmetProps) {
  const results = useStaticQuery(seoQuery);
  const site = results.allSite.edges[0].node.siteMetadata;
  const twitter = site.social.find((option) => option.name === 'twitter') || {};

  const ogType = published ? 'article' : 'website';

  const fullURL = (path: string) => (path ? `${site.siteUrl}${path}` : site.siteUrl);

  return (
    <>
      <Helmet title={title || site.title}>
        <html lang={'en'} />

        <meta name="description" content={description || site.description} />
        <meta name="image" content={fullURL(image)} />

        {tags && <meta name="keywords" content={tags.join(' ')} />}
      </Helmet>
      <Facebook
        desc={description || site.description}
        image={fullURL(image)}
        title={title || site.title}
        type={ogType}
        url={site.siteUrl + slugify(pathname)}
      />
      <Twitter
        title={title || site.title}
        image={fullURL(image)}
        desc={description || site.description}
        published={published}
        readingTime={readingTime}
        tags={tags}
      />
    </>
  );
}

export default SEO;
