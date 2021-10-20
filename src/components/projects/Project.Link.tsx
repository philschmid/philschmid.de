import React from 'react';
import NotebookTitle from '../blog/Post.Title';
import Badge from '../default/Badges/Badge';

const NotebookLink = ({title, asset, tags, excerpt, type, github, examples, usage, website}) => {
  console.log(asset)
  return (
    <article className="rounded-lg overflow-hidden bg-darkBlack h-full space-y-4 px-8 py-4">
      <header className="col-span-4">
        <a target="_blank" rel="noopener" aria-label={`Link to ${website}`} href={website}>
          <h1 className="text-2xl md:text-3xl font-bold  xl:text-3xl hover:text-primary transition duration-300">
            {title}
          </h1>
        </a>
        {tags.map((tag) => (
          <span key={tag} className="text-primary text-xl md:text-xl mb-4">
            #{tag}{' '}
          </span>
        ))}
        {/* <span className="text-gray-2"> · Version {version}</span> */}
        <span className="text-gray-2"> · {type.map((name) => `${name}; `)}</span>
      </header>

      <section>
        <p className="text-gray-1 text-justify">{excerpt}</p>
      </section>
      <div className="flex flex-row space-x-4">
        {github && <Badge name={'github'} url={github} />}
        {examples && <Badge name={'examples'} url={examples} />}
      </div>
    </article>
  );
};

export default NotebookLink;
