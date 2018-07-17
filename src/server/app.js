const path = require('path');
const express = require('express');
const app = express();
const api = require('./api')



app.use('/api/v1' , api)
app.use('/*', express.static(path.join(__dirname,'..','client','build','index.html')));



app.use((err, req, res, next) => {
  throw err;
  res.status(500).send('Something broke!');
});
