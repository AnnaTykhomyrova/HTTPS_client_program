var httpFunctions = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

httpFunctions.getHTML(requestOptions, httpFunctions.printHTML);