# Web-Portfolio

For the Code You web development project, I wanted to showcase a website related to one of my many interests. Due to the complexity of api intergration, I decided to look on the other end of the spectrum, professionalism and personal branding.  

<details>
  <summary>Table of Contents</summary>
  <ol type="I">
    <li><a href="#steps-for-building-the-project">Steps for building the Project</a>
      <ul>
        <li><a href="#nasa-apis-key-provisioning">NASA APIs Key Provisioning</a>
          <ol>
            <li><a href="#steps-to-produce-a-env-file">Steps to produce a .env file</a></li>
            <li><a href="#steps-to-use-a-env-file">Steps to use a .env file</a></li>
            <li><a href="#steps-to-update-webpack-to-use-env-file">Steps to update Webpack to use .env file</a></li>
          </ol>
        </li>
      </ul>
    </li>
    <li><a href="#steps-for-running-the-project">Steps for running the Project</a>
      <ol type="1">
        <li><a href="#using-koajs">Using Koa.js</a></li>
        <li><a href="#using-webpack-development-server">Using Webpack Development Server</a></li>
        <li><a href="#using-live-server">Using Live Server</a></li>
      </ol>
    </li>
    <li><a href="#current-implemented-features">Current Implemented Features</a></li>
  </ol>
</details>




## Steps for Building the Project

1. Clone the project's repository using Git Bash

This command will create a copy of my remote Git repository, which will be located in the current working directory on the requesting local machine.

```
git clone https://github.com/alex431/Web-Portfolio.git
```

2. Run the following command inside of a terminal within visual studio code

This command will install all the dependencies and devDependencies listed in the package.json file

```
npm install
```

### NASA APIs Key Provisioning
* Visit https://api.nasa.gov/ 
* Enter the following information:
    * First name
    * Last name
    * Valid email address

You should receive an email with the associated email address within a few minutes after the submission.The email may appear in the spam/junk folder.

There is a provided sample.env template to use in order to incorporate an API key associated with 
NASA APIs.

#### Steps to produce a .env file
1. Open sample.env
2. Change 'variable_name' to a approiate name associated with NASA APIs
3. Replace 'api_key' with 'your_api_key' 

#### Steps to use a .env file 
1. Navigate to src/js/apod.js
2. Open apod.js
3. Use the following syntax to assign the chosen 'variable name' to apiKey: 

```
const apiKey = process.env.[variable_name];
```
#### Steps to update Webpack to use .env file
1. Open webpack.config.cjs
2. Adjust the path for the new DotenvWebpackPlugin 

```
path: ./sample.env
```

3. You can run either command inside a terminal of visual studio code to build the project using webpack.

This command  will run the custom script to build the project defined in the package.json file.  

```
npm run build
```
<p style="text-align: center;">or</p>

This command will run webpack based on the specifications found in its configuration file.
```
npx webpack --config webpack.config.cjs
```

Note: Running either command will produce seperate folder, 'dist' in the root directory. The'dist' folder contains the bundled code. 

## Steps for Running the Project

There are 3 methods to run the project after building it with webpack.

1. Use koa.js
2. Use webpack development server
3. Use live server extension

### Using Koa.js

This command will use the custom koa script to run the project.
```
npm run koa
```
<p style="text-align: center;">or</p>

This command will use node.js javascript runtime to run the project   
```
node koa.cjs 
```
### Using Webpack development server 

This command will use the custom serve script to run the project
```
npm run serve
```
<p style="text-align: center;">or</p>

This command will run the webpack developemnt server and open the default web browser.
```
npx webpack-dev-server --config webpack.config.cjs --open
```
### Using Live Server
1. Launch the visual studio code's live server extension
2. Navigate to the following relative path:
```
dist/html/home.html
``` 
<p style="text-align: center;">or</p>

1. Navigate to the dist/html folder
2. Right-click on home.html  
3. Select 'Open with Live Server' option
         
## Current Implemented Features
*  Calculate and display data based on an external factor
    - Located within the calendar-container on the home.html page
    - Used a combination of esm and vanilla javascript to write two functions
        * The first function determines if the current day is on or passes a specific hardcoded day
        * The second function calculates the number of days remaining between the current or selected day and the specific hardcoded day. Then, it displays the number of remaining days in the 'coundown-display'
    - Used my birthday as the specific hardcoded day
*  Retrieve data from a third-party API and use it to display something within your app
    - Located within the apod-container on the home.html page
    - Utilized API key and stored it in an .env file
    - Fetches data from the Astromomy Picture of the Day or APOD's API
        * Occasionally, there will be video as opposed to an image.
        * The following accommodations were made upon this discovery:
            - An iframe to hold an video
            - An conditional statement that checks the type of media and displays its contents. 
*  Implement modern interactive UI features (e.g. table/data sorting, autocomplete, drag-and-drop,calendar-date-picker, etc).
    - Located within the calendar-container on the home.html page
    - The user is allowed to select a new date. When a new date is selected, it becomes highlighted in blue. The calculation of the number of remaining days will take into account the selected day and display the new result in 'countdown-display'  
    - The initial date of the calendar-date-picker is the current date. It is highlighted in yellow.
* Create a node.js web server using a modern framework such as Express.js or Fastify.  Serve at least one route that your app uses (must serve more than just the index.html file).
    - Located in koa.cjs
    - Using koa.js , modern web framework for Node.js
        * Used 'koa-static' middleware to serve static files from the 'dist' directory
        * Used 'koa-router' to handle the routes for the '/','/html/home','/html/about'.and '/html/contact'
    - Set up koa to listen on port 3000 and handling cleanup when koa is shutdown 

 




