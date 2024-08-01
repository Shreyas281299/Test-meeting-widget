const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};

  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream"),
    assert: require.resolve("assert"),
    http: require.resolve("http"),
    https: require.resolve("https"),
    os: require.resolve("os"),
    url: require.resolve("url"),
    fs: false,
    util: require.resolve("util"),
    querystring: require.resolve("querystring"),
    vm: false,
  });

  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  config.ignoreWarnings = [/Failed to parse source map/];

  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: "pre",
    loader: require.resolve("source-map-loader"),
    resolve: {
      fullySpecified: false,
    },
  });

  return config;
};
