const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: {
    apod: ['./src/js/apod.js','./src/css/pod_style.css'],
    active: ['./src/js/active.js','./src/css/nav_style.css','./src/css/proj_style.css','./src/css/hero_style.css'],
    special_day: ['./src/js/special_day.js','./src/css/countdown.css'],
    calendar: ['./src/js/calendar.js','./src/css/cal_style.css'],
         }, // Adjust the entry point to your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: './js/[name].bundle.js', // Name of the bundled JavaScript file
  },
  plugins: [
    
    new webpack.HotModuleReplacementPlugin(),

    new DotenvWebpackPlugin({
      path: './.env',
    }),

    new HtmlWebpackPlugin({
      template: './src/html/home.html', // Path to your HTML template
      filename: './html/home.html', // Name of the generated HTML file
      chunks:['apod','active','special_day','calendar'],
    }),

    new HtmlWebpackPlugin({
      template: './src/html/about.html', // Path to your HTML template
      filename: './html/about.html', // Name of the generated HTML file
      chunks:['active'],
    }),

    new HtmlWebpackPlugin({
      template: './src/html/contact.html', // Path to your HTML template
      filename: './html/contact.html', // Name of the generated HTML file
      chunks:['active']
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    },
  },
};
