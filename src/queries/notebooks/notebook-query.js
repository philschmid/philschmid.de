import {graphql} from 'gatsby';
import NotebookPage from '../../components/notebooks/Notebook';

export default NotebookPage;

export const query = graphql`
  query NotebookPageQuery($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    notebook(id: {eq: $id}) {
      id
      body
      slug
      title
      excerpt
      tags
      links {
        colab
        github
      }
      date(formatString: "MMMM DD, YYYY")
      dateForSEO: date
    }
    previous: notebook(id: {eq: $previousId}) {
      id
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: notebook(id: {eq: $nextId}) {
      id
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
