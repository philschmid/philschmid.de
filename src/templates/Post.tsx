import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/default/Layout/Layout';
import PostTitle from '../components/blog/Post.Title';
import PostMeta from '../components/blog/Post.Meta';
import PostHero from '../components/blog/Post.Hero';
import PostSEO from '../components/default/SEO/SEO.Post';

const Post = (props) => {
  // console.log(props);
  const post = props.pageContext.post;

  return (
    <Layout>
      <PostSEO article={post} />
      <article className="post">
        <header className="mt-4  md:mt-24 mb-4 md:max-w-xl lg:max-w-2xl  m-auto">
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
