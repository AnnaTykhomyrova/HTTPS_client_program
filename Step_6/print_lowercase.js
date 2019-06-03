var httpFunctions = require('../Step_5/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  console.log(html.toLowerCase());

}

httpFunctions.getHTML(requestOptions, printLowerCase);
