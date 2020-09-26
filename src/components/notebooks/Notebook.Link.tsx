import React from 'react';
import {Link} from 'gatsby';
import Image from '../default/Image/Image';

const NotebookLink = ({title, slug, date, excerpt, image}) => {
  return (
    <article className="notebook-link">
      <header className="notebook-link-header">
        <h2>
          <Link to={slug}>{title || slug}</Link>
        </h2>
        <small>{date}</small>
      </header>
      <section className="notebook-link-excerpt">
        <p>{excerpt}</p>
      </section>
    </article>
  );
};

export default NotebookLink;
