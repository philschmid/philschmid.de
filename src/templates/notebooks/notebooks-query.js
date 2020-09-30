import {graphql} from 'gatsby';
import NotebookPage from '../../components/notebooks/Notebooks';

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
        excerpt
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
