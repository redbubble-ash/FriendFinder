var express = require("express");
var router = express.Router();
var path = require("path");

// A GET Route to `/survey` which should display the survey page.
router.get("/survey", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/survey.html"))

});


// If no matching route is found default to home page.
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

module.exports = htmlRoutes;