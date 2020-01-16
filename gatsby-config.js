/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Add common site data (not required by the theme, but recommended)
  siteMetadata: {
    title: "Thomas Hinds Media",
    description: "",
    siteUrl: "https://thomashindsmedia.com"
  },
  plugins: [
    // Add gatsby-theme-musician to your site
    {
      resolve: "gatsby-theme-musician",
      // More info about the theme options:
      // https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-options
      options: {
        // These are default values that you can override
        // basePath: `/`,
        // content: `content`,
        // pwaName: null
      }
    },
     // Add gatsby-plugin-mailchimp
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // Find the POST URL for signing up to your list with an embedded form
        endpoint: 'https://thomashindsmedia.us4.list-manage.com/subscribe/post?u=3104bf792d5c0d275a2c015e8&amp;id=9a82b9d3e2',
      },
    },
  ]
};
