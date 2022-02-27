module.exports = {
    product: "Docs",
    pathPrefix: "",
    productLogoPathD: "",
    productIconKey: "",
    contentRepo: "mihyr/mihr.io",
    contentRepoFolder: "docs",
    externalLinks: [
      {
        title: "Homepage",
        url: "https://mihr.io/"
      },
      {
        title: "Projects",
        url: "https://mihr.io/#projects"
      },
    ],
    search: {
      indexName: "pegasus_drone",
      apiKey: "f23af949ddb593a485da54c40dcfd03b",
      algoliaOptions: {
        facetFilters:  '["project:Docs"]'
    }
    },
    siteMetadata: {
      title: "Docs",
      description: "Documentation for Mihir's engine Docs",
      author: "@mihyr",
      url: "https://mihr.io/#projects",
      image: "https://github.com/mihyr.png",
    }
  }