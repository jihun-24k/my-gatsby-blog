module.exports = {
  siteMetadata: {
    title: `MyGatsbyBlog`,
    description: '개발 일지록',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
