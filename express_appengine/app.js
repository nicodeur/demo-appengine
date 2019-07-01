'use strict';

if (process.env.GAE_SERVICE) {

  let urlsRegex = '^((?!\/'+process.env.staging+'\/).)*$' 
  
  require('@google-cloud/trace-agent').start({
    samplingRate: 5, // sample 1 traces per second, or at most 1 every 200 milliseconds.
    ignoreMethods: ['options'], // ignore requests with OPTIONS method (case-insensitive).
    ignoreUrls: [ urlsRegex ], // ignore all paths without '/preprod/' or '/prod' 
    serviceContext: {
      service: process.env.GAE_SERVICE,
      version: process.env.GAE_VERSION,
      minorVersion : process.env.GAE_VERSION
    }
  })

}

const health = require('./health')
const endpoints = require('./endpoints')

const express = require('express');
const app = express();

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

health(app)
endpoints(app)


// Start the server
const PORT = process.env.PORTSERVER || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
