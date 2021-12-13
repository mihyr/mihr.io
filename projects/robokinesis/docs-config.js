module.exports = {
    product: "Robokinesis",
    pathPrefix: "",
    productLogoPathD: "",
    productIconKey: "",
    contentRepo: "mihyr/robokinesis",
    contentRepoFolder: "robokinesis",
    externalLinks: [
      {
        title: "Homepage",
        url: "https://mihr.io/"
      },
      {
        title: "Projects",
        url: "https://projects.mihr.io/"
      },
    ],
    search: {
      indexName: "pegasus_drone",
      apiKey: "f23af949ddb593a485da54c40dcfd03b",
      algoliaOptions: {
        facetFilters:  '["project:Robokinesis"]'
    }
    },
    siteMetadata: {
      title: "Robokinesis",
      description: "Documentation for Mihir's Projects",
      author: "@mihyr",
      url: "http://mihr.io",
      image: "https://github.com/mihyr.png",
    }
  }