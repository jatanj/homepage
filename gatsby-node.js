const path = require("path");

const srcPath = path.resolve(__dirname, "./src");
const scssPath = path.resolve(__dirname, "./scss");
const assetsPath = path.resolve(__dirname, "./assets");

exports.onCreateWebpackConfig = ({
  actions,
  getConfig
}) => {
  const config = getConfig();
  const isDevelopment = config.mode === "development";
  actions.setWebpackConfig({
    devtool: isDevelopment && "eval-source-map",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: [
        path.resolve(__dirname, "node_modules"),
        srcPath,
        scssPath,
        assetsPath
      ],
      alias: {
        "@app": srcPath,
        "@scss": scssPath,
        "@assets": assetsPath
      }
    }
  });
};
