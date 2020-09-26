import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

const PostHighlight = ({post}: any) => {
  const {title, slug, date, excerpt, image, readingTime, tags} = post;
  return (
    <Link to={slug} className="flex items-center">
      <article className="bg-darkBlack p-4 grid grid-cols-3 rounded-lg">
        <header className="col-span-2 space-y-4">
          <h2 className="hover:text-primary">{title || slug}</h2>
          <div>
            {' '}
            {tags.map((tag) => (
              <span>#{tag.toUpperCase()} </span>
            ))}
          </div>

          <p>{excerpt}</p>
          <small>
            {date} · {readingTime}
          </small>
        </header>
        <div className="col-span-1 h-full">
          <Img className=" h-full rounded-lg" fluid={image.childImageSharp.fluid} />
        </div>
      </article>
    </Link>
  );
};

export default PostHighlight;
