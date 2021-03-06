import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
const PostLink = ({title, slug, date, excerpt, thumbnail, readingTime}) => {
  return (
    <Link
      to={slug.slice(0, -1)}
      aria-label={slug.slice(0, -1)}
      className="hover:-translate-y-px scale-102 transform transition duration-300 ease-in-out"
    >
      <article className="max-w-lg rounded-lg overflow-hidden bg-darkBlack h-full  ">
        <Img className="w-full h-48" fluid={thumbnail.childImageSharp.fluid} />
        <section className="p-6 space-y-2">
          <header>
            <h2 className="text-xl hover:text-primary  transition duration-300 "> {title || slug}</h2>
          </header>
          <div className="text-gray-2 text-sm md:text-base font-semibold ">
            {date} · {readingTime}
          </div>
          <main>
            <p className="text-sm text-gray-1 text-truncate leading-3 md:leading-4 ">{excerpt}</p>
          </main>
        </section>
      </article>
    </Link>
  );
};

export default PostLink;
