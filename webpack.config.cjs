const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports =
{
  mode: 'development', 
  
  // Entry points for different features and styles
  entry: 
  {
    apod_feature: ['./src/js/apod.js', './src/css/apod_style.css'],
    time_feature: ['./src/js/special_day.mjs', './src/css/countdown.css'],
    calendar_feature: ['./src/js/calendar.mjs', './src/css/cal_style.css'],
    nav_feature: ['./src/js/active.js', './src/css/nav_style.css'],
    hero_style: './src/css/hero_style.css',
    proj_style: './src/css/proj_style.css',
    
    about_style: './src/css/about_style.css',
    cred_showcase: ['./src/js/cred_enlarge.js','./src/css/gallery_style.css'],
    
    contact_style: './src/css/contact_style.css',
  }, 
  
  // Output configuration for bundled files
  output: 
  {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'js/[name].js', 
  },
  
  // Plugins for additional tasks in the build process
  plugins: 
  [
    // Clean the 'dist' directory before each build
    new CleanWebpackPlugin(),

    // Load environment variables from a .env file
    new DotenvWebpackPlugin({
      path: './.env',
    }),
    

    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

     // Generate HTML files with injected script and style tags
    new HtmlWebpackPlugin({
      template: './src/html/home.html', 
      filename: 'html/home.html',
      chunks: ['apod_feature', 'time_feature', 'calendar_feature', 'nav_feature', 'hero_style', 'proj_style'],
    }),

    new HtmlWebpackPlugin({
      template: './src/html/about.html', 
      filename: 'html/about.html', 
      chunks: ['nav_feature','about_style','cred_showcase'],
    }),

    new HtmlWebpackPlugin({
      template: './src/html/contact.html', 
      filename: 'html/contact.html', 
      chunks: ['nav_feature','contact_style'],
    }),
  ],

  // Module rules for handling different file types
  module: 
  {
    rules: 
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 
        {
          loader: 'babel-loader',
          options: 
          {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // Process CSS files
      {
        test: /\.css$/,
        use: 
        [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },

      // Process image files
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: 
        {
          filename: 'img/[name].[ext]',
        },
      },

      // Process HTML files
      {
        test: /\.html$/,
        use: 
        [
          {
            loader: 'html-loader',
            options: 
            {
              minimize: false, // You may want to enable this in production
            },
          },
        ],
      },  
    ],
  },

  // Resolve configuration for fallback modules
  resolve: 
  {
    fallback: 
    {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    },
  },

  // Development server configuration
  devServer: 
  {
    static: 
    {
      directory: path.join(__dirname, 'dist'), 
    },
  
    hot: true, // Enable hot module replacement
    port: 8080,  // Port to run the dev server on

    historyApiFallback: 
    {
      rewrites:
      [
        { from: /^\/$/, to: '/html/home.html' },
        {from: /^\/home/, to: '/html/home.html'},
        {from: /^\/about/, to: '/html/about.html'},
        {from: /^\/contact/, to: '/html/contact.html'},
      ],
    },
  },
};
