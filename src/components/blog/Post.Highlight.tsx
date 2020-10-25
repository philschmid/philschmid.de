import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

const PostHighlight = ({post}: any) => {
  const {title, slug, date, excerpt, image, readingTime, tags} = post;
  return (
    <Link
      to={slug.slice(0, -1)}
      className="flex items-center col-span-1  md:col-span-2  hover:-translate-y-px transform scale-102 transition duration-300 ease-in-out"
      aria-label={slug.slice(0, -1)}
    >
      <article className="bg-darkBlack grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 rounded-lg overflow-hidden h-full">
        <div className=" h-full">
          <Img className="h-48 md:h-full " fluid={image.childImageSharp.fluid} />
        </div>
        <section className="p-6  space-y-4">
          <header>
            <h2 className=" text-xl md:text-3xl md:leading-7 hover:text-primary  transition duration-300">
              {title || slug}
            </h2>
          </header>
          <div className="text-gray-2 text-sm md:text-base font-semibold ">
            {date} · {readingTime}
          </div>
          <main>
            <p className="text-sm md:text-base text-gray-1  text-truncate leading-3 md:leading-4 ">{excerpt}</p>
          </main>
        </section>
      </article>
    </Link>
  );
};

export default PostHighlight;
