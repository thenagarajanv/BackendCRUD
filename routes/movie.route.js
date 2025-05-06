import express from "express";

const router = express.Router();

// R -> For reading movies
router.get("/", (req,res) => {
    res.send("list of all movies!!");
});

// P -> For creating movies
router.post("/", () => {
    res.send("create a movie");
})

// U -> For updating movies
router.put(`/:id`,() => {
    res.send("update the movie")
})

// For -> For delete movies
router.delete("/:id",()=>{
    res.send("delete the movie")
})

export default router;