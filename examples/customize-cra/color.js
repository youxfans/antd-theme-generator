const path = require("path");
const fs = require("fs");
const { generateTheme, getLessVars } = require("../../index");
// const { generateTheme, getLessVars } = require('../../../antd-theme-webpack-plugin/');
// const { generateTheme, getLessVars } = require('antd-theme-generator');

const themeVariables = getLessVars(
  path.join(__dirname, "./src/styles/vars.less")
);
const colorsVars = getLessVars(
  "./node_modules/antd/lib/style/color/colors.less"
);
const lightVars = {
  ...colorsVars,
  ...getLessVars("./node_modules/antd/lib/style/themes/default.less"),
  "@primary-color": "@cyan-base",
};
const darkVars = {
  ...lightVars,
  ...getLessVars("./node_modules/antd/lib/style/themes/dark.less"),
  "@primary-color": "@orange-base",
};
fs.writeFileSync("./src/dark.json", JSON.stringify(darkVars));
fs.writeFileSync("./src/light.json", JSON.stringify(lightVars));
fs.writeFileSync("./src/theme.json", JSON.stringify(themeVariables));

const options = {
  stylesDir: path.join(__dirname, "./src"),
  antDir: path.join(__dirname, "./node_modules/antd"),
  varFile: path.join(__dirname, "./src/styles/vars.less"),
  themeVariables: Array.from(
    new Set([
      ...Object.keys(darkVars),
      ...Object.keys(lightVars),
      ...Object.keys(themeVariables),
    ])
  ),
  outputFilePath: path.join(__dirname, "./public/color.less"),
};

generateTheme(options)
  .then((less) => {
    console.log("Theme generated successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });
