var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    var bestBuddy = {
        name: "",
        photo: "",
        buddyMatch: 1000
    };
    console.log(userScores);
    var totalDifference = 0;

    for (let i=0; i<friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;

        for (let j=0; j<friends[i].scores[j] - parseInt(friends[i].scores[j]));
        if (totalDifference <= bestBuddy.buddyMatch) {
            bestBuddy.name = friends[i].name;
            bestBuddy.photo = friends[i].photo;
            bestBuddy.buddyMatch = totalDifference;
        }
    }

  friends.push(userData);
  res.json(bestBuddy);
  });
};
