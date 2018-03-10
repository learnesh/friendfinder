//Dependencies
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.send('friend finder');
});

//Require path
app.use('/friendfinder', function(req, res, next) {
    var path = url.parse(req.url).pathname;
    if ( !req.session.user ) {
      res.redirect('/login?ref='+path);
    } else {
      next();
    }
});


app.listen(3000);

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})


// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
