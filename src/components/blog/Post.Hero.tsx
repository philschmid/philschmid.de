import React from 'react';
import Image from 'gatsby-image';

const PostHero = ({post}) => (
  <>
    {post?.image?.childImageSharp && (
      <Image
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
        className="max-h-500"
      />
    )}
    <p className="text-sm md:text-base text-center text-gray-1">{post.photograph}</p>
  </>
);

export default PostHero;
