var express = require("express");
var router = express.Router();
var friends = require("../data/friends")

router.get("/api/friends", (req, res) => {
    res.json(friends)
})

router.post("/api/friends", (req, res) => {

    var friendMatch = {
        name = "",
        photo = "",
        scoreDifference = Infinity
    }

    var userScore = req.body.scores;
    var totalScoreDifference = 0;


    for (i = 0; i < friends.length; i++) {

        var selectedFriend = friends[i];

        for (j = 0; j < selectedFriend.scores[j]; j++) {

            var scoreToCompare = selectedFriend.scores[j];
            totalScoreDifference += Math.abs(parseInt(scoreToCompare) - parseInt(userScore));

        }


        if (totalScoreDifference <= friendMatch.scoreDifference) {

            friendMatch.scoreDifference = totalScoreDifference;
            friendMatch.name = friends[i].name;
            friendMatch.photo = friends[i].photo;

        }

    }

    friends.push(req.body);

    res.json (friendMatch)

})

module.exports = apiRoutes;