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
const fileName = 'https://s3-us-west-1.amazonaws.com/horizons-hackathon-snackchat/uploads/image.png';

import NutritionFacts from 'nutrition-facts'

const NF = new NutritionFacts('hrbPZg66gjAlAMTsyJ20csfGqevaf8FEWtyNr1Rg');

// app.get('/', function(req, res) {
//   console.log("Hit / route");
//   console.log("Vision Client" ,visionClient);
//   // Performs label detection on the image file
//   visionClient.detectLabels(fileName)
//   .then((results) => {
//     const labels = results[0];
//     console.log("Results: ", results[1]);
//     console.log('Labels:');
//     labels.forEach((label) => console.log(label));
//     res.status(200).send('Hello from Horizons!');
//   })
//   .catch((err) => {
//     res.JSON(err);
//     console.error('ERROR:', err);
//   });
// })

app.get('/', function(req, res) {
  NF.searchFoods({
    q: 'salted butter',
    ds: 'Standard Reference'
  }).then(results => {

    // Returns search results
    let mySelectedItem = results.list.item[0]

    // Items are returned as a FoodItem instance
    // allowing you to call 'getNutrition' directly on the instance.
    mySelectedItem.getNutrition()
    .then(nutritionReport => {
      console.log(nutritionReport)
    }).catch(err => {
      console.log(err)
    })

  }).catch(err => {
    console.log(err)
  })

  // Alternatively, if you know the NDBNO off-hand
  // you can call 'getNutrition' from the NF instance.

  NF.getNutrition('01001','b')
  .then(nutritionReport => {
    console.log(nutritionReport)
  }).catch(err => {
    console.log(err)
  })

})

var server = app.listen('8080', function(){
  console.log("App listening on port 8080!");
})
