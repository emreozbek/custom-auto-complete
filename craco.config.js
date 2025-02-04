const CracoAlias = require("craco-alias");

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig-paths.json", // or wherever you have defined your paths
      },
    },
  ],
};
