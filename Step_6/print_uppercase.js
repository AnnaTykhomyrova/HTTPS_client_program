var httpFunctions = require('../Step_5/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  console.log(html.toUpperCase());

}

httpFunctions.getHTML(requestOptions, printUpperCase);


