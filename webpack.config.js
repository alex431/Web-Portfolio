const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {

    apod_feature: ['./src/js/apod.js', './src/css/apod_style.css'],
    // apod:'./src/js/apod.js',
    // apod_style: './src/css/apod_style.css',

    time_feature: ['./src/js/special_day.js', './src/css/countdown.css'],
    // special_day: './src/js/special_day.js',
    // countdown: './src/css/countdown.css',

    calendar_feature: ['./src/js/calendar.js', './src/css/cal_style.css'],
    // calendar:'./src/js/calendar.js',
    // cal_style: './src/css/cal_style.css', 

    nav_feature: ['./src/js/active.js', './src/css/nav_style.css'],
    // active: './src/js/active.js',
    // nav_style: './src/css/nav_style.css',

    hero_style: './src/css/hero_style.css',
    proj_style: './src/css/proj_style.css',

    about_style: './src/css/about_style.css'
  }, // Adjust the entry point to your main JavaScript file
  
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'js/[name].js', // Name of the bundled JavaScript file
  },
  
  plugins: [

    new CleanWebpackPlugin(),

    // new webpack.HotModuleReplacementPlugin(),

    new DotenvWebpackPlugin({
      path: './.env',
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    new HtmlWebpackPlugin({
      template: './src/html/home.html', // Path to your HTML template
      filename: './html/home.html', // Name of the generated HTML file
      chunks: ['apod_feature', 'time_feature', 'calendar_feature', 'nav_feature', 'hero_style', 'proj_style'],
      // imgOutputPath: 'img/',
    }),

    new HtmlWebpackPlugin({
      template: './src/html/about.html', // Path to your HTML template
      filename: './html/about.html', // Name of the generated HTML file
      chunks: ['nav_feature','about_style'],
      // imgOutputPath: 'img/',
    }),

    new HtmlWebpackPlugin({
      template: './src/html/contact.html', // Path to your HTML template
      filename: './html/contact.html', // Name of the generated HTML file
      chunks: ['nav_feature'],
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
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },

      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[ext]',
        },
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false, // You may want to enable this in production
            },
          },
        ],
      },

      // {
      //   test: /\.(png|jpg|jpeg|webp)$/i,
      //   include: path.resolve(__dirname,'src/img'),
      //   // exclude: path.resolve(__dirname, 'src/html'),
      //     use: [
      //     {
      //       loader: 'file-loader', 
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'img', // This is the output directory where the image will be placed
      //       },
      //     },
      //   ],
      // },
      
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

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // The root directory for your server
    },

    hot: true, // Enable hot module replacement
    port: 8080, // Port to run the dev server on (you can change this as needed)
    
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/html/home.html' },
      ],
    },
  },
};
