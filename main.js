import express from "express";

// const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.json({msg: 'hello world!'});
});

const port  = 4000;

app.listen(port, ()=>{
    console.log( `The server is running at http://localhost: ${port}`);
})
