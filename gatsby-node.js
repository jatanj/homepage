const path = require("path");

const cssMinimizerPluginName = "CssMinimizerPlugin";

const srcPath = path.resolve(__dirname, "./src");
const scssPath = path.resolve(__dirname, "./scss");
const assetsPath = path.resolve(__dirname, "./assets");

exports.onCreateWebpackConfig = ({
  stage,
  actions,
  plugins,
  getConfig
}) => {
  const isDevelop = stage === `develop` || stage === `develop-html`;

  actions.setWebpackConfig({
    devtool: isDevelop && "eval-source-map",
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
    },
  });

  if (stage === 'build-javascript') {
    const config = getConfig();
    const minifyCssIndex = config.optimization.minimizer.findIndex(
      minimizer => minimizer.constructor.name === cssMinimizerPluginName
    );
    if (minifyCssIndex > -1) {
      config.optimization.minimizer[minifyCssIndex] = plugins.minifyCss({
        minimizerOptions: {
          preset: [
            `default`,
            {
              discardComments: {
                removeAll: true
              }
            },
          ],
        },
      });
      actions.replaceWebpackConfig(config);
    } else {
      console.error(`${cssMinimizerPluginName} not found`);
    }
  }
};
