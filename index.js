const express = require('express');
const app = express();
const api = require('./routes/api');
const pages = require('./routes/pages');

// set the view engine to ejs
app.set('view engine', 'ejs');

// route to pages
app.use('/', pages);

// route to api
app.use('/api', api);

// allow static pages
app.use(express.static('static'))

app.listen(8080);
console.log('Server is listening on port 8080');