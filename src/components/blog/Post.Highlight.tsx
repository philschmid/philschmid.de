import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

const PostHighlight = ({post}: any) => {
  const {title, slug, date, excerpt, image, readingTime, tags} = post;
  return (
    <Link to={slug} className="flex items-center  max-w-3xl">
      <article className="bg-darkBlack p-4 grid grid-cols-3 rounded-lg">
        <header className="col-span-2 space-y-4">
          <h1 className="text-3xl leading-7 hover:text-primary">{title || slug}</h1>
          <div>
            {' '}
            {tags.map((tag) => (
              <span key={tag} className="text-primary">
                #{tag}{' '}
              </span>
            ))}
          </div>

          <p className="text-gray-1 pb-12">{excerpt}</p>
          <small className="text-gray-2">
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
