import React from 'react';
import AuthorMini from '../author/Author.Mini';

const PostDate = ({readingTime, date, tags}) => {
  return (
    <div className="mt-4 block ">
      {tags.map((tag) => (
        <span key={tag} className="text-primary text-2xl mb-4">
          #{tag}{' '}
        </span>
      ))}
      <div className="flex flex-row font-sans items-center text-gray-1 text-base mt-12">
        <AuthorMini />, {date} · {readingTime}
      </div>
    </div>
  );
};

export default PostDate;
