const express = require("express");
const app = express();

// default port to listen
const port = 3000;

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("<h1>#Hello_SLIIT</h1>");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
