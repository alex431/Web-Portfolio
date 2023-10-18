# Web-Portfolio

For the Code You web development project, I wanted to showcase a website related to one of my many interests. Due to the complexity of api intergration, I decided to look on the other end of the spectrum, professionalism and personal branding.  

Note: This is an node.js project.Thus, there is assumption that node.js and npm is already installed. The utilized version of node is 20.7.0 and the utilized version of npm is 10.1.0.

This command will initiate the project as a node.js project and create json file. The json is used to track installed npm packages and their dependencies. One of the benefits of initializing projects is that it allows you to install npm locally vs globally. 

```
npm init -y
```

```
npm install [package]
```

<u>Required Packages</u>
* babel-loader
* @babel/core
* @babel/preset-env
* webpack
* webpack-cli
* html-webpack-plugin
* style-loader
* css-loader
* os-browserify
* path-browserify
* stream-browserify
* crypto-browserify
* buffer
* dotenv 
* donenv-webpack

<u>Configuration Files</u><br>
* babel.config.json
    * User-created
    * Associated with Babel
    * Utilized for compiling ES2015+ syntax
* .webpack.config.js
    * User-created
    * Associated with Webpack
    * Utilized for bundling CSS and JS files together
* .env
    * User-created
    * Associated with environmental variables
    * Utilized for holding API keys     
