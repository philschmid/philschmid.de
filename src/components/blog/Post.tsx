import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../default/Layout/Layout';
import PostTitle from './Post.Title';
import PostMeta from './Post.Meta';
import PostHero from './Post.Hero';
import PostSEO from '../default/SEO/SEO.Post';

const Post = ({data}) => {
  console.log(data);
  const post = data.blogPost;

  return (
    <Layout>
      <PostSEO article={post} />
      <article className="post">
        <header className=" mt-24 mb-4 md:max-w-xl lg:max-w-2xl  m-auto">
          <PostTitle>{post.title}</PostTitle>
          <PostMeta {...post} />
        </header>
        <PostHero post={post} />

        <section className="md:max-w-xl lg:max-w-2xl m-auto">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default Post;
