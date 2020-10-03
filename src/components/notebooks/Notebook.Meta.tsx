import React from 'react';
import AuthorMini from '../author/Author.Mini';
import Badge from '../default/Badges/Badge';

const NotebookMeta = ({date, tags, badges}) => {
  return (
    <div className="mt-4 block ">
      {tags.map((tag) => (
        <span key={tag} className="text-primary text-xl md:text-2xl mb-4">
          #{tag}{' '}
        </span>
      ))}
      <div className="flex flex-row font-sans items-center text-gray-1 text-sm md:text-base mt-2 md:mt-12">
        <AuthorMini />, {date}
      </div>
      <div className="flex flex-row space-x-4">
        {badges.map((badge) => (
          <Badge key={badge.name} {...badge} />
        ))}
      </div>
    </div>
  );
};

export default NotebookMeta;
