import express from "express";
import {
    MovieCreate,
    MovieDelete,
    MovieIndex,
    MovieUpdate
  } from "../controllers/movie.controller.js";
  
const router = express.Router();

// R -> For reading movies
router.get("/", MovieIndex);

// P -> For creating movies
router.post("/", MovieCreate)

// U -> For updating movies
router.put(`/:id`, MovieUpdate)

// For -> For delete movies
router.delete("/:id", MovieDelete)

export default router;