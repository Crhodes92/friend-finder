var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//allows us to access public directory for css files
app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//adds in pathing routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//Listening on specified port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });