const express = require ("express");
const path = require ("path");
const app = express ();

const PORT = process.env.PORT || 8080;

// Body Parser Middleware;
// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. 
// can parse incoming Request Object if object, with nested objects, or generally any type (not just strings or arrays).
app.use(express.urlencoded({ extended: true }));
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(express.json());


app.listen (PORT, () => console.log ("Server started on port" + PORT));