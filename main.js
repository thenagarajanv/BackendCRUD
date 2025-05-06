import express from "express";
import movieRoutes from "./routes/movie.route.js";

const app = express();
const port  = 4000;

app.use("/movies", movieRoutes);

/// Sending res to server
app.get("/", (req,res) => {
    res.json({msg: 'hello world!'});
});

// For checking server is live
app.listen(port, ()=>{
    console.log( `The server is running at http://localhost: ${port}`);
})

