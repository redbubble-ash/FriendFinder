const express = require ("express");
const app = express ();
const router = express.Router();
var friends = require("./app/data/friends")

const PORT = process.env.PORT || 8080;

// Body Parser Middleware;
// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. 
// can parse incoming Request Object if object, with nested objects, or generally any type (not just strings or arrays).
app.use(express.urlencoded({ extended: true }));
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(express.json());

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");



// // //TEST router & friends module
// router.get("/api/friends",(req, res) => {
//     res.json (friends);
    
// });


// Tell express to use this router with '/' before.
// You can put just '/' if you don't want any sub path before routes.
app.use("/",router);

app.listen (PORT, () => console.log ("Server started on port" + PORT));