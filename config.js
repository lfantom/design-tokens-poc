const StyleDictionary = require("style-dictionary");
// const StyleDictionary = require("style-dictionary-utils");

// ---- Include custom parsers ----
const w3cParser = require("./style-dictionary/parsers/w3c-token-json"); // converts w3c token syntax to regular json

// ---- Include custom formats ----
require("./style-dictionary/formats/figma")(StyleDictionary); // transforms tokens to figma json format

// ---- Include custom transforms ----
require("./style-dictionary/transforms/tokens-studio/sd-transforms")(StyleDictionary); // tokens studio transform group
require("./style-dictionary/transforms/css/padding")(StyleDictionary); // custom css padding shorthand transform

// ---- Include custom transformsGroups ----
require("./style-dictionary/transformGroups/web")(StyleDictionary); // custom web transforms, extending tokens studio

// ---- Include custom config ----
const { "css/core": cssCore, "css/semantic": cssSemantic, "scss/components": scssComponents } = require("./style-dictionary/configs/web")();

const { "json/figma": figmaJSON } = require("./style-dictionary/configs/figma")();

const { "app/ios/core": iOSCore, "app/ios/semantic": iOSSemantic, "app/ios/components": iOSComponents } = require("./style-dictionary/configs/ios")();

const {
  "app/android/core": androidCore,
  "app/android/semantic": androidSemantic,
  "app/android/components": androidComponents,
} = require("./style-dictionary/configs/android")();

module.exports = {
  parsers: [w3cParser],
  source: ["tokens/**/*.json"],
  platforms: {
    cssCore,
    cssSemantic,
    scssComponents,
    figmaJSON,
    iOSCore,
    iOSSemantic,
    iOSComponents,
    androidCore,
    androidSemantic,
    androidComponents,
  },
};
