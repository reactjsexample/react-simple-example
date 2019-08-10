# react-simple-example

Created by **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

Full source code available at [https://github.com/reactjsexample/react-simple-example](https://github.com/reactjsexample/react-simple-example)

## The Pupose of This Example

This React example app is the same as my other example app,
[react-redux-simple-example](https://github.com/reactjsexample/react-redux-simple-example)

...except that the other one uses Redux.

![react-simple-example-screen-shot](https://github.com/reactjsexample/react-simple-example/blob/master/src/assets/images/react-simple-example-screen-shot.png)

## Table of Contents

- [About The Author](#about-the-author)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [How To Install](#how-to-install)
  - [How To Run](#how-to-run)
- [Software Libraries Used](#software-libraries-used)
- [Installing The Libraries](#installing-the-libraries)

## About The Author

**JC Lango** is a UI Architect and UI Developer for large scale web applications at several Fortune 500 companies.

He is an expert in **Angular**, **Polymer**, and **React** and maintains these sites at Github:

- **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
- **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)
- **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remote, and can be contacted at these links:

- LinkedIn: [https://www.linkedin.com/in/jclango](https://www.linkedin.com/in/jclango)
- Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Project Setup

### Prerequisites

You need to have Node and NPM installed on your PC.

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### How To Install

Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run `npm i` to install the required libraries.

### How To Run

Open a terminal window and make sure you are in the project root folder.

Run the following command for a dev server.

#### `npm start`

Open your browser and go to [http://localhost:3000](http://localhost:3000)

The browser will automatically reload if you change any of the source files.

Open the browser's Developer Tools window to see any errors in the Console.

## Software Libraries Used

These are the main packages used in this app:

- ReactJS 16.8.4

For a complete list, see the [package.json](https://github.com/reactjsexample/react-simple-example/blob/master/package.json) file.

For installation instructions, see [Installing The Libraries](#installing-the-libraries)

### Installing The Libraries

**Note**: If you have downloaded this project, all the libraries will be installed when you run the npm install as described in the [How To Install](#how-to-install) section above.

In that case you don't need to do any of the following steps.

It is included here,
in case you want to build a new project from scratch on your own.

It also provides documentation on each library and its purpose. 

#### Install React

There are a few different ways to create your React App.

Start by reading [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)

If you use the [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) command, it will install the React library packages.

#### Install Prettier

[Prettier](https://prettier.io/) is a tool to format your code in a consistent way.

**Prettier** is not required for this project,
but it is a good practice to install it for each project,
because it helps to make the code more readable. 

`npm i --save-dev prettier`

Note: **--save-dev** saves it under the **devDependencies** section,
where it available during development, but not is not used during the build process.

I use [JetBrains WebStorm](https://www.jetbrains.com/webstorm/) as my code editor,
and under Preferences/Tools, I add File Watchers for Prettier  that automatically run Prettier on file save.

---
