import {MDXProvider} from '@mdx-js/react';
import Code from '../Code';
import React from 'react';

const components = {
  // img: ImageZoom,
  // a: Anchor,
  // blockquote: Blockquote,
  // h1: Headings.h2, // h1 reserved article title
  // h2: Headings.h2,
  // h3: Headings.h3,
  // h4: Headings.h4,
  // h5: Headings.h5,
  // h6: Headings.h6,
  // hr: HorizontalRule,
  // ul: Lists.ul,
  // ol: Lists.ol,
  // p: Paragraph,
  // span: Span,
  code: Code.Pre,
  pre: Code.Pre,
  // table: Tables.Table,
  // thead: Tables.Head,
  // th: Tables.HeadCell,
  // td: Tables.Cell,
};

export default function MDX({children}) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
