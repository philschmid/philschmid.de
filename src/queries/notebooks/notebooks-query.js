import {graphql} from 'gatsby';
import NotebookPage from '../../components/blog/posts';

export default NotebookPage;

export const query = graphql`
  query NotebooksQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allNotebook(sort: {fields: [date, title], order: DESC}, limit: 1000) {
      nodes {
        id
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        dateForSEO: date
        tags
        links {
          colab
          github
        }
      }
    }
  }
`;
