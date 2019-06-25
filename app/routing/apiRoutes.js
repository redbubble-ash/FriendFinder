var express = require("express");
var router = express.Router();
var friends = require("../data/friends")


module.exports = (router) => {

    router.get("/api/friends", (req, res) => {
        res.json(friends)
    })

    router.post("/api/friends", (req, res) => {

        var friendMatch = {
            name: "",
            photo: "",
            scoreDifference: Infinity
        }

        var userData = req.body;
        var userScore = req.body.scores;
        var totalScoreDifference ;


        for (var i = 0; i < friends.length; i++) {

            var selectedFriend = friends[i];
            
            //reset to zero when start to compare with a new friend
            totalScoreDifference = 0;

            console.log(selectedFriend.name);

            for (var j = 0; j < selectedFriend.scores.length; j++) {

                var scoreToCompare = selectedFriend.scores[j];
                var currentUserScore = userScore[j];
                totalScoreDifference += Math.abs(parseInt(scoreToCompare) - parseInt(currentUserScore));

            }


            if (totalScoreDifference <= friendMatch.scoreDifference) {

                friendMatch.scoreDifference = totalScoreDifference;
                friendMatch.name = selectedFriend.name;
                friendMatch.photo = selectedFriend.photo;

            }

        }

        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).

        friends.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(friendMatch)
        console.log("Best Match is " + JSON.stringify(friendMatch.scoreDifference) + JSON.stringify(friendMatch.name) )

    })

}