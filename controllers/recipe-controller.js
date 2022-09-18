// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()
const {Recipe} = require('../models')

///////////////////////////////
// Routes
////////////////////////////////

// Recipe Index Route
router.get("/", async (req, res) => {
	try {
    res.json(await Recipe.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Recipe Create Route
router.post("/post", async (req, res) => {
  try {
    // create new person
    res.json(await Recipe.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Recipe Show Route
router.get("/:id", async (req, res) => {
    try {
        // send one person
        res.json(await Recipe.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

// Recipe Delete Route
router.delete("/:id", async (req, res) => {
	res.status(200).json({message: "recipe delete route: " + req.params.id })
});

// Recipe Update Route
router.put("/:id/edit", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "recipe update route: " + req.params.id })
});

module.exports = router
