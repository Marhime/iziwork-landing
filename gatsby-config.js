module.exports = {
  siteMetadata: {
    title: `Landing-faq`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-K9CY0DTZK5"
    },
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Onboarding Iziwork Italia",
        short_name: "Onboarding Iziwork",
        start_url: "/",
        background_color: "#4040B2",
        theme_color: "#4040B2",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/new-logo-icon.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
  }]
};