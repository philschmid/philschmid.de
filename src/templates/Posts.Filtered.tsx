import React from 'react';
import AuthorHero from '../components/author/Author.Hero';
import PostLink from '../components/blog/Post.Link';
import Pagination from '../components/default/Pagination/Pagination';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';
import PostHighlight from '../components/blog/Post.Highlight';

const PostsFilterView = (props) => {
  const {group, index, first, last, pageCount, pathPrefix, allTags, title} = props.pageContext;
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const sitePath = `${pathPrefix.substring(1)}/`;
  const reducedGroups = group.slice(1);

  return (
    <Layout>
      <SEO pathname={pathPrefix} title={`${title} Articles`} description={`${title} Articles`} />
      <div className="mt-8 mb-8 md:mb-32">
        <h1 className="text-6xl font-serif mb-4"> {title} Articles</h1>
        {allTags.map((tag) => (
          <span className="text-primary text-lg md:text-2xl" key={tag}>
            #{tag}{' '}
          </span>
        ))}
      </div>
      <main className="grid sm:grid-cols-2 xl:grid-cols-3 gap-16">
        <PostHighlight post={group[0]} />
        {reducedGroups.map((node) => (
          <PostLink key={node.slug} {...node} />
        ))}
      </main>{' '}
      <Pagination {...{nextUrl, previousUrl, index, first, last, pageCount, sitePath}} />
    </Layout>
  );
};

export default PostsFilterView;
