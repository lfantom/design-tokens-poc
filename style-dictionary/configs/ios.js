const components = require("../../tokens/components");
const core = require("../../tokens/core");
const semantic = require("../../tokens/semantic");

module.exports = () => {
  return {
    // iOS Core Variables
    "app/ios/core": {
      transformGroup: "ios-swift",
      buildPath: `build/app/ios/core/`,
      files: core.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.h`,
          format: "ios/macros",
          filter: function (token) {
            return token.filePath.includes(`core/${tokenCategory}`);
          },
        };
      }),
    },

    "app/ios/semantic": {
      transformGroup: "ios-swift",
      buildPath: `build/app/ios/semantic/`,
      files: semantic.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.h`,
          format: "ios/macros",
          filter: function (token) {
            return token.filePath.includes(`semantic/${tokenCategory}`);
          },
        };
      }),
    },

    // Component partials
    "app/ios/components": {
      transformGroup: "ios-swift",
      buildPath: `build/app/ios/components/`,
      files: components.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.h`,
          format: "ios/macros",
          filter: function (token) {
            return token.filePath.includes(tokenCategory);
          },
        };
      }),
    },
  };
};
