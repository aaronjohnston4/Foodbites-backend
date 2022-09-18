// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// RECIPE INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "recipe index route"})
});

// RECIPE CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "recipe create route"})
});

module.exports = router
