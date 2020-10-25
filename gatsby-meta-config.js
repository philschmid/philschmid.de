module.exports = {
  imageMaxWidth: 1380,
  excerptLength: 140,
  assetPath: `content/assets`,
  contentPath: `content/posts`,
  notebookPath: `content/notebooks`,
  authorPath: `content/author`,
  projectsPath: `content/projects`,
  basePath: `/`,
  baseMachineLearningPath: `/machine-learning`,
  baseCloudPath: `/cloud`,
  blogPostPageLength: 8,
  baseNotebooksPath: `/notebooks`,
  notebooksPageLength: 15,

  customSiteMetadata: {
    title: `Blog by Philipp Schmid`,
    name: `philschmid`,
    siteUrl: `https://www.philschmid.de`,
    description: `Hello, my name is Philipp. This is my blog. I write about cloud topics with an focus on AWS. My second passion is Machine Learning, where I write articles in the area of NLP and on how to leverage models like BERT, Roberta and GPT-2 to generate business value. I created this blog to share my knowledge and connect with people.`,
    hero: {
      heading: `Articles about Machine Learning and Cloud, NLP, AWS`,
      subheading: `think, code and share`,
      maxWidth: 652,
    },
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/_philschmid`,
      },
      {
        name: `Github`,
        url: `https://github.com/philschmid`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/schmid_philipp`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/philipp-schmid-a6a2bb196/`,
      },
      {
        name: `Medium`,
        url: `https://medium.com/@schmidphilipp1995`,
      },
    ],
  },
};
// https://github.com/JaeYeopHan/gatsby-starter-bee/blob/master/gatsby-meta-config.js
// module.exports = {
//   title: `Bee starter`,
//   description: `Blog posted about ...`,
//   author: `[Your Name]`,
//   introduction: `I explain with words and code. I explain with words and code. I explain with words and code.`,
//   siteUrl: `https://gatsby-starter-bee.netlify.com`, // Your blog site url
//   social: {
//     twitter: ``, // Your Twitter account
//     github: ``, // Your GitHub account
//     medium: ``, // Your Medium account
//     facebook: ``, // Your Facebook account
//     linkedin: ``, // Your LinkedIn account
//   },
//   icon: `content/assets/felog.png`, // Add your favicon
//   keywords: [`blog`],
//   comment: {
//     disqusShortName: '', // Your disqus-short-name. check disqus.com.
//     utterances: 'JaeYeopHan/gatsby-starter-bee', // Your repository for archive comment
//   },
//   configs: {
//     countOfInitialPost: 10, // Config your initial count of post
//   },
//   sponsor: {
//     buyMeACoffeeId: 'jbee',
//   },
//   share: {
//     facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
//   },
//   ga: '', // Add your google analytics tranking ID
// }
