// ./controllers/recipe-controller.js

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
router.post("/", async (req, res) => {
  try {
    console.log(req.body)
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

// Recipe Update Route
router.put("/:id", async (req, res) => {
    try {
      res.json(
        await Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  // Recipe Delete Route
  router.delete("/:id", async (req, res) => {
    try {
      res.json(await Recipe.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });

module.exports = router
