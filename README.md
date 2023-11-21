# Web-Portfolio

For the Code You web development project, I wanted to showcase a website related to one of my many interests. Due to the complexity of api intergration, I decided to look on the other end of the spectrum, professionalism and personal branding.  

Note: This is an node.js project.Thus, there is assumption that node.js and npm is already installed. The utilized version of node is 20.7.0 and the utilized version of npm is 10.1.0.

## Steps for Building the Project

1. Clone the project's repository using Git Bash

This command will create a copy of my remote Git repository, which will be located in the current working directory on the requesting local machine.

```
git clone https://github.com/alex431/Web-Portfolio.git
```

Note: If you are unsure of current working directory, you can use this command in Git Bash:

```
pwd
```

2. Run the following commands inside of a terminal within visual studio code

This command will initiate the project as a node.js project and create a package.json file with default values. The package.json file is used to track installed npm packages and their dependencies. One of the benefits of initializing projects is that it allows you to install npm locally vs. globally. 

```
npm init -y
```

Navigate to the directory where the package.json is located.This command will install all the dependencies and devDependencies listed in the package.json file

```
npm install
```
Note: The package.json file is typically found in the project's root folder. 

### Nasa APIs key Provisioning
* Visit https://api.nasa.gov/ 
* Enter the following information:
    * First name
    * Last name
    * Valid email address

You should receive an email with the associated email address within a few minutes after the submission.The email may appear in the spam/junk folder.

### Configuration Files
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

3. You can run the command inside a terminal of visual studio code to build the project using webpack.

This command  will run the custom portfolio script to build the project defined in the package.json file.  

```
npm run portfolio
```

Note: Running this command will produce seperate folder, 'dist' that contains the bundled code.  

## Steps for Running the Project

This command will run the project on port 3000.
```
npm run koa
```


## Current Implemented Features
*  Calculate and display data based on an external factor
    - Located within the calendar-container on the home.html page
    - Used my birthday as the desired day
*  Retrieve data from a third-party API and use it to display something within your app
    - Located within the apod-container on the home.html page
    - Fetches data from the Astromomy Picture of the Day or APOD's API 
*  Implement modern interactive UI features (e.g. table/data sorting, autocomplete, drag-and-drop,calendar-date-picker, etc).
    - Located within the calendar-container on the home.html page
    - Imported and customize FullCalendar
    - Dynamically tied the day selected by the user to the countdown to my birthday 

