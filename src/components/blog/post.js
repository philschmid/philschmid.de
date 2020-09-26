import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from './layout';
import PostTitle from './post-title';
import PostDate from './post-date';
import PostHero from './post-hero';

const Post = ({data}) => {
  const post = data.blogPost;
  return (
    <Layout>
      <article className="post">
        <header>
          <PostHero post={post} />
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
        </header>
        <section className="post-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default Post;
