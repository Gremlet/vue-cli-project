module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "#ffe26e"
    },
    name: "The Cocktail App",
    themeColor: "#b767f5",
    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern:
            "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
        },
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: /^https:\/\/www\.thecocktaildb\.com\/api\/json\/v1\/v1\/search\.php\?i=.*$/
        },
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: /^https:\/\/www\.thecocktaildb\.com\/api\/json\/v2\/9973533\/search\.php\?s=.*$/
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.transformAssetUrls = {
          img: "src",
          image: "xlink:href",
          "b-avatar": "src",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src"
        };

        return options;
      });
  }
};
