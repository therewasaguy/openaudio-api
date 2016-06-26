'use strict';

var googleImages = require('google-images');

var client = googleImages(process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID, process.env.GOOGLE_API_KEY);
console.log(client);

module.exports.search = function(query, req, res) {
  client.search(query)
      .then(function (images) {
        res.send(images);
          /*
          [{
              "url": "http://steveangello.com/boss.jpg",
              "type": "image/jpeg",
              "width": 1024,
              "height": 768,
              "size": 102451,
              "thumbnail": {
                  "url": "http://steveangello.com/thumbnail.jpg",
                  "width": 512,
                  "height": 512
              }
          }]
           */
      })
      .catch(function(err) {
        console.log(err);
        res.status(err.status).send({'error': 'there was an error'});
      });
};