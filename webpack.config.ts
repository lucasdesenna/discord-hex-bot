import fs from "fs";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const lambdasDirPath = "./src/lambdas/";

const getEntryName = (fileName: string): string | null => {
  const match = fileName.match(/^([\w-\d]+)\.ts$/);

  return match && match[1];
};

const getEntryPath = (fileName: string) => lambdasDirPath + fileName;

const entry = fs.readdirSync(lambdasDirPath).reduce((entry, fileName) => {
  const entryName = getEntryName(fileName);

  return entryName
    ? {
        ...entry,
        [entryName]: getEntryPath(fileName),
      }
    : entry;
}, {});

const config = (env: Configuration) => ({
  mode: env.mode ? "production" : "development",
  target: "node",
  externalsPresets: { node: true },
  entry,
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
});

export default config;
