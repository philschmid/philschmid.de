import React from 'react';
import {Link} from 'gatsby';
import Image from '../base/Image/Image';

const PostLink = ({title, slug, date, excerpt, image}) => {
  return (
    <article className="post-link">
      <header className="post-link-header">
        <Image data={image}></Image>
        <h2>
          <Link to={slug}>{title || slug}</Link>
        </h2>
        <small>{date}</small>
      </header>
      <section className="post-link-excerpt">
        <p>{excerpt}</p>
      </section>
    </article>
  );
};

export default PostLink;
