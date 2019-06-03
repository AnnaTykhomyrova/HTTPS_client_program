var https = require('https');
var chanck = '';

function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
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

module.exports = {
  getHTML: getHTML,
  printHTML: printHTML
};

