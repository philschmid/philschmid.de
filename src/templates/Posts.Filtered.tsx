import React from 'react';
import AuthorHero from '../components/author/Author.Hero';
import PostLink from '../components/blog/Post.Link';
import Pagination from '../components/default/Footer/Pagination';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';

const PostsFilterView = (props) => {
  console.log(props);
  const {group, index, first, last, pageCount, pathPrefix, allTags, title} = props.pageContext;
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  // console.log(props);
  return (
    <Layout>
      <SEO pathname={pathPrefix} title={`${title} Articles`} description={`${title} Articles`} />
      <SEO pathname={'/'} title={''} description={'Blog overview'} />
      <div className="mt-8 mb-32 ">
        <h1 className="text-6xl font-serif "> {title} Articles</h1>
        {allTags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
      <main className="grid sm:grid-cols-3  gap-16">
        {group.map((node) => (
          <PostLink key={node.slug} {...node} />
        ))}
      </main>{' '}
      <Pagination {...{nextUrl, previousUrl, index, first, last, pageCount}} />
    </Layout>
  );
};

export default PostsFilterView;
