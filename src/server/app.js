const path = require('path');
const express = require('express');
const app = express();
const api = require('./api')

app.use('/static', express.static(path.join(__dirname,'..','client','build','static')));
app.use('/assets', express.static(path.join(__dirname,'..','client','build','assets')));

app.use(function(req, res, next) {
	req.now = Date.now();
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1' , api)
console.log(path.join(__dirname,'..','client','build','index.html'));


app.use('*', (req , res , next)=> res.sendFile(path.join(__dirname,'..','client','build','index.html')))



app.use((err, req, res, next) => {
  throw err;
  res.status(500).send('Something broke!');
});


module.exports = app
