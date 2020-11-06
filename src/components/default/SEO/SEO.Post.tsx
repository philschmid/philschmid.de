import React from 'react';

import SEO from './SEO';

import {graphql, useStaticQuery} from 'gatsby';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            siteUrl
          }
        }
      }
    }
  }
`;

function ArticleSEO({article}: {article: any}) {
  const results = useStaticQuery(siteQuery);
  const name = results.allSite.edges[0].node.siteMetadata.name;
  const siteUrl = results.allSite.edges[0].node.siteMetadata.siteUrl;
  console.log(article);
  /**
   * For some reason `location.href` is undefined here when using `yarn build`.
   * That is why I am using static query `allSite` to get needed fields: name & siteUrl.
   */
  let microdata = `{
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${siteUrl + article.slug}"
    },
    "headline": "${article.title}",
    "image": "${siteUrl + article.image.childImageSharp.fluid.src}",
    "datePublished": "${article.dateForSEO}",
    "dateModified": "${article.dateForSEO}",
    "author": {
      "@type": "Person",
      "name": "Philipp Schmid"
    },
    "description": "${article.excerpt.replace(/"/g, '\\"')}",
    "publisher": {
      "@type": "Organization",
      "name": "${name}",
      "logo": {
        "@type": "ImageObject",
        "url": "${siteUrl}/icons/icon-512x512.png"
      }
    }
  }
`;
  /**
   * See here for the explanation of the regex above:
   * https://stackoverflow.com/a/23667311
   */

  return (
    <SEO
      title={article.title}
      description={article.excerpt}
      image={article.image.childImageSharp.fluid.src}
      timeToRead={article.readingTime}
      published={article.dateForSEO}
      pathname={article.slug}
      tags={article.tags}
    >
      <script type="application/ld+json">{microdata}</script>
    </SEO>
  );
}

export default ArticleSEO;
