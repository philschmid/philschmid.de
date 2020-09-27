import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
const PostLink = ({title, slug, date, excerpt, image, readingTime}) => {
  return (
    <Link to={slug}>
      <article className="max-w-lg rounded overflow-hidden bg-darkBlack h-full">
        <Img className="w-full h-48" fluid={image.childImageSharp.fluid} />
        <header className="post-link-header p-6 -mb-4">
          <h2 className="text-xl hover:text-primary "> {title || slug}</h2>
          <small className="text-gray-2">
            {date} · {readingTime}
          </small>
        </header>
        <section className="post-link-excerpt p-6">
          <p className="text-sm text-gray-1">{excerpt}</p>
        </section>
      </article>
    </Link>
  );
};

export default PostLink;
