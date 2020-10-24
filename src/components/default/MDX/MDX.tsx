import {MDXProvider} from '@mdx-js/react';
import Code from '../Code/Code.Block';
import React from 'react';

const components = {
  // img: ImageZoom,
  a: (props) => <a {...props} className=" text-primary visited:opacity-50 visited:text-primary hover:underline" />,
  blockquote: (props) => <blockquote {...props} className="my-12 px-4 md:px-8 italic text-xl md:text-3xl " />,
  h1: (props) => <h2 {...props} className="my-8 text-3xl leading-6" />,
  h2: (props) => <h2 {...props} className="my-8 text-2xl leading-5" />,
  h3: (props) => <h2 {...props} className="my-6 text-xl leading-4" />,
  // h4: Headings.h4,b-8
  // h5: Headings.h5,
  // h6: Headings.h6,
  hr: (props) => <hr {...props} className="divider border-0 text-center text-5xl mb-32 mt-12 box-content" />,
  ul: (props) => <ul {...props} className="pl-8 pt-4 pb-8 " />,
  li: (props) => <li {...props} className="relative  pb-4 leading-6" />,
  p: (props) => <p {...props} className="text-justify mb-12" />,
  // span: Span,
  inlineCode: (props) => <code {...props} className="bg-darkBlack text-primary px-1 rounded py-1" />,
  pre: Code,
  table: (props) => <table {...props} className="bg-darkBlack w-full rounded text-sm md:text-normal " />,
  thead: (props) => <thead {...props} className="font-bold font-semibold text-left" />,
  td: (props) => <td {...props} className="p-2  md:py-6 md:px-8 table-border border-gray-1 text-gray-1" />,
  th: (props) => <th {...props} className="p-2  md:py-6 md:px-8 " />,

  // table: Tables.Table,
  // thead: Tables.Head,
  // th: Tables.HeadCell,
  // td: Tables.Cell,
};

export default function MDX({children}) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
