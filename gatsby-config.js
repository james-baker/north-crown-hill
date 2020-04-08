/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'North Crown Hill',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-160650606-1',
        head: true,
        siteSpeedSampleRate: 10
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'North Crown Hill',
        short_name: 'NCH',
        start_url: '/',
        background_color: '#ddeee7',
        theme_color: '#ddeee7',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'minimal-ui',
        icon: 'src/images/nchlogo.jpg',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: './src/'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ]
}
