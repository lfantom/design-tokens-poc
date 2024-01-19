const components = require("../../tokens/components");
const core = require("../../tokens/core");
const semantic = require("../../tokens/semantic");

module.exports = () => {
  return {
    // Android Core Variables
    "app/android/core": {
      transformGroup: "android",
      buildPath: `build/app/android/core/`,
      files: core.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.xml`,
          format: "android/resources",
          filter: function (token) {
            return token.filePath.includes(`core/${tokenCategory}`);
          },
        };
      }),
    },

    "app/android/semantic": {
      transformGroup: "android",
      buildPath: `build/app/android/semantic/`,
      files: semantic.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.xml`,
          format: "android/resources",
          filter: function (token) {
            return token.filePath.includes(`semantic/${tokenCategory}`);
          },
        };
      }),
    },

    // Component partials
    "app/android/components": {
      transformGroup: "android",
      buildPath: `build/app/android/components/`,
      files: components.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.xml`,
          format: "android/resources",
          filter: function (token) {
            return token.filePath.includes(tokenCategory);
          },
        };
      }),
    },
  };
};
