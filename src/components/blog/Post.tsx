import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../default/Layout/Layout';
import PostTitle from './Post.Title';
import PostDate from './Post.Date';
import PostHero from './Post.Hero';
import PostSEO from '../default/SEO/SEO.Post';

const Post = ({data}) => {
  console.log(data);
  const post = data.blogPost;

  return (
    <Layout>
      <PostSEO article={post} />
      <article className="post">
        <header>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>

          <PostHero post={post} />
        </header>
        <section className="w-post m-auto">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default Post;
