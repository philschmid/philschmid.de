import React from 'react';
import {Helmet} from 'react-helmet';

interface Props {
  type?: string;
  title: string;
  desc: string;
  image: string;
  published: string;
  readingTime: string;
  tags: string[];
}

export default ({type = 'summary_large_image', title, desc, image, published, tags, readingTime}: Props) => (
  <Helmet>
    <meta name="twitter:creator" content={'@_philschmid'} />
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={desc} />

    {published && tags && tags.forEach((tag) => <meta name="article:tag" content={tag} />)}

    {published && <meta name="article:published_time" content={published} />}
    {published && <meta name="article:author" content="Philipp Schmid" />}
    {published && <meta name="article:section" content={tags[0]} />}

    {readingTime && <meta name="twitter:label1" content={'Reading time'} />}
    {readingTime && <meta name="twitter:data1" content={readingTime} />}
  </Helmet>
);
