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

interface HelmetProps {
  children?: React.ReactChildren;
  title: string;
  description?: string;
  pathname: string;
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

function SEO({title, description, children, url, image, published, pathname, readingTime}: HelmetProps) {
  const results = useStaticQuery(seoQuery);
  const site = results.allSite.edges[0].node.siteMetadata;
  const twitter = site.social.find((option) => option.name === 'twitter') || {};

  const fullURL = (path: string) => (path ? `${site.siteUrl}${path}` : site.siteUrl);

  const metaTags = [
    {charset: 'utf-8'},
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
    {
      rel: 'canonical',
      href: fullURL(pathname),
    },
    {itemprop: 'name', content: title || site.title},
    {itemprop: 'description', content: description || site.description},
    {itemprop: 'image', content: fullURL(image)},
    {name: 'description', content: description || site.description},

    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:site', content: site.name},
    {name: 'twitter:title', content: title || site.title},
    {name: 'twitter:description', content: description || site.description},
    {name: 'twitter:creator', content: twitter.url},
    {
      name: 'twitter:image',
      content: fullURL(image),
    },

    {property: 'og:title', content: title || site.title},
    {property: 'og:url', content: url},
    {property: 'og:image', content: fullURL(image)},
    {property: 'og:description', content: description || site.description},
    {property: 'og:site_name', content: site.name},
  ];

  if (published) {
    metaTags.push({name: 'article:published_time', content: published});
  }

  if (readingTime) {
    metaTags.push({name: 'twitter:label1', content: 'Reading time'});
    metaTags.push({name: 'twitter:data1', content: readingTime});
  }

  return (
    <Helmet title={title || site.title} htmlAttributes={{lang: 'en'}} meta={metaTags}>
      {children}
    </Helmet>
  );
}

export default SEO;
