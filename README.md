[![Build Status](https://travis-ci.org/andela-ooyewole/inverted-index.svg?branch=develop)](https://travis-ci.org/andela-ooyewole/inverted-index)
[![Coverage Status](https://coveralls.io/repos/github/andela-ooyewole/inverted-index/badge.svg?branch=master)](https://coveralls.io/github/andela-ooyewole/inverted-index?branch=master)
# inverted-index Application

This application implements an Inverted Index data structure. This data structure allows search for words in text blocks to be quick and efficient. You can read more about Inverted indexes [here](https://www.elastic.co/guide/en/elasticsearch/guide/current/inverted-index.html)

## About the Application
To use this application, upload any JSON file of your choice that has the format below:
```
[
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
]
```
This application creates an Inverted Index from each text property of the JSON file. After creating the index, you can search for a word (or multiple words) in a single file or all files.

## Using the Application

#### Online
This application is hosted on Heroku and can be accessed through this [link] (https://checkpoint1-inverted-index.herokuapp.com/)

#### Local installation
This app can be installed and run locally. Follow the steps below
- Clone this repo
```
git clone https://github.com/andela-ooyewole/inverted-index
```
- Install dependencies (Ensure you have [Node.js] (nodejs.org) installed (version 6.9.4))
```
npm install
```
- Run tests in your console
```
npm test
```
- Start the application
```
npm start
```
This launches the app on your default browser on http://localhost:8000
and launches the test on http://localhost:8888

## This application was designed & built with the following technologies
- Node dependencies(found in the package.json file: for running tasks and tests
- Angular JS: Adding extra functionality to the HTML elements
- Angular Material: For styling the web page
- TravisCI: Continuous integration for the repo and build badge
- HoundCI: Checks for style violations
- Coveralls: Code coverage
