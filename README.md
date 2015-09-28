# Selenium JavaScript Disabled Example

This repository shows an example of end-to-end testing with selenium with both JavaScript enabled and disabled.

`about.html` has a script block at the bottom of the page that will update the text inside a `<h1>` element if JS is enabled.

The key to testing with JS disabled is to use the browser name `htmlunit` with selenium webdriver. This example uses the [nightwatch](http://nightwatchjs.org) testing framework but should work with any testing framework that supports providing the browser name. 

Uses selenium server with Chrome but has been tested with selenium server with Firefox. `htmlunit` does not need to be installed separately, at least with the [official Selenium docker containers](https://github.com/SeleniumHQ/docker-selenium).  

## To Run

Requires docker. See `Makefile` to start the app container and a selenium server. Inside the app container:

- `npm install`
- `npm start`
- `npm test`