// ECHO is on.

const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

//MongoDB connection
require('./db');

app.use(express.json());

//Test route
app.get("/", (req,res) => {
    res.send("Ok");
})

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});