var path = require('path');

var friends = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res){
    var userInput = req.body;

    var userResponses = userInput.scores

    var matchedPerson = "";
    var matchedImage = "";
    var difference = 10000;
    for(var i = 0; i<friends.length; i++){
      var diff=0;
      for (var x=0; x<userResponses.length; x++) {
        diff +=Math.abs(friends[i].scores[x] - userResponses[x]);
      }
      if (diff<difference) {
        difference = diff;
        matchedPerson = friends[i].name;
        matchedimage = friends[i].photo
      }
    }
    friends.push(userInput);
    res.json({status:"OK", matchedPerson: matchedPerson, matchedImage: matchedImage});
  });
};