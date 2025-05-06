import express from "express";

// const express = require("express");

const app = express();
const port  = 4000;

// G -> For reading movies
app.get("/movies", (req,res) => {
    res.json({msg: 'hello world!'});
});

// P -> For creating movies
app.post("/movies", () => {

})

// U -> For updating movies
app.put(`/movies/:id`,() => {

})

// For -> For delete movies
app.delete("/movie/:id",()=>{

})

// For checking server is live
app.listen(port, ()=>{
    console.log( `The server is running at http://localhost: ${port}`);
})

