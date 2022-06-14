module.exports = {
  siteMetadata: {
    title: `Landing-faq`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      baseUrl: 'wordpress-prod.iziwork.com',
      hostingWPCOM: false,
      protocol: 'https',
      useACF: true,
      auth: {},
      verboseOutput: false
    }
  }, "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-K9CY0DTZK5"
    }
  }]
};