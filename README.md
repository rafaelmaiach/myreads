![MyReadsLogo](https://raw.githubusercontent.com/rafaelmaiach/myreads/master/readme-images/MyReads.jpg)
# MyReads
**MYREADS** is the first project from the **Udacity's React Developer Nanodegree** program. You'll create a bookshelf application that allows you to select and sort books you've read, are reading or want to read. The project emphasizes using React to build the application and provides an API server and client library, which you will use to store information as you interact with the application.

[Try out the demo](https://myreads-rafaelmaiach.herokuapp.com)


## Table of contents

 - [How to install](#installation)
 - [How to run](#how-to-run)
	 - [Development mode](#development-mode)
	 - [Production mode](#production-mode)
 - [How it works](#how-it-works)
	 - [Start page](#start-page)
	 - [Access page](#access-page)
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
[(Back to top)](#myreads)

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
[(Back to top)](#myreads)

## How it works

This project has four pages: Start, Access, Bookshelf and Search.

### Start page
This page can be accessed through **/main** path. It shows the MyReads logo and a button (**FIND A BOOK**) to access the bookshelf. 

If the user has already logged in, this button redirects it to [Bookshelf Page](#bookshelf-page) or to [Access Page](#access-page) if not.

### Access page
This page can be accessed through **/auth** path. The user can't be logged in to see it. If it is, it will be redirect to [Start Page](#start-page).  It is separated in two parts: Author quotes, where a random author's quote is shown and the form where the user can sign in or sign up.

The authentication system is simple and was built using [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage) as its database and sign in / sign up actions have field validation using [YUP](#built-with). 

**Sign In form:** When the user provides a valid e-mail and password, the sign in button will redirect it to [Bookshelf Page](#bookshelf-page) or show an error message if it's invalid.

**Sign Up form**: When the user provides a valid fullname, e-mail and password, the sign up button will redirect it to the **sign in form** or show an error message if it's invalid.

I started it simple to learn more about the concepts of a authentication system. I'll continue studying about it to learn about missing features like data encryption, real database, recovery password system and security on front and back-end.

### Bookshelf page
This page can be accessed through **/** path, but only if the user is successful authenticated and logged in. If not, this page will redirect it to [Start Page](#start-page). 

On the header of this page, user can:

 - **Logout** from the system, using the Logout button on header
 - Change between three bookshelves **currently reading**, **want to read**, **read**, where each one has its own set of books
 - Go to [Search Page](#search-page) using the magnifying glass button

For each bookshelf, the user will see the set of books that are present on that bookshelf and, for each book, the user can see informations about it and clicking on **See more** button, a modal appears with more information. The books can also be moved to another bookshelf or removed from the current one using the **(...)** dropdown button which shows a list of the bookshelves to move it or a option to remove it.

### Search page

[(Back to top)](#myreads)

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

[(Back to top)](#myreads)

## Walkthrough the project


### Migrating from third-parties boilerplates to my own boilerplate

### From SCSS to Styled-Components

### Thinking about performance

[(Back to top)](#myreads)
