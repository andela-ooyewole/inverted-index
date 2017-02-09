// Require express module to serve files for a web browser
const express = require('express');

const app = express();

// Use express.static middleware function to serve static files from the
// index.html file located
app.use(express.static(`${__dirname}/src`));

// Set port to URI on remote server or local host if remote server port is not
// detected
app.set('port', (process.env.PORT || 3000));


app.listen(app.get('port'), () => {
  // Node app is running on port 3000
});
