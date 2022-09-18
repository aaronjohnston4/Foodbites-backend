///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// ... the rest of our other dependencies

// import recipe router
const recipeController = require('./controllers/recipe-controller')


//connecting cors and morgan
const cors = require("cors")
const morgan = require("morgan")


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
app.use(express.json()); 
app.use(cors()); 
app.use(morgan("dev")); 
app.use('/recipe', recipeController)

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
