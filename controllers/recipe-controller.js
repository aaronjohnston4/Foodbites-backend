// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()

///////////////////////////////
// Routes
////////////////////////////////

// Recipe Index Route
router.get("/", async (req, res) => {
	res.status(200).json({message: "recipe index route"})
});

// Recipe Create Route
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "recipe create route"})
});

// Recipe Show Route
router.get("/:id", async (req, res) => {
	res.status(200).json({message: "recipe show route: " + req.params.id })
});

// Recipe Delete Route
router.delete("/:id", async (req, res) => {
	res.status(200).json({message: "recipe delete route: " + req.params.id })
});

// Recipe Update Route
router.put("/:id", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "recipe update route: " + req.params.id })
});

module.exports = router
