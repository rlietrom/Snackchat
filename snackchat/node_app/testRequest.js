'use strict';
var express = require('express');
var app = express();

// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Your Google Cloud Platform project ID
const projectId = 'snackchat-d4ab1';

// Instantiates a client
const visionClient = Vision({
  projectId: projectId
});

// The name of the image file to annotate
const fileName = '../resources/mouse.jpg';


app.get('/', function(req, res) {
  console.log("Hit / route");
  console.log("Vision Client" ,visionClient);
  // Performs label detection on the image file
  visionClient.detectLabels(fileName)
  .then((results) => {
    const labels = results[0];
    console.log("Results: ", results[1]);
    console.log('Labels:');
    labels.forEach((label) => console.log(label));
    res.status(200).send('Hello from Horizons!');
  })
  .catch((err) => {
    res.JSON(err);
    console.error('ERROR:', err);
  });
})

var server = app.listen('8080', function(){
  console.log("App listening on port 8080!");
})
