var httpFunctions = require('../Step_5/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  console.log(html.split('').reverse().join(''));

}

httpFunctions.getHTML(requestOptions, printReverse);


