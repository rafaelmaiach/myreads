![MyReadsLogo](https://raw.githubusercontent.com/rafaelmaiach/myreads/master/MyReads.jpg)

**MYREADS** is the first project from the **Udacity's React Developer Nanodegree** program. You'll create a bookshelf application that allows you to select and sort books you've read, are reading or want to read. The project emphasizes using React to build the application and provides an API server and client library, which you will use to store information as you interact with the application.

[Try out the demo](https://myreads-rafaelmaiach.herokuapp.com)


## Table of contents

 - [How to install](#installation)
 - [How to run](#how-to-run)
	 - [Development mode](#development-mode)
	 - [Production mode](#production-mode)
 - [How it works](#how-it-works)
	 - [Start page](#start-page)
	 - [Access system](#access-system)
	 - [Bookshelf page](#bookshelf-page)
	 - [Search page](#search-page)
 - [Built with](#built-with)
 - [Walkthrough the project](#walkthrough-the-project)
	 - [Migrating from third-parties boilerplates to my own boilerplate](#migrating-from-third-parties-boilerplates-to-my-own-boilerplate)
	 - [From SCSS to Styled-Components](#from-scss-to-styled-components)
	 - [Thinking about performance](#thinking-about-performance)
 - [Contact me](#contact-me)
 

## How to install
To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/rafaelmaiach/myreads.git

# Go into the repository
$ cd myreads

# Install dependencies
$ npm install
```

## How to run
You can run the project in both environments: **development** and **production**. Be sure to have the dependencies installed before.

### Development mode
In this mode, hot loader is configured to be triggered on files changes.
```bash
# Run npm script for development mode
npm run dev
```

### Production mode
In this mode, a bundle is generated and compressed (gzip) by Webpack and the server serves the **GZIP** files to reduce the project size for client.
```bash
# Run npm script to build the project and generate bundle files
npm run build

# Run npm script for production mode
npm start
```

## How it works


## Built with
[Eslint AirBnb](https://www.npmjs.com/package/eslint-config-airbnb) - The Airbnb JavaScript lint rules to follow their style guide
[Express-static-gzip](https://www.npmjs.com/package/express-static-gzip) - Provides a small layer on top of _serve-static_, which allows to serve pre-gzipped files.
[Flow](https://github.com/facebook/flow) - A static typechecker for JavaScript
[Moize](https://github.com/planttheidea/moize) - A memoization library for JavaScript
[Pug](https://github.com/pugjs/pug) - A high-performance template engine
[React-loadable](https://github.com/jamiebuilds/react-loadable) - A higher order component for loading components with dynamic imports
[Recompose](https://github.com/acdlite/recompose) - A React utility belt for function components and higher-order components. Mainly used to take care of unecessary components re-renders
[Styled-components](https://github.com/styled-components/styled-components) - Allows you to write actual CSS code to style your components.
[Webpack 4](https://github.com/webpack/webpack) - A bundler for javascript and friends. Packs many modules into a few bundled assets.
[Yup](https://github.com/jquense/yup) - A JavaScript object schema validator and object parser.

You can check the other dependencies on _package.json_ file.

## Walkthrough the project
When

### Migrating from third-parties boilerplates to my own boilerplate

### From SCSS to Styled-Components

### Thinking about performance
