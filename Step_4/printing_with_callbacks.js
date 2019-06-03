var https = require('https');
var chanck = '';

function getHTML (options, callback) {

https.get(options, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    //console.log('Chunk Received:', data + '/n');
    chanck = chanck + data;
  });

  response.on('end', function() {
    console.log('Response stream complete.');
    printHTML(chanck);
  });
});
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML(chanck));