///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// ... the rest of our other dependencies

// import recipe router
const recipeController = require('./controllers/recipe-controller')


// initialize .env variables
require("dotenv").config();
require('./config/db.connection')
// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// import express
const express = require("express");

// create application object
const app = express();


///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

// all requests for endpoints that begin with '/people'
app.use('/recipes', recipeController)

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
