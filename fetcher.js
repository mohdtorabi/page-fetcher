const url = process.argv[2];
const localPath = process.argv[3];
const fs = require('fs');
const request = require('request');

request(url, (error, response, body) => {

  //console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
  
  fs.writeFile(localPath, body, (error) => {

    if (error) {
      console.log("failed to read");
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }

  });
  
});



/* http.createServer(function(request, response) {
  console.log('request ', request.url);

  let filePath = '.' + request.url;
  if (filePath === './') {
    filePath = './index.html';
  }
  fs.readFile(filePath, function(error, content) {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.readFile('./404.html', function(error, content) {
          response.writeHead(404, { 'Content-Type': 'text/html' });
          response.end(content, 'utf-8');
        });
      } else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
      }
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(content, 'utf-8');
    }
  });


}).Listen(arg[1]);

 */
