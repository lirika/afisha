const webpack = require('webpack');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const buildPath = resolve(__dirname, './dist');

module.exports = env => {
  const isDevBuild = !(env && env.prod);
  const deployUrl = isDevBuild ? '/' : env.deployUrl;

  const scssConfigs = [isDevBuild ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'];

  let plugins = [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/categories.html',
    }),
  ];

  plugins.push(new CopyPlugin([{ from: './src/assets/', to: `${buildPath}/assets/` }]));

  if (!isDevBuild) {
    plugins.push(new MiniCssExtractPlugin({ filename: 'styles.[hash].css' }));

    plugins = plugins.concat([new OptimizeCSSAssetsPlugin({})]);
  }

  plugins.push(new ProgressBarPlugin());

  return [
    {
      node: false,
      mode: isDevBuild ? 'development' : 'production',
      stats: { modules: false },
      entry: ['./src/index.ts'],
      resolve: {
        extensions: ['.js', '.jsx', '.ts'],
        alias: {
          '@app': resolve(__dirname, '..'),
        },
      },
      output: {
        path: buildPath,
        publicPath: deployUrl,
        filename: 'bundle-[hash].js',
      },
      devServer: {
        hot: true,
        host: 'localhost',
        historyApiFallback: true,
        port: 3001,
        /*        proxy: {
          '/api': {
            target: 'https://localhost:8080',
            secure: false,
            changeOrigin: true,
          },
        },*/
      },
      module: {
        rules: [
          {
            test: /\.ts?$/,
            use: [
              {
                loader: 'awesome-typescript-loader',
                options: { useTranspileModule: true },
              },
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.(s?)css$/,
            use: scssConfigs,
          },
          {
            test: /\.(png|svg|jpg)$/,
            use: 'file-loader',
            issuer: /\.scss$/,
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
      optimization: {
        minimize: !isDevBuild,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              warnings: false,
              compress: {
                comparisons: false,
              },
              parse: {},
              mangle: true,
              output: {
                comments: false,
                ascii_only: true,
              },
            },
            parallel: true,
            cache: true,
            sourceMap: true,
          }),
        ],
      },
      plugins: plugins,
      devtool: isDevBuild ? 'source-map' : false,
    },
  ];
};
