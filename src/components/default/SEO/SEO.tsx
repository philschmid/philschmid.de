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
    {name: 'twitter:site', content: '@_philschmid'},
    {name: 'twitter:title', content: title || site.title},
    {name: 'twitter:description', content: description || site.description},
    {name: 'twitter:creator', content: '@_philschmid'},
    {
      name: 'twitter:image',
      content: fullURL(image),
    },

    {property: 'og:title', content: title || site.title},
    {property: 'og:url', content: site.siteUrl + slugify(pathname)},
    {property: 'og:image', content: fullURL(image)},
    {property: 'og:description', content: description || site.description},
    {property: 'og:site_name', content: site.title},
  ];

  if (slugify(pathname) === '/') {
    metaTags.push({property: 'og:type', content: 'website'});
  }

  if (published) {
    metaTags.push({property: 'og:type', content: 'article'});
    metaTags.push({name: 'article:published_time', content: published});
    metaTags.push({name: 'article:author', content: 'Philipp Schmid'});
    metaTags.push({name: 'article:section', content: tags[0]});
    tags.forEach((tag) => {
      metaTags.push({name: 'article:tag', content: tag});
    });
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
