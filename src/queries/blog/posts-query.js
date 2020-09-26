import {graphql} from 'gatsby';
import PostsPage from '../../components/blog/posts';

export default PostsPage;

export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: {fields: [date, title], order: DESC}, limit: 1000) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        links {
          colab
          github
        }
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;
