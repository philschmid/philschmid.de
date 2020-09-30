module.exports.local = {
  notebooks: `{
    allnotebooks: allNotebook(sort: {fields: [date, title], order: DESC}, limit: 1000) {
      nodes {
        id
        slug
        excerpt
        title
        body
        date(formatString: "MMMM DD, YYYY")
        dateForSEO: date
        tags
        links {
          colab
          github
        }
      }
    }
  }`,
};
// thumbnail {
//   childImageSharp {
//     fluid(maxWidth: 400) {
//       ${GatsbyFluid_withWebp}
//     }
//   }
// }
