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
        <header className=" mt-24 mb-8 md:max-w-xl lg:max-w-2xl xl:max-w-3xl m-auto">
          <PostTitle>{post.title}</PostTitle>
          <PostMeta {...post} />
        </header>
        <PostHero post={post} />

        <section className="w-post m-auto">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default Post;
